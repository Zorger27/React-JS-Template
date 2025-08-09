export default function handler(req, res) {
  try {
    const urlPath = req.url || "/";
    const siteUrl = process.env.VITE_SITE_URL || "https://react-js-template.vercel.app";

    // Главная страница (по умолчанию)
    let title = "React JS Template";
    let description = "Welcome to the React JS Template home page.";
    let image = `${siteUrl}/ogimage/home.jpg`;
    let pageUrl = siteUrl;

    if (urlPath.includes("/project1")) {
      title = "Project 1";
      description = "Description for Project 1.";
      image = `${siteUrl}/ogimage/project1.jpg`;
      pageUrl = `${siteUrl}/project1`;
    } else if (urlPath.includes("/project2")) {
      title = "Project 2";
      description = "Description for Project 2.";
      image = `${siteUrl}/ogimage/project2.jpg`;
      pageUrl = `${siteUrl}/project2`;
    } else if (urlPath.includes("/project3")) {
      title = "Project 3";
      description = "Description for Project 3.";
      image = `${siteUrl}/ogimage/project3.jpg`;
      pageUrl = `${siteUrl}/project3`;
    } else if (urlPath.includes("/about")) {
      title = "About Us";
      description = "About this React JS Template.";
      image = `${siteUrl}/ogimage/about.jpg`;
      pageUrl = `${siteUrl}/about`;
    } else if (urlPath.includes("/page404") || urlPath.includes("/404")) {
      title = "Page Not Found";
      description = "The page you are looking for does not exist.";
      image = `${siteUrl}/ogimage/page404.jpg`;
      pageUrl = `${siteUrl}/404`;
    }

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
</body>
</html>`;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.end(html);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
