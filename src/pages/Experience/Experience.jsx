import { ExperienceItem } from "./components/ExperienceItem";

export const Experience = ({ ref }) => {
  const experienceItems = [
    {
      position: "Junior Frontend Web Developer",
      company: "PT. Internet Madju Abad Milenindo (GlobalXtreme)",
      date: "Jun 2025 - Present",
      description: [
        "Developing and maintaining features within the Business Service module of an existing micro-frontend system.",
        "Implemented a centralized notification feature to configure notifications across multiple services.",
        "Maintaining and enhancing existing features to support ongoing product updates.",
        "Maintained and updated the company profile website.",
        "Collaborating with team members to ensure smooth integration with other services.",
      ],
    },
    {
      position: "Frontend Web Developer",
      company: "PT. Sadhana Teknologi Integrasi",
      date: "Nov 2023 - Jun 2025",
      description: [
        "Developed the SIMRS inpatient and emergency department web application for Negara General Hospital as part of a collaborative team.",
        "Built reusable components and utilities to improve code maintainability and development efficiency.",
        "Worked closely with teammates to ensure reliable performance and smooth feature delivery.",
      ],
    },
    {
      position: "Frontend Web Developer",
      company: "PT. Bhawana Piranti Semesta",
      date: "Jun 2023 - Nov 2023",
      description: [
        "Developed the SIMRS outpatient web application for Negara General Hospital in collaboration with the frontend team.",
        "Ensured responsive design and usability across tablet and desktop devices.",
        "Created reusable components and utilities to improve maintainability and consistency.",
      ],
    },
    {
      position: "Mobile Developer Internship",
      company: "PT. Bhawana Piranti Semesta",
      date: "Jun 2022 - Jun 2023",
      description: [
        "Developed ERP mobile applications for PT. Dwi Karya Cakrawala Bintan with responsive design for various Android devices.",
        "Created reusable Flutter widgets to increase development efficiency and maintainability.",
        "Assisted in maintaining ERP mobile applications for PT. Adi Jaya Beton.",
        "Collaborated with the team to prepare and deploy applications to the Google Play Store.",
      ],
    },
  ];

  return (
    <section ref={ref} className="experience">
      <h2>Experience</h2>

      <div className="experience__content-item">
        {experienceItems.map((item, index) => (
          <ExperienceItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
