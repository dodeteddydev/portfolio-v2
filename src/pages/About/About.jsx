import CssIcon from "../../assets/icons/css.png";
import GitIcon from "../../assets/icons/git.png";
import HtmlIcon from "../../assets/icons/html.png";
import JavacriptIcon from "../../assets/icons/javascript.png";
import MySqlIcon from "../../assets/icons/mysql.png";
import NodeJsIcon from "../../assets/icons/node-js.png";
import ReactIcon from "../../assets/icons/react.png";
import TypescriptIcon from "../../assets/icons/typescript.png";
import DodeTeddyPic from "../../assets/images/dode-teddy.JPG";
import { SkillContentItem } from "./components/SkillContentItem";

export const About = ({ ref }) => {
  const skillContentItems = [
    {
      href: "https://www.flaticon.com/free-icons/html",
      title: "Html icons created by Freepik - Flaticon",
      alt: "HTML Icon",
      src: HtmlIcon,
      label: "HTML",
    },
    {
      href: "https://www.flaticon.com/free-icons/css",
      title: "Css icons created by Pixel perfect - Flaticon",
      alt: "CSS Icon",
      src: CssIcon,
      label: "CSS",
    },
    {
      href: "https://www.flaticon.com/free-icons/javascript",
      title: "Javascript icons created by edt.im - Flaticon",
      alt: "Javascript Icon",
      src: JavacriptIcon,
      label: "Javascript",
    },
    {
      href: "https://www.flaticon.com/free-icons/typescript",
      title: "Typescript icons created by Freepik - Flaticon",
      alt: "Typescript Icon",
      src: TypescriptIcon,
      label: "Typescript",
    },
    {
      href: "https://www.flaticon.com/free-icons/react",
      title: "React icons created by Freepik - Flaticon",
      alt: "React Icon",
      src: ReactIcon,
      label: "React",
    },
    {
      href: "https://www.flaticon.com/free-icons/node",
      title: "Node icons created by iconizerapp - Flaticon",
      alt: "Node Icon",
      src: NodeJsIcon,
      label: "Node",
    },
    {
      href: "https://www.flaticon.com/free-icons/mysql",
      title: "Mysql icons created by Freepik - Flaticon",
      alt: "Mysql Icon",
      src: MySqlIcon,
      label: "Mysql",
    },
    {
      href: "https://www.flaticon.com/free-icons/git",
      title: "Git icons created by pocike - Flaticon",
      alt: "Git Icon",
      src: GitIcon,
      label: "Git",
    },
  ];

  return (
    <section ref={ref} className="about">
      <div className="about__introduce">
        <div>
          <h1>
            Hi 👋🏼, <br /> I'm Dode Teddy
          </h1>
          <h2>Frontend Developer</h2>
        </div>

        <p>
          I’m a <strong>frontend developer</strong> who’s still learning and
          growing through <strong>hands-on practice</strong>. I enjoy building{" "}
          <strong>small projects</strong>, exploring <strong>new ideas</strong>,
          and improving my skills <strong>step by step</strong>.
        </p>
      </div>

      <div className="about__content">
        <div className="about__content-skills">
          {skillContentItems.map((item, index) => (
            <SkillContentItem
              key={index}
              href={item.href}
              title={item.title}
              alt={item.alt}
              src={item.src}
              label={item.label}
            />
          ))}
        </div>

        <div className="about__content-picture">
          <img
            src={DodeTeddyPic}
            alt="Dode Teddy Picture"
            title="Dode Teddy"
            height="auto"
            width="auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
