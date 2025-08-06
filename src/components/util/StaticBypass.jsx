import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StaticBypass = () => {
  const { filename } = useParams();

  useEffect(() => {
    if (filename && filename.endsWith('.jpg')) {
      // Перенаправляем на HTML версию
      const htmlVersion = filename.replace('.jpg', '.html');
      window.location.replace(`/ogimage/${htmlVersion}`);
    }
  }, [filename]);

  // Показываем красивую OG картинку прямо здесь
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
            About Us
          </h1>
          <p style={{
            fontSize: '32px',
            color: '#666',
            fontWeight: '400'
          }}>
            React Template Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaticBypass;