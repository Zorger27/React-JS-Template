export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // ОТЛАДКА: принудительно обрабатываем главную страницу
  if (pathname === '/') {
    console.log('HOME PAGE DETECTED');
  }

  // Определяем язык из заголовков браузера
  const acceptLanguage = request.headers.get('accept-language') || '';
  const langParam = url.searchParams.get('lang');

  let language = 'en'; // по умолчанию английский

  if (langParam) {
    language = langParam;
  } else if (acceptLanguage.toLowerCase().includes('uk')) {
    language = 'uk';
  } else if (acceptLanguage.toLowerCase().includes('es')) {
    language = 'es';
  }

  // Переводы для meta-тегов (статические переводы)
  const translations = {
    // Украинский
    uk: {
      home: {
        name: 'Головна сторінка',
        disc: 'Це головна сторінка проекту'
      },
      about: {
        nameOG: 'Про проект',
        disc: 'Детальна інформація про проект'
      },
      project1: {
        name: 'Проект № 1',
        disc: 'Короткий опис першого проекту'
      },
      project2: {
        name: 'Проект № 2',
        disc: 'Короткий опис другого проекту'
      },
      project3: {
        name: 'Проект № 3',
        disc: 'Короткий опис третього проекту'
      },
      page404: {
        name: 'Сторінка 404',
        disc: 'Сторінка 404 – сторінку не знайдено'
      },
      extra: {
        loading: 'Йде завантаження...'
      }
    },
    // Английский
    en: {
      home: {
        name: 'Main page',
        disc: 'This is the Project\'s Main Page'
      },
      about: {
        nameOG: 'About',
        disc: 'Detailed project information'
      },
      project1: {
        name: 'Project № 1',
        disc: 'Brief description of the first project'
      },
      project2: {
        name: 'Project № 2',
        disc: 'Brief description of the second project'
      },
      project3: {
        name: 'Project № 3',
        disc: 'Brief description of the third project'
      },
      page404: {
        name: 'Page Not Found',
        disc: 'Page 404 - page not found'
      },
      extra: {
        loading: 'Loading...'
      }
    },
    // Испанский
    es: {
      home: {
        name: 'Página principal',
        disc: 'Esta es la página principal del proyecto'
      },
      about: {
        nameOG: 'Sobre',
        disc: 'Información detallada del proyecto'
      },
      project1: {
        name: 'Proyecto № 1',
        disc: 'Breve descripción del primer proyecto'
      },
      project2: {
        name: 'Proyecto № 2',
        disc: 'Breve descripción del segundo proyecto'
      },
      project3: {
        name: 'Proyecto № 3',
        disc: 'Breve descripción del tercer proyecto'
      },
      page404: {
        name: 'Página No Encontrada',
        disc: 'Página 404 - página no encontrada'
      },
      extra: {
        loading: 'Cargando...'
      }
    }
  };

  const t = translations[language] || translations.en;

  // Определяем контент на основе URL с использованием переводов
  const getOGContent = (path) => {
    switch(path) {
      case '/':
        return {
          title: t.home.name,
          description: t.home.disc,
          image: 'https://react-js-template.vercel.app/ogimage/home.jpg'
        };
      case '/about':
        return {
          title: t.about.nameOG,
          description: t.about.disc,
          image: 'https://react-js-template.vercel.app/ogimage/about.jpg'
        };
      case '/project1':
        return {
          title: t.project1.name,
          description: t.project1.disc,
          image: 'https://react-js-template.vercel.app/ogimage/project1.jpg'
        };
      case '/project2':
        return {
          title: t.project2.name,
          description: t.project2.disc,
          image: 'https://react-js-template.vercel.app/ogimage/project2.jpg'
        };
      case '/project3':
        return {
          title: t.project3.name,
          description: t.project3.disc,
          image: 'https://react-js-template.vercel.app/ogimage/project3.jpg'
        };
      case '/404':
        return {
          title: t.page404.name,
          description: t.page404.disc,
          image: 'https://react-js-template.vercel.app/ogimage/page404.jpg'
        };
      default:
        return {
          title: t.page404.name,
          description: t.page404.disc,
          image: 'https://react-js-template.vercel.app/ogimage/page404.jpg'
        };
    }
  };

  const content = getOGContent(pathname);

  // Локали для Open Graph
  const locales = {
    uk: 'uk_UA',
    en: 'en_US',
    es: 'es_ES'
  };

  const html = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.title}</title>
  <meta name="description" content="${content.description}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${content.title}">
  <meta property="og:description" content="${content.description}">
  <meta property="og:image" content="${content.image}">
  <meta property="og:url" content="https://react-js-template.vercel.app${pathname}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="React JS Template">
  <meta property="og:locale" content="${locales[language]}">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${content.title}">
  <meta name="twitter:description" content="${content.description}">
  <meta name="twitter:image" content="${content.image}">
  
  <!-- Дополнительные meta теги -->
  <meta name="robots" content="index, follow">
  <meta name="author" content="React JS Template">
  <link rel="canonical" href="https://react-js-template.vercel.app${pathname}">
  
  <script>
    // Отладочная информация (удалите в продакшене)
    console.log('User Agent:', navigator.userAgent);
    console.log('Language detected:', '${language}');
    console.log('Accept-Language:', '${acceptLanguage}');
    
    // Перенаправляем на React приложение только для обычных пользователей
    if (!/bot|crawler|spider|crawling|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp|telegram|pinterest|discord/i.test(navigator.userAgent)) {
      const targetUrl = 'https://react-js-template.vercel.app${pathname === '/' ? '' : pathname}?spa=true&lang=${language}';
      window.location.replace(targetUrl);
    }
  </script>
</head>
<body>
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
    <h1 style="color: #333; margin-bottom: 20px; font-size: 2.5rem;">${content.title}</h1>
    <p style="color: #666; font-size: 18px; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">${content.description}</p>
    <p style="color: #999; font-size: 16px;">${t.extra.loading}</p>
    
    <!-- Индикатор загрузки -->
    <div style="margin-top: 20px;">
      <div style="display: inline-block; width: 20px; height: 20px; border: 3px solid #f3f3f3; border-top: 3px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    </div>
    
    <!-- Fallback для случаев, когда JS отключен -->
    <noscript>
      <div style="margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; max-width: 400px; margin-left: auto; margin-right: auto;">
        <p style="margin-bottom: 15px; color: #333;">JavaScript is required to view this site.</p>
        <a href="https://react-js-template.vercel.app${pathname}" 
           style="color: #667eea; text-decoration: none; font-weight: 500; border: 2px solid #667eea; padding: 10px 20px; border-radius: 5px; display: inline-block;">
          Continue to site →
        </a>
      </div>
    </noscript>
  </div>
  
  <style>
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}