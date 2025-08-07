import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StaticBypass = () => {
  const { filename } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Пытаемся загрузить настоящее изображение
  useEffect(() => {
    if (filename) {
      const img = new Image();
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageError(true);
      img.src = `/ogimage/${filename}`;
    }
  }, [filename]);

  // Если изображение загружается - показываем его
  if (imageLoaded) {
    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f0f0f0',
        margin: 0,
        padding: 0
      }}>
        <img
          src={`/ogimage/${filename}`}
          alt={filename}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>
    );
  }

  // Если изображение не найдено - показываем fallback CSS-картинку
  if (imageError) {
    const getOGContent = (filename) => {
      if (filename === 'about.jpg') {
        return {
          title: 'About Us',
          subtitle: 'React Template Project'
        };
      }
      if (filename === 'project1.jpg') {
        return {
          title: 'Project 1',
          subtitle: 'Amazing React Project'
        };
      }
      return {
        title: 'Page',
        subtitle: 'React Template'
      };
    };

    const content = getOGContent(filename);

    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{
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
        }}>
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            opacity: '0.1',
            top: '-100px',
            left: '-100px'
          }}></div>
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            opacity: '0.1',
            bottom: '-100px',
            right: '-100px'
          }}></div>
          <div style={{
            textAlign: 'center',
            zIndex: 2
          }}>
            <h1 style={{
              fontSize: '72px',
              fontWeight: '800',
              color: '#333',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              {content.title}
            </h1>
            <p style={{
              fontSize: '32px',
              color: '#666',
              fontWeight: '400'
            }}>
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Загрузка
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '18px'
    }}>
      Loading...
    </div>
  );
};

export default StaticBypass;