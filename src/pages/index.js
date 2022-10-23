import { ConnectButton, useAccount } from '@web3modal/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { address, connector, isConnected } = useAccount()
  return (
    <>
      <div>
        <div>
          <div>img hldr</div>
          <div>
            <a>Home</a>
            <a>Help</a>
          </div>
          {isConnected ? address : <ConnectButton />}
        </div>
      </div>

      <div>
        <div>Powered by .ethereum NS</div>
        <h1>NIGHT MARKET</h1>
        <h3>Find your Web3 people.</h3>
      </div>
    </>
  )
}

export default Home
