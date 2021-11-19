// import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="social-footer select-none transition4">
        {/* <ul>
          <li>
            <a
              href="https://github.com/JRPerezJr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={40}
                height={40}
                className="brand-icons"
                src="/static/github.svg"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/devjperez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={40}
                height={40}
                className="brand-icons"
                src="/static/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={40}
                height={40}
                className="brand-icons"
                src="/static/youtube-svg-repo.svg"
                alt="youtube"
              />
            </a>
          </li>
        </ul> */}
        <p className="copyright">Crafted on Next.js</p>
        <p className="copyright">Copyright © 2021 Juan Perez Jr.</p>
      </div>
    </footer>
  );
};

export default Footer;
