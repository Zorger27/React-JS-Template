export default function handler(req, res) {
  try {
    const siteUrl = process.env.VITE_SITE_URL;
    const [pathOnly, queryString] = (req.url || "/").split("?");
    const params = new URLSearchParams(queryString);
    let lang = params.get("lang");

    const acceptLang = req.headers["accept-language"] || "";

    // Если параметра нет — пробуем Accept-Language
    if (!lang) {
      if (acceptLang.startsWith("uk")) lang = "uk";
      else if (acceptLang.startsWith("es")) lang = "es";
      else lang = "en";
    }

    // Дефолт на английский
    if (!["en", "uk", "es"].includes(lang)) lang = "en";

    // Мэппинг языков для og:locale
    const localeMap = {
      en: "en_US",
      uk: "uk_UA",
      es: "es_ES"
    };

    // Автор проекта
    // const author = {
    //   name: "Anatolii Zorin",
    //   url: "https://zorin.expert",
    //   social: {
    //     github: "https://github.com/zorger27",
    //     linkedin: "https://www.linkedin.com/in/anatolii-zorin"
    //   }
    // };

    const translations = {
      home: {
        en: { title: "My Projects (React Vite PWA Template)", desc: "This is the Project's Main Page (created by Anatolii Zorin)" },
        uk: { title: "Мої проекти (React Vite PWA Template)", desc: "Це головна сторінка проекту (створено Анатолієм Зоріним)" },
        es: { title: "Mis Proyectos (React Vite PWA Template)", desc: "Esta es la página principal del proyecto (creado por Anatolii Zorin)" }
      },
      project1: {
        en: { title: "Project № 1", desc: "Brief description of the first project (created by Anatolii Zorin)" },
        uk: { title: "Проект № 1", desc: "Короткий опис першого проекту (створено Анатолієм Зоріним)" },
        es: { title: "Proyecto Nº 1", desc: "Breve descripción del primer proyecto (creado by Anatolii Zorin)" }
      },
      project2: {
        en: { title: "Project № 2", desc: "Brief description of the second project (created by Anatolii Zorin)" },
        uk: { title: "Проект № 2", desc: "Короткий опис другого проекту (створено Анатолієм Зоріним)" },
        es: { title: "Proyecto Nº 2", desc: "Breve descripción del segundo proyecto (creado por Anatolii Zorin)" }
      },
      project3: {
        en: { title: "Project № 3", desc: "Brief description of the third project (created by Anatolii Zorin)" },
        uk: { title: "Проект № 3", desc: "Короткий опис третього проекту (створено Анатолієм Зоріним)" },
        es: { title: "Proyecto Nº 3", desc: "Breve descripción del tercer proyecto (creado por Anatolii Zorin)" }
      },
      about: {
        en: { title: "About", desc: "Detailed project information (created by Anatolii Zorin)" },
        uk: { title: "Про проект", desc: "Детальна інформація про проект (створено Анатолієм Зоріним)" },
        es: { title: "Sobre", desc: "Información detallada del proyecto (creado por Anatolii Zorin)" }
      },
      page404: {
        en: { title: "Page Not Found", desc: "Page 404 - page not found (created by Anatolii Zorin)" },
        uk: { title: "Сторінку не знайдено", desc: "Сторінка 404 - сторінку не знайдено (створено Анатолієм Зоріним)" },
        es: { title: "Página no encontrada", desc: "Página 404 - página no encontrada (creado por Anatolii Zorin)" }
      }
    };

    let key = "home";
    let image = `${siteUrl}/ogimage/home.jpg`;
    let pageUrl = siteUrl;

    if (pathOnly.includes("/project1")) {
      key = "project1";
      image = `${siteUrl}/ogimage/project1.jpg`;
      pageUrl = `${siteUrl}/project1`;
    } else if (pathOnly.includes("/project2")) {
      key = "project2";
      image = `${siteUrl}/ogimage/project2.jpg`;
      pageUrl = `${siteUrl}/project2`;
    } else if (pathOnly.includes("/project3")) {
      key = "project3";
      image = `${siteUrl}/ogimage/project3.jpg`;
      pageUrl = `${siteUrl}/project3`;
    } else if (pathOnly.includes("/about")) {
      key = "about";
      image = `${siteUrl}/ogimage/about.jpg`;
      pageUrl = `${siteUrl}/about`;
    } else if (pathOnly.includes("/404")) {
      key = "page404";
      image = `${siteUrl}/ogimage/404.jpg`;
      pageUrl = `${siteUrl}/404`;
    }

    const { title, desc } = translations[key][lang] || translations[key]["en"];
    const locale = localeMap[lang];

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
<meta property="og:url" content="${pageUrl}?lang=${lang}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="${locale}" />
<meta property="og:site_name" content="${siteUrl}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${desc}" />
<meta name="twitter:image" content="${image}" />
<meta name="twitter:creator" content="@Regroz" />
<meta name="twitter:site" content="@Regroz" />
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
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}