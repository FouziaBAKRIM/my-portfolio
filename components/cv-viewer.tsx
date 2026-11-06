'use client';

import { useEffect, useRef, useState } from 'react';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import { cv } from '@/data';
import { SymbolIcon } from '@/components/icons';

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.25;
// ponytail: each page renders once at a fixed size and zoom is CSS only, so zoom
// is instant. Soft past ~200% on retina; re-render per zoom level if that matters.
const RENDER_SCALE = 2.5;

const iconButton =
  'flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg text-navy transition-colors hover:bg-sage-pale disabled:cursor-default disabled:opacity-35 disabled:hover:bg-transparent';

export function CvViewer({ onClose }: { onClose: () => void }) {
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const pagesRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    // No close() in cleanup: under StrictMode its late close event would call
    // onClose and shut the modal right after it opened.
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let destroy: (() => void) | undefined;

    import('pdfjs-dist')
      .then((pdfjs) => {
        if (cancelled) return null;
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url,
        ).toString();
        const task = pdfjs.getDocument({ url: cv.file });
        destroy = () => void task.destroy();
        return task.promise;
      })
      .then((doc) => {
        if (doc && !cancelled) setPdf(doc);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);

  useEffect(() => {
    if (!pdf) return;
    let cancelled = false;
    let current: RenderTask | undefined;

    const render = async () => {
      const canvases = pagesRef.current?.querySelectorAll('canvas') ?? [];
      for (let index = 0; index < canvases.length; index += 1) {
        const page = await pdf.getPage(index + 1);
        if (cancelled) return;
        const viewport = page.getViewport({ scale: RENDER_SCALE });
        const canvas = canvases[index];
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        current = page.render({ canvas, viewport });
        await current.promise;
      }
    };

    render().catch(() => {
      if (!cancelled) setFailed(true);
    });

    return () => {
      cancelled = true;
      current?.cancel();
    };
  }, [pdf]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="cv-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-auto h-[92dvh] max-h-none w-[min(56rem,calc(100vw-1.5rem))] max-w-none overflow-hidden rounded-3xl bg-sage-pale shadow-editorial-hover backdrop:bg-navy/60 motion-safe:transition-[opacity,translate] motion-safe:duration-300 starting:translate-y-4 starting:opacity-0"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-2 border-b border-navy/10 bg-cream-light px-2 py-2.5 sm:pr-4 sm:pl-6">
          <h2
            id="cv-title"
            className="sr-only font-serif text-lg font-medium text-navy sm:not-sr-only sm:truncate"
          >
            {cv.title}
          </h2>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <div className="flex items-center">
              <button
                type="button"
                aria-label={cv.zoomOutLabel}
                disabled={!pdf || zoom <= MIN_ZOOM}
                onClick={() => setZoom(zoom - ZOOM_STEP)}
                className={iconButton}
              >
                −
              </button>
              <span
                aria-live="polite"
                className="w-12 text-center font-mono text-xs text-charcoal/70"
              >
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                aria-label={cv.zoomInLabel}
                disabled={!pdf || zoom >= MAX_ZOOM}
                onClick={() => setZoom(zoom + ZOOM_STEP)}
                className={iconButton}
              >
                +
              </button>
            </div>
            <a
              href={cv.file}
              download
              aria-label={cv.downloadLabel}
              className="inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-2 text-sm font-medium text-cream transition-colors hover:bg-navy-light sm:px-4"
            >
              <span className="hidden sm:inline">{cv.downloadLabel}</span>
              <SymbolIcon name="download" className="text-[16px]" />
            </a>
            <button
              type="button"
              aria-label={cv.closeLabel}
              onClick={() => dialogRef.current?.close()}
              className={iconButton}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-6">
          {failed ? (
            <p
              role="alert"
              className="py-24 text-center text-sm text-charcoal/80"
            >
              {cv.errorLabel}
            </p>
          ) : pdf ? (
            <div
              ref={pagesRef}
              className="mx-auto space-y-4"
              style={{ width: `${zoom * 100}%` }}
            >
              {Array.from({ length: pdf.numPages }, (_, index) => (
                <canvas
                  key={index}
                  role="img"
                  aria-label={`${cv.pageLabel} ${index + 1} / ${pdf.numPages}`}
                  className="h-auto w-full rounded-lg bg-white shadow-editorial"
                />
              ))}
            </div>
          ) : (
            <p
              role="status"
              className="py-24 text-center text-sm text-charcoal/70"
            >
              {cv.loadingLabel}
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
}
