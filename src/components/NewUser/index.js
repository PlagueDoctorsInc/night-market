import styles from './styles.css.modules'

export default function NewUser() {
  return (
    <div>
      <div className={styles.container}>
        <h4 className={styles.category}>Which category best describes you?</h4>
        <input
          type='radio'
          className={styles.radio}
          value='developer'
          id='developer'
        />
        <label htmlFor='developer'>Developer</label>
        <input
          type='radio'
          className={styles.radio}
          value='artist'
          id='artist'
        />
        <label htmlFor='artist'>Artist</label>
        <input
          type='radio'
          className={styles.radio}
          value='marketing'
          id='marketing'
        />
        <label htmlFor='marketing'>Marketing</label>
        <input
          type='radio'
          className={styles.radio}
          value='manager'
          id='manager'
        />
        <label htmlFor='manager'>Manager</label>
        <input
          type='radio'
          className={styles.radio}
          value='advisor'
          id='advisor'
        />
        <label htmlFor='advisor'>Advisor</label>
        <input
          type='radio'
          className={styles.radio}
          value='trader'
          id='trader'
        />
        <label htmlFor='trader'>Trader</label>
      </div>
    </div>
  )
}
