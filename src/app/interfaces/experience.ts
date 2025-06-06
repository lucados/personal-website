export interface Work {
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

export const works: Work[] = [
  {
    title: "Full-stack developer",
    date: "Dec. 2024 - Current",
    location: "Lausanne",
    institution: "Lab4Teachers.com",
    tasks: [
      "Development of a dynamic Web Application for generating, editing and managing educational content, including courses, structured-exams, Latex-style equations and graphics.",
      "Implementation of different tools including an AI-agent (OpenAI API) using Angular and Node.js while deploying the application on Vercel with a MangoDB database.",
    ],
    skillNames: [
      "Angular",
      "JavaScript",
      "Tailwind",
      "NodeJs",
      "MangoDB",
      "Vercel",
      "Azure",
    ],
  },
  {
    title: "Full-stack developer",
    date: "Aug. 2024 - Dec. 2024",
    location: "Lausanne",
    institution: "Homestays.ch",
    tasks: [
      "Development of a Web platform Application in the housing market for foreign students.",
      "Responsible of the Frontend and Backend using Angular, NodeJS and MangoDB combined with different Azure services and various commercial APIs for automation (Stripe, GCP,...).",
    ],
    skillNames: [
      "Angular",
      "JavaScript",
      "Tailwind",
      "NodeJs",
      "MangoDB",
      "Vercel",
      "Azure",
    ],
  },
  {
    title: "R&D Soft. & Mech. engineer (Internship)",
    date: "Nov. 2022 - May 2023",
    location: "Geneva",
    institution: "Rolex",
    tasks: [
      "Python programming for the automation of the calibration process in simulations, resulting in time savings for new materials integration.",
      "Analysis of a mechanical issue in the watch assembly process, resulting in the adoption of new production standards.",
      "Characterization and integration of a new type of gold with unusual mechanical properties.",
    ],
    skillNames: ["Python", "VBA", "Ansys", "Creo", "OptiSLang", "Elistat"],
  },
];

export const projects: Project[] = [
  {
    title: "Edge Application",
    date: "Sep. 2023 - March 2024",
    location: "Sydney",
    institution: "University of Sydney",
    sections: [
      {
        content:
          "Development and deployment of an IoT application on different OS (iOS, Android, MacOS, Windows, Linux) using Flutter SDK, Python and C++. The app can be installed on smartphones, computers and embedded systems (e.g. Raspberry Pi) to monitor sensors, process data and communicate them to the Cloud. Different use cases are conducted to test the performance of the app.",
        img: "edge_app_intro.png",
      },
      // {
      //   title: "Results",
      //   content: "There were good results !",
      // },
    ],
    skillNames: ["Python", "Flutter", "C++", "MQTT", "Docker", "GCP", "Data monitoring", "Edge/Cloud Comput.", "IoT"],
  },
  {
    title: "Dynamic PV's solar power forecasting",
    date: "March 2024 - May 2024",
    location: "Sydney",
    institution: "University of Sydney",
    sections: [
      {
        content: "I used the application to implement a custom machine learning model as an edge process. This to enable dynamic prediction of future power values of the University of Sydney's solar panels. This implementation offers improved control over energy management and distribution across the university, optimizing resource utilization and promoting sustainability.",
        img: "Dynamic_processing.png"
      }
    ],
    skillNames: ["Python", "TensorFlow", "TFLite", "Machine Learning", "GCP", "Edge/Cloud Comput.", "IoT"],
  },
  {
    title: "Train comfort analysis",
    date: "May 2024 - June 2024",
    location: "Zurich",
    institution: "ETHZ",
    sections: [
      {
        content: "I used the application to monitor accelerations and GPS positions during train rides using an iPhone. Utilizing edge processing, I processed the data directly at the edge to map locations where the acceleration exceeded a certain threshold, indicative of discomfort for passengers. This analysis provided valuable insights for optimizing train routes and enhancing passenger comfort.",
        img: "edge_processing.png"
      }
    ],
    skillNames: ["Python", "GCP", "Edge/Cloud Comput.", "IoT"],
  },
  {
    title: "CLAID Application",
    date: "Sept 2022 - Jan 2023",
    location: "Zurich",
    institution: "ETHZ",
    sections: [
      {
        content: "I contributed to the development of CLAIDapp, a server-less application in the health industry. My role involved integrating front-end elements using Flutter and back-end elements in C and C++. This collaborative effort resulted in a robust and efficient application tailored to the specific needs of the healthcare sector.",
        img: "CLAIDapp.png"
      }
    ],
    skillNames: ["C++", "C", "Flutter", "Data monitoring"],
  }
];
