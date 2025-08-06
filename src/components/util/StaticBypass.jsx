import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const StaticBypass = () => {
  const { filename } = useParams();

  useEffect(() => {
    if (filename) {
      // Используем href вместо replace для более надежного перенаправления
      window.location.href = `/ogimage/${filename}`;
    }
  }, [filename]);

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