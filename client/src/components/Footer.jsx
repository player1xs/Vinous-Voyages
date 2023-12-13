import { FaInstagram } from "react-icons/fa"

// import { TiSocialFacebookCircular } from "react-icons/ti"
import { TiSocialFacebook } from "react-icons/ti"
import { FaSnapchat } from "react-icons/fa6"

import { FaXTwitter } from "react-icons/fa6"

export default function Footer(){
  return (
    <footer>
      <h1 className='second-h1'>Vinous Voyages</h1>
      &copy; Made by James, Benedict and Nasiim {new Date().getFullYear()}
      <div className='socials'>
      <a href='#' className='social-icons'><FaInstagram /></a>
      {/* <a href='#' className='social-icons'><TiSocialFacebookCircular /></a> */}
      <TiSocialFacebook />
      <a href='#' className='social-icons'><FaSnapchat /></a>
      <a href='#' className='social-icons'><FaXTwitter /></a>
      </div>
    </footer>
  )
}