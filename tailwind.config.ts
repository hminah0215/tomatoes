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
        // sub: 일반적으로 배경, 텍스트, 섹션 구분 등에 사용. 눈에 덜 띄며 시각적 안정성
        // point: 주로 강조하고 싶은 요소나 중요한 요소에 사용. 버튼, 강조된 텍스트 등
        // 끝에 붙는 숫자: 밝기 또는 채도를 의미하며, 숫자가 커질수록 진하고 어두운 색상.
        'main-beige': '#F5F1DE',
        'point-red-100': '#F9DADA',
        'point-red-500': '#E24444',
        'point-green-100': '#DBE3DC',
        'point-green-500': '#4A734E',
        'sub-yellow-100': '#FCEFDA',
        'sub-yellow-500': '#F2AD48',
        'sub-gray-100': '#D3D3D3',
        'sub-gray-200': '#A7A7A7',
        'sub-gray-300': '#7A7A7A',
        'sub-gray-400': '#4E4E4E',
        'sub-gray-500': '#222222',
      },
      fontFamily: {
        recipe: ['Recipekorea', 'Pretendard', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;