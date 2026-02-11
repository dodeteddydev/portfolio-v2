export const ButtonConect = ({ ...props }) => {
  return (
    <button
      className="btn-connect"
      onClick={() =>
        window.open("https://www.linkedin.com/in/dode-teddy/", "_blank")
      }
      {...props}
    >
      <span className="btn-text">
        <span>Let’s Connect</span>
        <span>Let’s Connect</span>
      </span>
    </button>
  );
};
