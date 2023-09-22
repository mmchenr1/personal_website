import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const resume = "https://drive.google.com/file/d/1SZYg8_fxx-kccdtBf_aJifB3W6AB3Iez/view?usp=sharing";
  const linkedin = "https://www.linkedin.com/in/molly-mchenry-35a56b235/";
  const github = "https://github.com/mmchenr1";

  return (
    <div id="About" className="About">
        <div className="About-me-header">
          About me
        </div>

      <image 
            className="profile-image"
            source={require('../../assets/slay_racoon.webp')}  
            style={{width: 200, height: 200, borderRadius: 400/ 2}} 
      />

      <div className='about__role'>I'm a full-stack software developer and a current Junior at Brown University.</div>
      <div className='about__desc'>TODO-insert description</div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {github && (
          <>
            {github && (
              <a
                href={github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
