import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StaticBypass = () => {
  const { filename } = useParams();

  useEffect(() => {
    // Перенаправляем на статический файл
    const staticUrl = `/ogimage/${filename}`;
    window.location.replace(staticUrl);
  }, [filename]);

  // Показываем загрузку пока происходит перенаправление
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