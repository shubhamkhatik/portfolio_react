import { FaTwitter, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Bio } from "../data/Bio";
const title = `text-center text-amber-500 lg:text-4xl text-3xl font-bold`;
const titleDesc = `text-center text-zinc-300 text-lg mt-3 mb-6`;
const footerContainer =
  "bg-gradient-to-b from-slate-900 to-slate-950 text-gray-100 py-16 px-4 min-h-screen";
const footerWrapper = `max-w-3xl mx-auto`;
const card = `ui-glass-card p-8 rounded-2xl flex flex-col items-center gap-6`;
const logo = `text-2xl font-semibold text-amber-400`;
const email = `text-lg font-medium text-zinc-200`;
const socialMediaWrapper = `flex justify-center items-center gap-4`;
const socialMediaIcon = `hover:text-cyan-300 text-2xl transition-colors`;
const ctaWrapper = `flex flex-wrap gap-4 justify-center`;
const ctaPrimary = `ui-primary-btn px-5 py-2 inline-flex items-center gap-2`;
const ctaGhost = `ui-ghost-btn px-5 py-2`;

function Contact() {
  return (
    <footer name="contact" className={footerContainer}>
      <div className={footerWrapper}>
        <div className={title}>Contact Me</div>
        <div className={titleDesc}>
          Feel free to reach out for collaborations or opportunities
        </div>
        <div className={card}>
          <div className={logo}>{Bio.name}</div>
          <div className={email}>Email: {Bio.email}</div>
          <div className={socialMediaWrapper}>
            <a
              className={socialMediaIcon}
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className={socialMediaIcon}
              href={Bio.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className={socialMediaIcon}
              href={Bio.x}
              target="_blank"
              rel="noreferrer"
              title="X"
            >
              <FaTwitter />
            </a>
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${Bio.email}`}
              target="_blank"
              rel="noreferrer"
              className={socialMediaIcon}
              title="Email"
            >
              <FaMailBulk />
            </a>
          </div>
          <div className={ctaWrapper}>
            <a
              href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${Bio.email}`}
              className={ctaPrimary}
            >
              Email me
            </a>
            {Bio.resumeview && (
              <a
                href={Bio.resumeview}
                target="_blank"
                rel="noreferrer"
                className={ctaGhost}
              >
                View Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
