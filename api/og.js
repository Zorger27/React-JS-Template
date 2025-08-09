export default function handler(req, res) {
  try {
    // Логируем, чтобы видеть в Vercel Logs
    console.log("OG API CALLED FOR", req.url, "UA:", req.headers["user-agent"]);

    const siteUrl = process.env.VITE_SITE_URL;
    const path = req.url || "/";

    // Дефолтные OG-данные (главная)
    let title = "React JS Template";
    let description = "Welcome to the React JS Template home page.";
    let image = `${siteUrl}/ogimage/home.jpg`;
    let pageUrl = siteUrl;

    // Логика для страниц
    if (path.includes("/project1")) {
      title = "Project 1";
      description = "Description for Project 1.";
      image = `${siteUrl}/ogimage/project1.jpg`;
      pageUrl = `${siteUrl}/project1`;
    } else if (path.includes("/project2")) {
      title = "Project 2";
      description = "Description for Project 2.";
      image = `${siteUrl}/ogimage/project2.jpg`;
      pageUrl = `${siteUrl}/project2`;
    } else if (path.includes("/project3")) {
      title = "Project 3";
      description = "Description for Project 3.";
      image = `${siteUrl}/ogimage/project3.jpg`;
      pageUrl = `${siteUrl}/project3`;
    } else if (path.includes("/about")) {
      title = "About Us";
      description = "About this React JS Template.";
      image = `${siteUrl}/ogimage/about.jpg`;
      pageUrl = `${siteUrl}/about`;
    } else if (path.includes("/404")) {
      title = "Page Not Found";
      description = "The page you are looking for does not exist.";
      image = `${siteUrl}/ogimage/404.jpg`;
      pageUrl = `${siteUrl}/404`;
    }

    // Формируем полный HTML
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title}</title>
<meta name="description" content="${description}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${image}" />
<meta property="og:url" content="${pageUrl}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="${siteUrl}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${image}" />
</head>
<body>
<h1>${title}</h1>
<p>${description}</p>
<hr />
<p>DEBUG: Requested URL = ${path}</p>
<p>DEBUG: User-Agent = ${req.headers["user-agent"]}</p>
</body>
</html>`;

    // Отдаём
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.end(html);
  } catch (err) {
    console.error("OG API ERROR:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
