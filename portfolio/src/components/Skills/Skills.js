import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='Skills' id='Skills'>
      <h2 className='section_title'>Skills</h2>
      <ul className='skills_list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills_list-item'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
