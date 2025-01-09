export interface Category {
  title: string;
  groups: Group[];
  skills: Skill[];
}

export interface Group {
  name: string;
  type: "icon" | "image" | "string";
}

interface Skill {
  id: string;
  name: string;
  details: string;
  icon?: string;
  group?: string;
}

export const categories: Category[] = [
  {
    title: "Frontend",
    groups: [
      { name: "Languages", type: "string" },
      { name: "OS", type: "icon" },
      { name: "Others", type: "string" },
    ],
    skills: [
      {
        name: "Web - Mobile - Destop development",
        details: "a",
        id: "123",
      },
      { name: "Angular", details: "a", id: "123", group: "Languages" },
      { name: "Javascript", details: "b", id: "123", group: "Languages" },
      { name: "Flutter", details: "c", id: "123", group: "Languages" },
      { name: "HTML", details: "d", id: "123", group: "Languages" },
      { name: "Tailwind (CSS)", details: "e", id: "123", group: "Languages" },
      { name: "Wordpress", details: "f", id: "123", group: "Others" },
      {
        name: "iOS - macOS",
        details: "c",
        icon: "https://www.svgrepo.com/show/69341/apple-logo.svg",
        id: "123",
        group: "OS",
      },
      {
        name: "Android",
        details: "d",
        icon: "https://www.svgrepo.com/show/475631/android-color.svg",
        id: "123",
        group: "OS",
      },
      {
        name: "Linux",
        details: "e",
        icon: "https://www.svgrepo.com/show/448236/linux.svg",
        id: "123",
        group: "OS",
      },
      {
        name: "Web",
        details: "f",
        icon: "https://www.svgrepo.com/show/451442/web.svg",
        id: "123",
        group: "OS",
      },
    ],
  },
  {
    title: "Backend",
    groups: [{ name: "Platforms", type: "icon" }],
    skills: [
      { name: "NodeJS", details: "a", id: "123" },
      { name: "NOSQL", details: "b", id: "123" },
      { name: "MangoDB", details: "c", id: "123" },
      { name: "NOSQL", details: "d", id: "123" },
      { name: "Git/Github", details: "e", id: "123" },
      {
        name: "Azure",
        details: "c",
        icon: "https://www.svgrepo.com/show/448274/azure.svg",
        id: "123",
        group: "Platforms",
      },
      {
        name: "Vercel",
        details: "d",
        icon: "https://www.svgrepo.com/show/361653/vercel-logo.svg",
        id: "123",
        group: "Platforms",
      },
      {
        name: "Docker",
        details: "e",
        icon: "https://www.svgrepo.com/show/448221/docker.svg",
        id: "123",
        group: "Platforms",
      },
      {
        name: "GCP",
        details: "f",
        icon: "https://www.svgrepo.com/show/353805/google-cloud.svg",
        id: "123",
        group: "Platforms",
      },
    ],
  },
  {
    title: "Embedded",
    groups: [{ name: "Devices", type: "icon" }],
    skills: [
      { name: "C/C++", details: "a", id: "123" },
      { name: "Python", details: "b", id: "123" },
      { name: "Flutter", details: "c", id: "123" },
      { name: "TFLite", details: "d", id: "123" },
      { name: "MQTT", details: "e", id: "123" },
      { name: "Assembly", details: "f", id: "123" },
      { name: "RTOS", details: "g", id: "123" },
      {
        name: "Raspberry Pi",
        details: "c",
        icon: "https://www.svgrepo.com/show/303239/raspberry-pi-logo.svg",
        id: "123",
        group: "Devices",
      },
      {
        name: "Arduino",
        details: "d",
        icon: "https://www.svgrepo.com/show/373441/arduino.svg",
        id: "123",
        group: "Devices",
      },
      {
        name: "STM-32",
        details: "e",
        icon: "https://www.svgrepo.com/show/296701/robot.svg",
        id: "123",
        group: "Devices",
      },
      {
        name: "E-Puck",
        details: "f",
        icon: "https://www.svgrepo.com/show/278922/chip-microchip.svg",
        id: "123",
        group: "Devices",
      },
    ],
  },
  {
    title: "Data Proc.",
    groups: [],
    skills: [
      { name: "Python", details: "a", id: "123" },
      { name: "TensorFlow", details: "b", id: "123" },
      { name: "Edge/Cloud Comput.", details: "c", id: "123" },
      { name: "Machine Learning", details: "d", id: "123" },
      { name: "MATLAB", details: "e", id: "123" },
      { name: "VBA", details: "f", id: "123" },
      { name: "Elistat", details: "f", id: "123" },
    ],
  },
  {
    title: "Engineering",
    groups: [],
    skills: [
      { name: "IoT", details: "a", id: "123" },
      { name: "Robotics & control", details: "b", id: "123" },
      { name: "CAD (Creo)", details: "c", id: "123" },
      { name: "FEA (Ansys)", details: "d", id: "123" },
      { name: "Design Opti. (OptiSLang)", details: "e", id: "123" },
      { name: "Manufacturing", details: "f", id: "123" },
    ],
  },
];
