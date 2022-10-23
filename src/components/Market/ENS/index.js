import styles from './styles.module.css'

export default function ENS({ name, job }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={`https://metadata.ethname.domains/images/1/${name}`} height={250} width={250} />
      </div>
      <div>
        <div>{name}.ethereum</div>
        <div>{job}</div>
      </div>
    </div>
  )
}
