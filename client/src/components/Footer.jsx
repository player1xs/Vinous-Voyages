import { FaInstagram, FaGithub } from "react-icons/fa"

// import { TiSocialFacebookCircular } from "react-icons/ti"
import { TiSocialFacebook } from "react-icons/ti"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer(){
  return (
    <footer>
      <h1 className='footer-h1'>Vinous Voyages</h1>
      <div className="github">
      <FaGithub /> &copy; Made by  
        <a href='https://github.com/player1xs' className="github-link"> Benedict</a>,
        <a href='https://github.com/jamesbraid11' className="github-link"> James </a>, 
        and <a href='' className="github-link"> Nasiim </a>
        {new Date().getFullYear()}
      </div>
      <div className='socials'>
      <a href='https://www.instagram.com' className='footer-icon'><FaInstagram /></a>
      {/* <a href='#' className='social-icons'><TiSocialFacebookCircular /></a> */}
      <a href='https://www.facebook.com' className='footer-icon'><TiSocialFacebook /></a>
      <a href='https://twitter.com' className='footer-icon'><FaXTwitter /></a>
      </div>
    </footer>
  )
}