import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    
    <div className="stack-wrapper">
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    </div>

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        id='source_icon'
        target="_blank"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        id='source_icon'
        target="_blank"
      >
        <LaunchIcon />
      </a>
    )}

    {project.note && (
      <div>
      <div className="note"><i style={{fontSize: "15px", color: "grey"}}>{project.note}</i></div>
      </div>
    )}
  </div>
)

export default ProjectContainer
