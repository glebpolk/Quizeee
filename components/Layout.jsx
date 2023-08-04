const React = require("react");

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <script defer src="/scripts/scripts.js" />
        <script defer src="/scripts/answer.js" />
      </head>
      <body
        style={{
          backgroundImage:
            'url("https://celes.club/uploads/posts/2022-05/1653055037_9-celes-club-p-fon-dlya-kviza-krasivie-9.jpg")',
        }}
      >
        {children}
      </body>
    </html>
  );
};
