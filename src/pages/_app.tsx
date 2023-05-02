import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// import { Lexend_Exa } from 'next/font/google'
import localFont from 'next/font/local'

const techno = localFont({
  src: [
    {
      path: '../../public/fonts/techno-chain-futuristic-technology-font/Techno Chain.otf',
    },
  ],
  variable: '--font-techno'
})
const lexend = localFont({
  src: [
    {
      path: '../../public/fonts/Lexend_Exa/LexendExa-VariableFont_wght.ttf',
    },
  ],
  variable: '--font-lexend'
})

// const lexend = Lexend_Exa({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lexend' })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${techno.variable} ${lexend.variable} bg-black relative overflow-x-hidden `}><Component {...pageProps} /></div>
}
