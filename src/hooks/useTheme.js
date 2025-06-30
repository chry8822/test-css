import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // 로컬 스토리지에서 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    // 시스템 테마 확인
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // HTML 요소에 data-theme 속성 설정
    document.documentElement.setAttribute('data-theme', theme);

    // 로컬 스토리지에 저장
    localStorage.setItem('theme', theme);

    console.log('🎨 테마 변경:', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
