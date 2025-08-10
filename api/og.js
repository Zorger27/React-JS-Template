export default function handler(req, res) {
  try {
    const siteUrl = process.env.VITE_SITE_URL;
    const path = req.url?.split("?")[0] || "/";

    // Достаём язык из query (?lang=uk)
    const queryParams = new URLSearchParams(req.url.split("?")[1] || "");
    let lang = queryParams.get("lang");

    // Если в query нет, пробуем заголовок Accept-Language
    if (!lang) {
      const acceptLang = req.headers["accept-language"] || "";
      if (acceptLang.startsWith("uk")) lang = "uk";
      else if (acceptLang.startsWith("es")) lang = "es";
      else lang = "en";
    }

    // Локализованные данные
    const translations = {
      home: {
        en: {title: "My Projects (React Vite PWA Template)", desc: "This is the Project's Main Page (created by Anatolii Zorin)"},
        uk: {title: "Мої проєкти (React Vite PWA Template)", desc: "Це головна сторінка проєкту (створено Анатолієм Зоріним)"},
        es: {title: "Mis Proyectos (React Vite PWA Template)", desc: "Esta es la página principal del proyecto (creado por Anatolii Zorin)"}
      },
      project1: {
        en: { title: "Project № 1", desc: "Brief description of the first project (created by Anatolii Zorin)" },
        uk: { title: "Проєкт № 1", desc: "Короткий опис першого проєкту (створено Анатолієм Зоріним)" },
        es: { title: "Proyecto Nº 1", desc: "Breve descripción del primer proyecto (creado por Anatolii Zorin)" }
      },
      project2: {
        en: { title: "Project № 2", desc: "Brief description of the second project (created by Anatolii Zorin)" },
        uk: { title: "Проєкт № 2", desc: "Короткий опис другого проєкту (створено Анатолієм Зоріним)" },
        es: { title: "Proyecto Nº 2", desc: "Breve descripción del segundo proyecto (creado por Anatolii Zorin)" }
      },
      project3: {
        en: { title: "Project № 3", desc: "Brief description of the third project (created by Anatolii Zorin)" },
        uk: { title: "Проєкт № 3", desc: "Короткий опис третього проєкту (створено Анатолієм Зоріним)" },
        es: { title: "Proyecto Nº 3", desc: "Breve descripción del tercer proyecto (creado por Anatolii Zorin)" }
      },
      about: {
        en: { title: "About", desc: "Detailed project information (created by Anatolii Zorin)" },
        uk: { title: "Про проєкт", desc: "Детальна інформація про проєкт (створено Анатолієм Зоріним)" },
        es: { title: "Acerca del proyecto", desc: "Información detallada del proyecto (creado por Anatolii Zorin)" }
      },
      page404: {
        en: { title: "Page Not Found", desc: "Page 404 - page not found (created by Anatolii Zorin)" },
        uk: { title: "Сторінку не знайдено", desc: "Сторінка 404 - сторінку не знайдено (створено Анатолієм Зоріним)" },
        es: { title: "Página no encontrada", desc: "Página 404 - página no encontrada (creado por Anatolii Zorin)" }
      }
    };

    // Определяем ключ страницы и картинку
    let key = "home";
    let image = `${siteUrl}/ogimage/home.jpg`;
    let pageUrl = siteUrl;

    if (path.includes("/project1")) {
      key = "project1";
      image = `${siteUrl}/ogimage/project1.jpg`;
      pageUrl = `${siteUrl}/project1`;
    } else if (path.includes("/project2")) {
      key = "project2";
      image = `${siteUrl}/ogimage/project2.jpg`;
      pageUrl = `${siteUrl}/project2`;
    } else if (path.includes("/project3")) {
      key = "project3";
      image = `${siteUrl}/ogimage/project3.jpg`;
      pageUrl = `${siteUrl}/project3`;
    } else if (path.includes("/about")) {
      key = "about";
      image = `${siteUrl}/ogimage/about.jpg`;
      pageUrl = `${siteUrl}/about`;
    } else if (path.includes("/404")) {
      key = "page404";
      image = `${siteUrl}/ogimage/404.jpg`;
      pageUrl = `${siteUrl}/404`;
    }

    const { title, desc } = translations[key][lang] || translations[key]["en"];

    // Формируем HTML
    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${desc}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:image" content="${image}" />
<meta property="og:url" content="${pageUrl}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${siteUrl}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${desc}" />
<meta name="twitter:image" content="${image}" />
</head>
<body>
<h1>${title}</h1>
<p>${desc}</p>
</body>
</html>`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
