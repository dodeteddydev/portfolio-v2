export const ExperienceItem = ({ ...props }) => {
  return (
    <div className="experience-item">
      <div className="experience-item-title">
        <div>
          <h3>{props.position}</h3>
          <p>{props.company}</p>
        </div>

        <p>{props.date}</p>
      </div>

      <div className="experience-item-description">
        {props.description.length > 1 ? (
          <ul>
            {props.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{props.description[0]}</p>
        )}
      </div>
    </div>
  );
};
