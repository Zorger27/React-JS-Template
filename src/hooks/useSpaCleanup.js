import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Хук для очистки URL от параметров, добавленных Edge Function (для каждого компоненте страницы)

export const useSpaCleanup = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const isFromSPA = searchParams.get('spa') === 'true';

    // Если пришли из Edge Function, очищаем URL от служебных параметров
    if (isFromSPA) {
      const url = new URL(window.location);
      url.searchParams.delete('spa');
      url.searchParams.delete('lang');

      // Заменяем URL без перезагрузки страницы
      window.history.replaceState({}, '', url.pathname + (url.search || ''));
    }
  }, [location.search]);

  return null;
};