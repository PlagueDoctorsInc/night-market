import styles from './styles.module.css'

export default function TabBar({ tab, setTab }) {
  return (
    <div className={styles.container}>
      <button
        className={`${styles.tabBtn} ${
          tab === 'developers' ? styles.selected : ''
        }`}
        onClick={() => {
          setTab('developers')
        }}
      >
        Developers (169)
      </button>
      <button
        className={`${styles.tabBtn} ${
          tab === 'artists' ? styles.selected : ''
        }`}
        onClick={() => {
          setTab('artists')
        }}
      >
        Artists (2204)
      </button>
      <button
        className={`${styles.tabBtn} ${
          tab === 'marketing' ? styles.selected : ''
        }`}
        onClick={() => {
          setTab('marketing')
        }}
      >
        Marketing (124)
      </button>
      <button
        className={`${styles.tabBtn} ${
          tab === 'managers' ? styles.selected : ''
        }`}
        onClick={() => {
          setTab('managers')
        }}
      >
        Managers (101)
      </button>
      <button
        className={`${styles.tabBtn} ${
          tab === 'advisors' ? styles.selected : ''
        }`}
        onClick={() => {
          setTab('advisors')
        }}
      >
        Advisors (62)
      </button>
      <button
        className={`${styles.tabBtn} ${
          tab === 'traders' ? styles.selected : ''
        }`}
        onClick={() => {
          setTab('traders')
        }}
      >
        Traders (3337)
      </button>
    </div>
  )
}
