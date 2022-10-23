import { ConnectButton, useAccount } from '@web3modal/react'
import styles from '../styles/Home.module.css'
import NewUser from '../components/NewUser'

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
      <NewUser />
    </>
  )
}

export default Home
