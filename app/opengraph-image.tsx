import { ImageResponse } from 'next/og';
import { profile, siteConfig } from '@/data';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#F5F0E6',
        padding: '80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: '#4F644F',
        }}
      >
        {profile.jobTitle}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 18,
          fontSize: 84,
          lineHeight: 1.05,
          color: '#192A40',
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 28,
          maxWidth: 820,
          fontSize: 32,
          lineHeight: 1.35,
          color: '#192A40',
        }}
      >
        I turn complex data into meaningful insights through analysis,
        visualization and data-driven solutions.
      </div>
    </div>,
    { ...size },
  );
}
