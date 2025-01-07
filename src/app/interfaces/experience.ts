export interface Experience {
  title: string;
  date?: string;
  location?: string;
  institution?: string;
  tasks: string[];
  skillNames?: string[];
}

export interface Project {
  title: string;
  date?: string;
  location?: string;
  institution?: string;
  sections: Section[];
  skillNames?: string[];
}

interface Section {
  content: string;
  title?: string;
  img?: string;
}

export const experiences: Experience[] = [
  {
    title: "Software engineer",
    date: "Nov. 2022 - May 2023",
    location: "Geneva",
    institution: "Rolex",
    tasks: [
      "Python programming for the automation of the calibration process in simulations, resulting in time savings for new materials integration.",
      "Analysis of a mechanical issue in the watch assembly process, resulting in the adoption of new production standards.",
      "Characterization and integration of a new type of gold with unusual mechanical properties.",
    ],
    skillNames: ["Python", "VBA", "Ansys"],
  },
  {
    title: "Software engineer",
    date: "Nov. 2022 - May 2023",
    location: "Geneva",
    institution: "Rolex",
    tasks: [
      "Python programming for the automation of the calibration process in simulations, resulting in time savings for new materials integration.",
      "Analysis of a mechanical issue in the watch assembly process, resulting in the adoption of new production standards.",
      "Characterization and integration of a new type of gold with unusual mechanical properties.",
    ],
    skillNames: ["Python", "VBA", "Ansys"],
  },
];

export const projects: Project[] = [
  {
    title: "Edge Application",
    date: "Sep. 2023 - June 2024",
    location: "Sydney",
    institution: "University of Sydney",
    sections: [
      {
        content:
          "Development and deployment of an IoT application on different OS (iOS, Android, MacOS, Windows, Linux) using Flutter SDK, Python and C++. The app can be installed on smartphones, computers and embedded systems (e.g. Raspberry Pi) to monitor sensors, process data and communicate them to the Cloud. Different use cases are conducted to test the performance of the app.",
      },
    ],
    skillNames: ["Python", "TensorFlow", "Flutter", "C++"],
  },
];
