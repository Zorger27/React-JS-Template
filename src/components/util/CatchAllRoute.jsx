import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Компонент для обработки неизвестных маршрутов
 * Проверяет, является ли путь статическим ресурсом и пропускает их к серверу,
 * иначе перенаправляет на страницу 404
 */
const CatchAllRoute = () => {
  const location = useLocation();

  // Список паттернов для статических ресурсов
  const staticPatterns = [
    // Папки со статическими ресурсами
    /^\/ogimage\//,           // OG изображения для соцсетей
    /^\/assets\//,            // Ресурсы приложения
    /^\/images\//,            // Обычные изображения
    /^\/static\//,            // Статические файлы
    /^\/public\//,            // Публичные файлы
    /^\/media\//,             // Медиа файлы

    // Специальные файлы
    /^\/favicon\./,           // Favicon файлы (favicon.ico, favicon.png, etc.)
    /^\/robots\.txt$/,        // robots.txt
    /^\/sitemap\.xml$/,       // sitemap.xml
    /^\/manifest\.json$/,     // PWA manifest
    /^\/sw\.js$/,             // Service Worker

    // Файлы по расширению
    /\.(jpg|jpeg|png|gif|svg|webp|avif|ico)$/i,     // Изображения
    /\.(pdf|doc|docx|zip|rar|7z)$/i,                // Документы и архивы
    /\.(css|js|map)$/i,                             // Стили и скрипты
    /\.(woff|woff2|ttf|eot|otf)$/i,                 // Шрифты
    /\.(mp4|webm|ogg|mp3|wav|flac)$/i,              // Медиа файлы
    /\.(json|xml|txt)$/i                            // Конфигурационные файлы
  ];

  // Проверяем, является ли текущий путь статическим ресурсом
  const isStaticResource = staticPatterns.some(pattern =>
    pattern.test(location.pathname)
  );

  // Если это статический ресурс, возвращаем null
  // (позволяем серверу обработать запрос)
  if (isStaticResource) {
    console.log(`Static resource detected: ${location.pathname}`);
    return null;
  }

  // Логируем неизвестные маршруты для отладки
  console.warn(`Unknown route: ${location.pathname} - redirecting to 404`);

  // Иначе перенаправляем на 404
  return <Navigate to="/404" replace />;
};

export default CatchAllRoute;