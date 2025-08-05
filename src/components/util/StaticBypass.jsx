import React from 'react';

const StaticBypass = () => {
  React.useEffect(() => {
    window.location.href = window.location.pathname;
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <p>Загрузка изображения...</p>
    </div>
  );
};

export default StaticBypass;
