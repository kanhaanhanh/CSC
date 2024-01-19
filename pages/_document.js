import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
          <meta
            name="Cross-Origin-Opener-Policy"
            content="same-origin-allow-popups"
          />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
