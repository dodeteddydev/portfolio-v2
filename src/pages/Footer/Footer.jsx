export const Footer = ({
  onScrollToExperience = () => {},
  // onScrollToProject = () => {},
}) => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer__top">
          <ul className="footer__nav-navigation">
            <li onClick={() => window.open("/", "_self")}>About</li>
            <li onClick={onScrollToExperience}>Experience</li>
            {/* <li onClick={onScrollToProject}>Project</li> */}
          </ul>

          <ul className="footer__nav-navigation footer__nav-navigation-left">
            <li
              onClick={() =>
                window.open("https://www.linkedin.com/in/dode-teddy/", "_blank")
              }
            >
              LinkedIn
            </li>
            <li
              onClick={() =>
                window.open("https://www.tiktok.com/@dodeteddydev/", "_blank")
              }
            >
              Tiktok
            </li>
            <li
              onClick={() =>
                window.open("https://www.instagram.com/dodeteddy/", "_blank")
              }
            >
              Instagram
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h2>
            <span>If you’re thinking about going digital.</span> <br />
            I’d love to help.
          </h2>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-copyright">
            <a href="/">TED</a>
            <p>{new Date().getFullYear()}&copy;All rights reserved.</p>
          </div>

          <div className="footer__bottom-email">
            <p>Email</p>
            <h2>dodeteddydev@gmail.com</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};
