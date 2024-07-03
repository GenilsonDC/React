import type { AppProps } from 'next/app'
import '../../public/assets/css/style.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
