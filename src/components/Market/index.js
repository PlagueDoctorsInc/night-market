import { useState } from 'react'
import styles from './styles.module.css'

export default function Market() {
  const [tab, setTab] = useState('devs')
  return (
    <div>
      <div>
        <div>
          <div>img hldr</div>
          <div>wagmi.ethereum</div>
        </div>
        <div>
          <div>wagmi.ethereum</div>
          <div>Smart Contracts</div>
        </div>
      </div>
    </div>
  )
}
