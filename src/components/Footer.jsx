import './Footer.css';

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='copyright'>
      <strong>
           Kwame Adonoo Paintsil {' '} 
        </strong>
        | Copyright<sup>&copy;</sup> 2025
      </div>
       <div className='socials'>
        <a href="https://github.com/kapaintsil" target='blank'>
        <i className="bi bi-github"></i>
        </a>
        <a href="https://x.com/KwameAdonoo" target='blank'>
        <i className="bi bi-twitter-x"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer;