export const SkillContentItem = ({ ...props }) => {
  return (
    <a
      className="skill-content-item"
      href={props.href}
      title={props.title}
      target="_blank"
    >
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        height="auto"
        width="auto"
        loading="lazy"
      />

      <h3>{props.label}</h3>
    </a>
  );
};
