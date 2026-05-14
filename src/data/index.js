import cinixImg from '../assets/cinix.png';
import elearn from '../assets/Kayana.png';
import biteyoImg from '../assets/biteyo.png';
import newsAppImg from '../assets/newsapp.jpeg';
import thrManagerImg from '../assets/thrmanager.jpg';
import premovieImg from '../assets/premovie.jpeg';

export const personalInfo = {
  name: "Zulfikar Hasan",
  title: "Front-End Developer Intern Candidate",
  bio: "I am an Information Systems student focused on React.js, Tailwind CSS, React Native, UI development, API integration, and building responsive user experiences. I enjoy turning product ideas into clean interfaces that feel fast, usable, and easy to maintain.",
  email: "zulfikarhasan118@gmail.com",
  socials: {
    github: "https://github.com/zullf",
    linkedin: "https://www.linkedin.com/in/zulfikar-hasan-342bb2396/"
  }
};

export const projects = [
  {
    id: 1,
    title: "Biteyo",
    desc: "Social media and food sharing web app built with React and Tailwind CSS, featuring responsive UI components, feed layouts, user interactions, and frontend integration.",
    tags: ["React.js", "Tailwind CSS", "Responsive UI"],
    image: biteyoImg,
    repoLink: "https://github.com/ltnzz/biteyo-fe",
    featured: true,
    category: "Web App"
  },
  {
    id: 2,
    title: "News App",
    desc: "Mobile news application with API integration, search debounce, article bookmarks, pull-to-refresh, infinite scroll, and offline cached data.",
    tags: ["React Native", "Axios", "AsyncStorage"],
    image: newsAppImg,
    repoLink: "https://github.com/zullf/2410501016_P6_BeritaApp",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "THR Manager App",
    desc: "Finance tracking app for managing THR income, expenses, real-time balance, transaction filters, dark mode, and statistic visualization.",
    tags: ["React Native", "Expo", "AsyncStorage"],
    image: thrManagerImg,
    repoLink: "https://github.com/zullf/thr-minggu4-2410501016",
    category: "Mobile App"
  },
  {
    id: 4,
    title: "PreMovie",
    desc: "Android soundtrack player with background music service, favorite soundtrack support, and zoomable movie posters using PhotoView.",
    tags: ["Java", "Android Studio", "PhotoView"],
    image: premovieImg,
    repoLink: "https://github.com/zullf/PreMovie",
    category: "Android App"
  },
  {
    id: 5,
    title: "Cinix Website",
    desc: "Responsive movie ticket purchasing website with a modern interface, reusable UI sections, and a clean booking experience.",
    tags: ["React.js", "Tailwind CSS", "Express.js"],
    image: cinixImg,
    demoLink: "https://cinix.vercel.app/",
    repoLink: "https://github.com/ltnzz/cinix",
    category: "Web App"
  },
  {
    id: 6,
    title: "E-learning App",
    desc: "UI/UX prototype for an e-learning product, focused on layout hierarchy, learning flows, and clean visual structure.",
    tags: ["Figma", "UI Design", "Prototype"],
    image: elearn,
    demoLink: "https://www.figma.com/design/mb1KLDJWay57V5mLrBFt7Z/Kayana---UAS-IMK?node-id=0-1&p=f&t=fGDyjFRJ0oU8ykdt-0",
    category: "UI Design"
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

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "Responsive Design", "UI Components", "State Management"]
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Android Studio", "AsyncStorage", "Mobile UI"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Figma", "Vite", "Axios", "VS Code"]
  },
  {
    title: "Backend/Database",
    skills: ["Node.js", "Express.js", "REST API", "API Integration"]
  }
];
