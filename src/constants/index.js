import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Nextjs,
  logrocket,
  community,
  freelance,
  internship,
  chatwithpdf,
  jobsculpt,
  videomeet,
  soda,
  suburbia,
  gaming,
  iphone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT ME",
  },
  {
    id: "work",
    title: "MY EXPERIENCE",
  },
  {
    id: "projects", // New entry for projects
    title: "MY WORK", // Title for the new section
  },
  {
    id: "contact",
    title: "CONTACT ME",
  },
];

const services = [
  {
    title: "SOFTWARE DEVELOPMENT",
    icon: web,
  },
  {
    title:"WEB DEVELOPMENT",
    icon: backend,
  },
  {
    title: "DATA STRUCTURES & ALGORITHMS",
    icon: creator,
  },
  {
    title: "DATA SCIENCE",
    icon: mobile,
  }
];


const technologies = [
  {
    name: "C",
    icon: html,
  },{
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  ,{
    name: "JAVA",
    icon: redux,
  },{
    name: "OOPS",
    icon: tailwind,
  },{
    name: "HTML 5",
    icon:  reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: mongodb,
  },
  {
    name: "Computer Networks",
    icon: Nextjs,
  },
  {
    name: "Operating Systems",
    icon: docker,
  }, 
   {
    name: "git",
    icon: git,
  },
];

const experiences = [
  
  {
    title: "Front End Development Content Advisor",
    company_name: "LogRocket",
    icon: logrocket,
    iconBg: "#383E56",
    date: "Aug 2025 – Present",
    points: [
      "Led front-end development discussions and provided insights on best practices, performance optimizations, scalability.",
      "Collaborated with designers, product managers, backend engineers to enhance maintainability and user experience.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FreeLance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jun 2024 – Jul 2025",
    points: [
      "Built full stack web applications for clients implementing modern frontend development practices",
      "Developed responsive 3D projects and developed Single Page Applications (SPAs) for clients using React.js and Next.js.",
      "Developed high-performance apps with SEO Optimization,worked with ui/ux designers and Performed code reviews",
    ],
  },
 
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "CHAT WITH PDF - AI",
    description: "Built real-time chat application about PDFs with AI to generate real time answers ",
    tags: [
      { name: "AWS S3", color: "text-green-500" },
      { name: "Open AI", color: "text-red-500" },
      { name: "PineconeDB", color: "text-blue-500" },
      { name: "TypeScript", color: "text-green-500" },
      { name: "ClerkAuth", color: "text-blue-500" },
      { name: "TailwindCSS", color: "text-green-500" },
      { name: "Vercel", color: "text-green-500" },
    ],
    video: chatwithpdf,
    project_link: "https://chatwithpdf-manojsalugari.vercel.app/",
  },
  {
    name: "3D SODA",
    description: " Built immersive and interactive 3D soda app using Next.js, TailwindCSS.",
    tags: [
      { name: "Next.js", color: "text-yellow-500" },
      { name: "TailwindCSS", color: "text-red-500" },
      { name: "TypeScript", color: "text-yellow-500" },
    ],
    video: soda,
    project_link: "https://soda-ga1h.vercel.app/",
  },
  {
    name: "JOBSCULPT-AI",
    description: "Built Scalable full-stack AI SaaS to Generate Resumes and Cover-letters with AI and built AI interviewer with GeminiAI",
    tags: [
      { name: "GeminiAI", color: "text-blue-500" },
      { name: "Next.js", color: "text-green-500" },
      { name: "PostgreSQL", color: "text-blue-500" },
      { name: "NeonDB", color: "text-green-500" },

    ],
    video: jobsculpt,
    project_link: "https://jobsculpt-ai-manojsalugari.vercel.app/",
  },
  {
    name: "Iphone Clone",
    description: "  Built a responsive 3D iphone Single Page Application (SPA) using  Next.js",
    tags: [
      { name: "React.js", color: "text-yellow-500" },
      { name: "Three.js", color: "text-red-500" },
      { name: "TailwindCSS", color: "text-red-500" },
    ],
    video:iphone,
    project_link: "https://iphone3d-manoj.vercel.app/",
  },
  {
    name: "3D skateboards",
    description: "  Built a responsive 3D Skateboards Single Page Application (SPA) using  Next.js",
    tags: [
      { name: "React.js", color: "text-yellow-500" },
      { name: "Three.js", color: "text-red-500" },
      { name: "TailwindCSS", color: "text-red-500" },
    ],
    video:suburbia,
    project_link: "https://skateboards3d-manojsalugari.vercel.app/",
  },
  {
    name: "ConnectNow",
    description: "Built real-time video conferencing platform with live streaming features, text chat and video chat, file sharing and screen sharing",
    tags: [
      { name: "React.js", color: "text-yellow-500" },
      { name: "Clerk", color: "text-red-500" },
      { name: "TailwindCSS", color: "text-red-500" },
    ],
    video:videomeet,
    project_link: "https://connect-now-black.vercel.app/sign-in",
  },
 
];


export { services, technologies, experiences, testimonials, projects };
