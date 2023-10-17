import '@/styles/globals.css'
import {Roboto,Roboto_Mono} from 'next/font/google'
const roboto=Roboto({ weight: ["300","400"],subsets:['latin']})
export const roboto_Mono = Roboto_Mono({ weight: "300",subsets:['latin']})
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
       <Component {...pageProps} />
    </main>
  )
}
