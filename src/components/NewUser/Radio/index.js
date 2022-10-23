import styles from './styles.module.css'

export default function Radio({ handleChange }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.category}>Which category best describes you?</h4>
      <input
        type='radio'
        className={styles.radio}
        value='developer'
        id='developer'
        name='category'
        onChange={handleChange}
      />
      <label htmlFor='developer'>Developer</label>
      <input
        type='radio'
        className={styles.radio}
        value='artist'
        id='artist'
        name='category'
        onChange={handleChange}
      />
      <label htmlFor='artist'>Artist</label>
      <input
        type='radio'
        className={styles.radio}
        value='marketing'
        id='marketing'
        name='category'
        onChange={handleChange}
      />
      <label htmlFor='marketing'>Marketing</label>
      <input
        type='radio'
        className={styles.radio}
        value='manager'
        id='manager'
        name='category'
        onChange={handleChange}
      />
      <label htmlFor='manager'>Manager</label>
      <input
        type='radio'
        className={styles.radio}
        value='advisor'
        id='advisor'
        name='category'
        onChange={handleChange}
      />
      <label htmlFor='advisor'>Advisor</label>
      <input
        type='radio'
        className={styles.radio}
        value='trader'
        id='trader'
        name='category'
        onChange={handleChange}
      />
      <label htmlFor='trader'>Trader</label>
    </div>
  )
}
