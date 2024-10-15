import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bannerLink: '#4A734E',
        bannerLinkText: '#F5F1DE',
        footerBackground: '#F5F1DE',
        dDayRed: '#F9DADA',
        dDayYellow: '#FCEFDA',
        dDayGreen: '#DBE3DC',
        dDayGray: '#D3D3D3',
        dDayTextRed: '#E24444',
        dDayTextYellow: '#F2AD48',
        dDayTextGreen: '#4A734E',
        dDayTextGray: '#7A7A7A',
        searchBorder: '#E24444',
      }
    },
  },
  plugins: [],
};
export default config;