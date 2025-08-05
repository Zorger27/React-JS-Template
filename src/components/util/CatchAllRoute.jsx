import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Компонент для обработки неизвестных маршрутов
 * Игнорит статические ресурсы и перенаправляет остальные на 404
 */
const CatchAllRoute = () => {
  const location = useLocation();

  // Список паттернов для статических ресурсов
  const staticPatterns = [
    /^\/ogimage\//,           // OG изображения для соцсетей
    /^\/assets\//,            // Ресурсы приложения
    /^\/images\//,            // Обычные изображения
    /^\/static\//,            // Статические файлы
    /^\/public\//,            // Публичные файлы
    /^\/media\//,             // Медиа файлы
    /^\/favicon\./,           // Favicon файлы
    /^\/robots\.txt$/,        // robots.txt
    /^\/sitemap\.xml$/,       // sitemap.xml
    /^\/manifest\.json$/,     // PWA manifest
    /^\/sw\.js$/,             // Service Worker
    /\.(jpg|jpeg|png|gif|svg|webp|avif|ico|pdf|zip|css|js|woff|woff2|ttf|eot|mp4|webm|ogg|json|xml|txt)$/i
  ];

  // Проверяем, является ли текущий путь статическим ресурсом
  const isStaticResource = staticPatterns.some(pattern =>
    pattern.test(location.pathname)
  );

  // Если это статический ресурс, не рендерим React компоненты
  // Позволяем браузеру обработать запрос как обычную ссылку
  if (isStaticResource) {
    // Не рендерим ничего, чтобы React Router не перехватывал запрос
    console.log(`Static resource detected: ${location.pathname} - letting browser handle it`);

    // Попытаемся перезагрузить страницу как статический ресурс
    // Но только один раз, чтобы избежать бесконечных циклов
    if (!sessionStorage.getItem('static-redirect-' + location.pathname)) {
      sessionStorage.setItem('static-redirect-' + location.pathname, 'true');
      window.location.href = location.pathname;
      return <div>Loading...</div>;
    }

    // Если перезагрузка не помогла, показываем 404
    return <Navigate to="/404" replace />;
  }

  // Логируем неизвестные маршруты для отладки
  console.warn(`Unknown route: ${location.pathname} - redirecting to 404`);

  // Иначе перенаправляем на 404
  return <Navigate to="/404" replace />;
};

export default CatchAllRoute;