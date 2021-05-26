import 'tailwindcss/tailwind.css'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
