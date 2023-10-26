import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='Projects' className='Projects'>
      <div id="scroll-spacer" style={{height:'150px'}}></div>
      <h2 className='section_title'>Projects</h2>

      <div id="proj-grid" className='projects_grid'>
        {projects.map((project) => (
          <ProjectContainer className="proj-grid-item" key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
