import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600&family=Open+Sans&family=PT+Sans:wght@400;700&family=Rubik:wght@400;700;900&family=Staatliches&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
      </body>
    </html>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Design Page</title>;
