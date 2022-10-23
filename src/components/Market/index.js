import styles from './styles.module.css'

export default function Market() {
  return (
    <div>
      <button className={styles.tabBtn}>Developers (169)</button>
      <button className={styles.tabBtn}>Artists (2204)</button>
      <button className={styles.tabBtn}>Marketing (124)</button>
      <button className={styles.tabBtn}>Managers (101)</button>
      <button className={styles.tabBtn}>Advisors (62)</button>
      <button className={styles.tabBtn}>Traders (3337)</button>
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
