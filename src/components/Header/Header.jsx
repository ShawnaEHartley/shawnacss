import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='left-border'>
        <p>
          <div className='title'>shawna.css</div> a CSS drawing project by <a href='https://www.shawna.dev'>Shawna Hartley</a>
        </p>
      </div>
      <div className='right-border'>
        <a href='https://github.com/ShawnaEHartley'>Github</a> <a href='https://www.linkedin.com/in/shawna-e-hartley/'>LinkedIn</a>
      </div>
    </div>
  )
}

export default Header;