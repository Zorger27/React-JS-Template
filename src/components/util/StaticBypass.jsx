import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const StaticBypass = () => {
  const { t } = useTranslation();
  const { filename } = useParams();

  // Состояния для отслеживания загрузки изображения
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Мемоизированная функция получения контента для OG изображений (вычисляется только при изменении filename или t)
  const ogContent = useMemo(() => {
    const contentMap = {
      'about.jpg': {
        title: t('about.nameOG'),
        subtitle: t('about.disc')
      },
      'home.jpg': {
        title: t('home.name'),
        subtitle: t('home.disc')
      },
      'page404.jpg': {
        title: t('page404.name'),
        subtitle: t('page404.disc')
      },
      'project1.jpg': {
        title: t('project1.name'),
        subtitle: t('project1.disc')
      },
      'project2.jpg': {
        title: t('project2.name'),
        subtitle: t('project2.disc')
      },
      'project3.jpg': {
        title: t('project3.name'),
        subtitle: t('project3.disc')
      }
    };

    // Возвращаем контент для конкретного файла или дефолтный
    return contentMap[filename] || {
      title: t('page.name'),
      subtitle: t('page.disc')
    };
  }, [filename, t]);

  // Мемоизированные стили для оптимизации рендеринга
  const styles = useMemo(() => ({
    // Контейнер для изображения
    imageContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      margin: 0,
      padding: 0
    },
    // Стили изображения
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      display: 'block'
    },
    // Основной контейнер для fallback OG изображения
    fallbackContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    // OG карточка
    ogCard: {
      width: '1200px',
      height: '630px',
      background: 'white',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden'
    },
    // Декоративные круги
    decorativeCircle: {
      position: 'absolute',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      opacity: '0.1'
    },
    // Контент OG карточки
    ogContent: {
      textAlign: 'center',
      zIndex: 2
    },
    // Заголовок
    ogTitle: {
      fontSize: '65px',
      fontWeight: '800',
      color: '#333',
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    // Подзаголовок
    ogSubtitle: {
      fontSize: '30px',
      color: '#666',
      marginLeft: '10px',
      marginRight: '10px',
      fontWeight: '400'
    },
    // Загрузка
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '28px',
      color: '#666'
    }
  }), []);

  // Эффект для загрузки изображения (очистка ресурсов, отслеживание состояния)
  useEffect(() => {
    if (!filename) {
      setImageError(true);
      setIsLoading(false);
      return;
    }

    const img = new Image();
    const imagePath = `/ogimage/${filename}`;

    // Обработчики событий
    const handleLoad = () => {
      setImageLoaded(true);
      setImageError(false);
      setIsLoading(false);
    };

    const handleError = () => {
      setImageLoaded(false);
      setImageError(true);
      setIsLoading(false);
    };

    // Устанавливаем обработчики до установки src
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = imagePath;

    // Очистка ресурсов при размонтировании компонента
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [filename]);

  // Рендер загруженного изображения
  if (imageLoaded) {
    return (
      <div style={styles.imageContainer}>
        <img
          src={`/ogimage/${filename}`}
          alt={`Open Graph image for ${filename}`}
          style={styles.image}
          loading="lazy" // Ленивая загрузка для оптимизации
        />
      </div>
    );
  }

  // Рендер fallback CSS-генерируемого OG изображения
  if (imageError) {
    return (
      <div style={styles.fallbackContainer}>
        <div style={styles.ogCard}>
          {/* Декоративные элементы */}
          <div
            style={{
              ...styles.decorativeCircle,
              top: '-100px',
              left: '-100px'
            }}
          />
          <div
            style={{
              ...styles.decorativeCircle,
              bottom: '-100px',
              right: '-100px'
            }}
          />

          {/* Основной контент */}
          <div style={styles.ogContent}>
            <h1 style={styles.ogTitle}>
              {ogContent.title}
            </h1>
            <p style={styles.ogSubtitle}>
              {ogContent.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Рендер состояния загрузки (показывается, пока определяется доступность изображения)
  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div>
          {t('extra.loading')}
        </div>
      </div>
    );
  }

  // Этот случай не должен произойти, но на всякий случай
  return null;
};

export default StaticBypass;