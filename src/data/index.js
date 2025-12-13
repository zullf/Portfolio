import cinixImg from '../assets/cinix.png';
import elearn from '../assets/Kayana.png';
import gaslink from '../assets/gaslink.png';

export const personalInfo = {
  name: "Zulfikar Hasan",
  title: "Front-End Developer & Computer Science Student",
  bio: "I build clean and functional digital solutions with a strong focus on logic and usability. As an Information Systems student, I combine technical skills with system analysis to solve real-world problems. I’m continuously improving my skills beyond the classroom.",
  email: "zulfikarhasan118@gmail.com",
  socials: {
    github: "https://github.com/zullf",
    linkedin: "https://www.linkedin.com/in/zulfikar-hasan-342bb2396/"
  }
};

export const projects = [
  {
    id: 1,
    title: "Cinix Website",
    desc: "A responsive Website to purchasing movie ticket",
    tags: ["React", "Tailwind", "Express.js"],
    image: cinixImg,
    demoLink: "https://cinix.vercel.app/",
    repoLink: "https://github.com/ltnzz/cinix"
  },
  {
    id: 2,
    title: "E-learning App",
    desc: "Collaborative task management tool featuring drag-and-drop boards and team chat.",
    tags: ["Figma"],
    image: elearn,
    demoLink: "https://www.figma.com/design/mb1KLDJWay57V5mLrBFt7Z/Kayana---UAS-IMK?node-id=0-1&p=f&t=fGDyjFRJ0oU8ykdt-0"
  },
  {
    id: 3,
    title: "Gaslink",
    desc: "Gas purchasing application utilizing Barcode generator to buy.",
    tags: ["Figma"],
    image: gaslink,
    demoLink: "https://www.figma.com/design/xt3jwoAkti80yQbTlEbA60/GasLink---Projek-PAPSI?node-id=0-1&p=f&t=z5mXUOfXVi8lh4jo-0"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Data Analytics",
    issuer: "Certiport",
    date: "2024",
    logo: "C"
  },
  {
    id: 2,
    title: "Data Classification and Summarization",
    issuer: "IBM X Hacktiv8",
    date: "2025",
    logo: "I"
  },
  {
    id: 3,
    title: "Python Basic",
    issuer: "Huawei",
    date: "2025",
    logo: "H"
  }
];

export const skills = [
  "Figma", "React.js", "TypeScript", "Tailwind CSS", 
  "Node.js", "Git/GitHub",
];