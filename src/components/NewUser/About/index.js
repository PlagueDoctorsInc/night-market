import styles from './styles.module.css'
import ENS from '../../Market/ENS'

export default function About({ setExpertise, setLink, name, job }) {
  return (
    <div className={styles.container}>
      <label htmlFor='expertise'>What is your expertise as a category?</label>
      <input
        type='text'
        name='expertise'
        onChange={(event) => {
          setExpertise(event.target.value)
        }}
      />
      <label htmlFor='link'>Link your personal website</label>
      <input
        type='text'
        name='link'
        onChange={(event) => {
          setLink(event.target.value)
        }}
      />
      <div className={styles.ensContainer}>
        <div className={styles.preview}>PREVIEW</div>
        <ENS name={name} job={job}/>
      </div>
    </div>
  )
}
