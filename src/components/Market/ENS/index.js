import { Image } from 'next'
import styles from './styles.module.css'

export default function ENS({ name, job }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={`https://metadata.ethname.domains/images/1/${name}`} height={300} width={300} />
      </div>
      <div>
        <div>{name}.ethereum</div>
        <div>{job}</div>
      </div>
    </div>
  )
}
