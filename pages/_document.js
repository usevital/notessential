import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`text-black bg-slate-200 dark:text-white dark:bg-slate-800 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-teal-700/80 dark:scrollbar-track-slate-800`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
