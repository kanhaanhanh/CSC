import '@/styles/globals.css'
import { Toaster } from 'sonner'


export default function App({ Component, pageProps }) {
  return  <>
  <Toaster visibleToasts="1" richColors   />
  <Component {...pageProps} />
  </>
}
