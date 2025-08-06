(function() {
  // Проверяем, является ли текущий URL запросом к OG изображению
  if (window.location.pathname.startsWith('/ogimage/')) {
    console.log('OG Bypass: Detected OG image request');

    // Предотвращаем загрузку React приложения
    const stopReactLoading = () => {
      // Находим корневой элемент React
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.innerHTML = '';
      }

      const filename = window.location.pathname.split('/ogimage/')[1];
      console.log('OG Bypass: Loading image:', filename);

      // Очищаем body и добавляем стили
      document.body.innerHTML = '';
      document.body.style.cssText = `
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
      `;

      // Создаем изображение
      const img = document.createElement('img');
      img.src = `/ogimage/${filename}`;
      img.alt = filename;
      img.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        display: block;
      `;

      // Обработка успешной загрузки
      img.onload = function() {
        console.log('OG Bypass: Image loaded successfully');
        // Устанавливаем правильный Content-Type через мета-тег
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Type');
        meta.setAttribute('content', 'image/jpeg');
        document.head.appendChild(meta);
      };

      // Обработка ошибки загрузки
      img.onerror = function() {
        console.log('OG Bypass: Image load failed');
        document.body.innerHTML = `
          <div style="
            text-align: center; 
            font-family: Arial, sans-serif;
            color: #333;
          ">
            <h2>Image not found</h2>
            <p>The requested OG image "${filename}" was not found.</p>
          </div>
        `;
      };

      document.body.appendChild(img);
    };

    // Если DOM уже загружен, выполняем сразу
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', stopReactLoading);
    } else {
      stopReactLoading();
    }

    // Также блокируем все React скрипты
    const originalAppendChild = document.head.appendChild;
    document.head.appendChild = function(element) {
      if (element.tagName === 'SCRIPT' &&
        (element.src && element.src.includes('react') ||
          element.src && element.src.includes('main'))) {
        console.log('OG Bypass: Blocked React script:', element.src);
        return element;
      }
      return originalAppendChild.call(this, element);
    };
  }
})();