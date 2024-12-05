import logo from "../assets/logo.png";
import { FaGit, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="-mx-5 w-40" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/saurabh-sushir-648211204/" ><FaLinkedin/></a>
            <a href="https://github.com/saurabhsushir"><FaGithub/></a>
            <a href="https://x.com/saurabh__sushir"><FaSquareXTwitter/></a>
            <a href="https://www.instagram.com/scalpingminds111#"><FaInstagram/></a>
        </div>
    </nav>
  )
}

export default Navbar