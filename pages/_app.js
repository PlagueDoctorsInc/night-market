import '../styles/globals.css'
import { Web3Modal } from '@web3modal/react'

const modalConfig = {
  projectId: '5d505c3da78b67e87d25921985997ce2',
  theme: 'dark',
  accentColor: 'blue',
  ethereum: {
    appName: 'web3Modal',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Web3Modal config={modalConfig} />
    </>
  )
}

export default MyApp
