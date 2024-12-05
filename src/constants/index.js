import project1 from "../assets/projects/netflix1.png";
import project2 from "../assets/projects/giphy1.png";
import project3 from "../assets/projects/insighthub1.png";
import project4 from "../assets/projects/todo1.png";

export const HERO_CONTENT = `I am a Frontend Developer with 1.5 years of experience working with ReactJS, JavaScript, and modern UI frameworks. I have hands-on experience incorporating generative AI into frontend applications, enhancing functionality and user engagement. With a focus on clean, efficient code and a collaborative approach, I enjoy contributing to innovative web solutions and delivering meaningful user experiences.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented frontend developer with 1.5 years of professional experience in building responsive and visually appealing web applications. My expertise lies in crafting user-centric interfaces using modern technologies like React and JavaScript.  

In addition to frontend development, I have experience working with Generative AI, recognizing its transformative potential in today's rapidly evolving digital landscape.  

My journey in web development started with a strong curiosity about design and functionality, and it has grown into a rewarding career where I constantly embrace new challenges and learning opportunities. I enjoy collaborating with teams to solve complex problems and deliver high-quality, scalable solutions.  

When I'm not coding, I like exploring the latest tech trends, enhancing my skillset, and contributing to personal projects that blend creativity and functionality.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - Present",
    role: "Intern Frontend Developer",
    company: "BrilliantRev",
    description: `Currently contributing to the development of dynamic web applications at BrilliantRev, utilizing HTML, CSS, JavaScript, and React.js. Collaborating with senior developers to optimize UI components and enhance user experiences. Gaining hands-on experience in responsive design, performance optimization, and best practices for frontend development.`,
    technologies: ["Javascript", "React.js", "TailwindCSS", "MaterialUI","HTML"],
  },
  {
    year: "July 2023 - June 2024",
    role: "Co-Founder - (B2C Startup)",
    description: `Launched and managed a B2C e-commerce store, overseeing product sourcing, digital marketing, and customer service. Designed a user-friendly platform to enhance shopping experiences and achieved measurable growth in sales and customer base. Developed expertise in business operations, market analysis, and e-commerce tools.`,
    technologies: ["HTML", "CSS", "REACT", "EXCEL", "FIGMA","FIGJAM"],
  },
  {
    year: "July 2023 - June 2024",
    role: "Freelancer(Web Designer)",
    description: `Designed intuitive and visually engaging web and mobile interfaces for various clients, specializing in UI/UX for digital platforms. Contributed to the design of the “Devavrat” app, a mutual fund distributor, focusing on user-friendly flows and responsive design. Delivered high-quality, accessible designs while collaborating closely with developers for seamless implementation.`,
    technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT","FIGMA"],
  },
  {
    year: "Aug 2022 - June 2023",
    role: "Associate (UI/UX Designer)",
    company: "PWC Bangalore",
    description: `Collaborated with cross-functional teams to design intuitive interfaces for enterprise applications, enhancing user satisfaction and efficiency. Conducted user research, usability testing, and created wireframes and prototypes using Figma and Adobe XD. Delivered solutions aligned with client goals while honing skills in UX methodologies and agile workflows.`,
    technologies: ["HTML", "CSS", "FIGJAM", "FIGMA"],
  },
  {
    year: "Mar 2022 - Aug 2022",
    role: "Intern (UI/UX Designer)",
    company: "PWC Bangalore",
    description: `As an Intern at PWC, I Collaborated with cross-functional teams to design user-friendly enterprise solutions by conducting user research, creating wireframes, and developing interactive prototypes. Improved user experience for internal tools and dashboards, aligning designs with client goals and business objectives. Gained expertise in UX methodologies, agile workflows, and data-driven decision-making.`,
    technologies: ["Miro", "Figma", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Netflix-GPT",
    image: project1,
    link: "https://movies-gpt.netlify.app/",
    description:
      "The project utilizes a tech stack featuring React.js, Tailwind CSS, and Redux to develop a Netflix clone app. Additionally, a movie suggestion bot is implemented using the OpenAI API, providing personalized movie recommendations based on user input. The chosen technologies facilitate a responsive and visually appealing user interface, efficient state management, and seamless integration of external APIs.",
    technologies: ["HTML", "CSS", "Reactjs", "Redux", "Firebase","OpenAI"],
  },
  {
    title: "GIPHY",
    image: project2,
    link:"https://giphy-three-xi.vercel.app/",
    description:
      "A sleek and responsive GIF search engine built with ReactJS, Tailwind CSS, and React Context API for efficient state management. GIPHY enables users to explore, search, and share animated GIFs seamlessly. Designed for a smooth user experience, it's perfect for social media and messaging enthusiasts.",
    technologies: ["HTML", "CSS", "ReactJS","Context-API" ],
  },
  {
    title: "InsightHub - Personalized News Digest Platform",
    image: project3,
    link:"https://insighthub-three.vercel.app/",
    description:
      "A real-time, personalized news platform with AI-powered article summaries. Built using React, Tailwind CSS, Currents API, and Google Gemini API, with secure Google login via Firebase Auth.",
    technologies: ["ReactJS", "Tailwind CSS", "Gemini AI", "Firebase"],
  },
  {
    title: "TODO Application",
    image: project4,
    link:"https://mytodo-three-pi.vercel.app/",
    description:
      "A task management app built with React, Redux for efficient state management, and Tailwind CSS for a sleek, responsive design. Organize and prioritize tasks effortlessly.",
    technologies: ["HTML", "Tailwind CSS", "ReactJS", "Redux",],
  },
];

export const CONTACT = {
  address: "Nagpur , Maharashtra - INDIA ",
  phoneNo: "+91 8788319415",
  email: "saurabh.s.sushir@gmail.com",
};
