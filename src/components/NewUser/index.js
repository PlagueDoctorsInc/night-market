import { useRef, useState } from 'react'
import styles from './styles.css.modules'
import Radio from './Radio'
import About from './About'

export default function NewUser() {
  const category = useRef('')
  const [page, setPage] = useState(0)
  const handleChange = (event) => {
    category.current = event.target.value
  }

  return (
    <div>
      {page === 0 ? 
      <Radio handleChange={handleChange} /> :
      <About name={'gavin'} job={'Fullstack Web3 Dev'}/>
    }
      <button className={styles.continueBtn} onClick={() => {
        setPage(page + 1)
      }}>Continue</button>
    </div>
  )
}
