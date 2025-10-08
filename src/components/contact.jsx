import { FaTwitter, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Bio } from "../data/Bio";
const title = `text-center text-amber-600 lg:text-4xl text-3xl font-bold`;
const titleDesc = `text-center text-xl`;
const footerContainer = "bg-gray-950 text-cyan-600";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const logo = `mt-2 md:mt-4 text-xl font-semibold text-amber-600 `;
const email = `text-xl font-semibold text-amber-500 `;
const socialMediaWrapper = `flex justify-center items-center gap-1`;
const socialMediaIcon = `ml-4 md:mx-5 hover:text-cyan-400 text-2xl`;
const copyright = ` mb-5 text-light text-amber-500 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

function Contact() {
  return (
    <footer name="contact" className={footerContainer}>
      <div className={title}>Contact Me</div>
      <div className={titleDesc}>
        Feel free to reach out to me for any queries
      </div>
      <div className={footerWrapper}>
        <div className={logo}> {Bio.name}</div>
        <div className={email}> Email : {Bio.email}</div>
        <div className={socialMediaWrapper}>
          <a className={socialMediaIcon} href={Bio.github} target="_blank">
            <FaGithub />
          </a>
          <a className={socialMediaIcon} href={Bio.linkedin} target="_blank">
            <FaLinkedin />
          </a>
          <a className={socialMediaIcon} href={Bio.x} target="_blank">
            <FaTwitter />
          </a>
          <a href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${Bio.email}`} target="_blank" className={socialMediaIcon}>
            <FaMailBulk />
          </a>
        </div>
        <div className={copyright}></div>
      </div>
    </footer>
  );
}

export default Contact;
