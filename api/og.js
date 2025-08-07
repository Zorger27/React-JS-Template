export const config = {
  runtime: 'edge',
}

export default function handler(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Определяем контент на основе URL
  const getOGContent = (path) => {
    switch(path) {
      case '/':
        return {
          title: 'Home Page',
          description: 'Welcome to our website',
          image: 'https://react-js-template.vercel.app/ogimage/home.jpg'
        };
      case '/about':
        return {
          title: 'About Us',
          description: 'Learn more about our company',
          image: 'https://react-js-template.vercel.app/ogimage/about.jpg'
        };
      case '/project1':
        return {
          title: 'Project 1',
          description: 'Our first amazing project',
          image: 'https://react-js-template.vercel.app/ogimage/project1.jpg'
        };
      case '/project2':
        return {
          title: 'Project 2',
          description: 'Our second amazing project',
          image: 'https://react-js-template.vercel.app/ogimage/project2.jpg'
        };
      case '/project3':
        return {
          title: 'Project 3',
          description: 'Our third amazing project',
          image: 'https://react-js-template.vercel.app/ogimage/project3.jpg'
        };
      case '/404':
        return {
          title: 'Page Not Found',
          description: 'The page you are looking for does not exist',
          image: 'https://react-js-template.vercel.app/ogimage/page404.jpg'
        };
      default:
        return {
          title: 'Page Not Found',
          description: 'The page you are looking for does not exist',
          image: 'https://react-js-template.vercel.app/ogimage/page404.jpg'
        };
    }
  };

  const content = getOGContent(pathname);

  const html = `<!DOCTYPE html>
<html lang="en">
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
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${content.title}">
  <meta name="twitter:description" content="${content.description}">
  <meta name="twitter:image" content="${content.image}">
  
  <script>
    // Перенаправляем на React приложение только для обычных пользователей
    if (!/bot|crawler|spider|crawling|facebookexternalhit|twitterbot|linkedinbot|slackbot|whatsapp/i.test(navigator.userAgent)) {
      window.location.replace('https://react-js-template.vercel.app${pathname === '/' ? '' : pathname}?spa=true');
    }
  </script>
</head>
<body>
  <h1>${content.title}</h1>
  <p>${content.description}</p>
  <p>Cargando...</p>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}