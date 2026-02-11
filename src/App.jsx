import { useRef } from "react";
import { Footer } from "./pages/Footer/Footer";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About/About";
import { Experience } from "./pages/Experience/Experience";
// import { Project } from "./pages/Project/Project";

function App() {
  const smoothRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);

  const scrollToSection = (ref) => {
    if (!ref.current) return;
    smoothRef.current.scrollTo(ref.current.offsetTop);
  };

  return (
    <MainLayout
      smoothRef={smoothRef}
      onScrollToAbout={() => scrollToSection(aboutRef)}
      onScrollToExperience={() => scrollToSection(experienceRef)}
      onScrollToProject={() => scrollToSection(projectRef)}
    >
      <About ref={aboutRef} />

      <Experience ref={experienceRef} />

      {/* <Project ref={projectRef} /> */}

      <Footer
        onScrollToExperience={() => scrollToSection(experienceRef)}
        onScrollToProject={() => scrollToSection(projectRef)}
      />
    </MainLayout>
  );
}

export default App;
