import './Contact.css'

const Contact = () => {
  return (
    <section className='ContactMe' id='ContactMe'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:molly_mchenry@brown.edu`}> {/* TODO: this link doesn't work */}
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>

      <a href={`github link`}>
        <span type='button' className='btn btn--outline'>
          GitHub
        </span>
      </a>

      <a href={`linkedin`}>
        <span type='button' className='btn btn--outline'>
          LinkedIn
        </span>
      </a>
    </section>
  )
}

export default Contact
