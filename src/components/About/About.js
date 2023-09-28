import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import './About.css'
import personal_image from '../../assets/profile1.jpg'; // with import

const About = () => {
  const resume = "https://drive.google.com/file/d/1SZYg8_fxx-kccdtBf_aJifB3W6AB3Iez/view?usp=sharing";
  const linkedin = "https://www.linkedin.com/in/molly-mchenry-35a56b235/";
  const github = "https://github.com/mmchenr1";

  return (
    <div id="About" className="About">
      {/* <div className='spacer'></div> */}
        <h2 id="About-title" className="section_title">
          About me
        </h2>
      
      <div  className="profile-image-wrapper">
        <img 
              className="profile-image"
              src={personal_image}
              style={{width: 200, height: 200, borderRadius: 400/ 2}} 
        />
        </div>

      <div className='about_text'>I'm a full-stack software developer and a current Junior studying Applied Math and Computer Science at Brown University.
        Currently, I'm working as a Software Engineering TA and research assistant at Brown. My research focuses on backend development for an IoT app called Sherpa. 
        I'm also working with Brown Space Engineering to create flight software for a satellite called PVDX, which has a grant from NASA to launch in 2026.
        <br/>
        <br/>
        In my free time you can find me
         flying single-engine Cessna planes,
         playing copious amounts of card games with my friends, and 
         playing for the club frisbee team at Brown.</div>

      <div className='about_contact_wrapper'>
        {resume && (
          <a href={resume} 
             aria-label='resume'
             target="_blank"
             id="contact_icon"
          >
            <PdfIcon/>
          </a>
        )}

        {github && (
          <>
            {github && (
              <a
                href={github}
                aria-label='github'
                target="_blank"
                id="contact_icon"
              >
                <GitHubIcon />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin}
                aria-label='linkedin'
                target="_blank"
                id="contact_icon"
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
