import { useEffect, useState } from "react";

const IntroOverlay = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro ${hide ? "intro--hide" : ""}`}>
      <h2>TED</h2>
    </div>
  );
};

export default IntroOverlay;
