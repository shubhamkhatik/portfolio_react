import fullstackauth from "../assets/fullstackauth.png";
import foodvilla from "../assets/foodvilla.png";
import netflix from "../assets/netflix.png";
import youtube from "../assets/youtube.png";
import taskify from "../assets/taskify.png";
import employee from "../assets/employee.png";

export const projects = [
  {
    id: 3,
    img: youtube,
    skills: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "youtube api",
    ],
    title: "namaste youtube",
    desc: "youtube like app which uses youtube api,feature like search, recommendation, comments and related videos",
    live: "https://namaste-youtube-three.vercel.app/",
    github: "https://github.com/shubhamkhatik/namaste-youtube",
  },
  {
    id: 0,
    img: fullstackauth,
    skills: [
      "Next JS",
      "Tailwind",
      "mailtrap",
      "nodemailer",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    title: "NextJS_fullstack_auth",
    desc: "Auth app which store the user in DB and verify & reset password using email",
    live: "https://nextjs-fullstack-auth-two.vercel.app/",
    github: "https://github.com/shubhamkhatik/nextjs_fullstack_auth",
  },
  {
    id: 1,
    img: foodvilla,
    skills: ["React", "Tailwind", "Razorpay", "Redux Toolkit"],
    title: "FoodVilla",
    desc: "Swiggy's live API data, infinite scrolling, shopping cart , Shimmer UI, lazy loading, routing and Razorpay ",
    live: "https://main--foodvillaswiggy.netlify.app/",
    github: "https://github.com/shubhamkhatik/food-villa",
  },
  {
    id: 2,
    img: netflix,
    skills: [
      "React",
      "Tailwind",
      "Redux Toolkit",
      "firebase",
      "ExpressJS",
      "MongoDB",
    ],
    title: "Netflix  + TMDB movie",
    desc: "🎬 Netflix application is integrated with TMDB to fetch movie details and with Firebase for authentication.",
    live: "https://netflix-123fe.web.app/",
    github: "https://github.com/shubhamkhatik/netflix-gpt",
  },
  {
    id: 4,
    img: taskify,
    skills: [
      "JavaScript",
    ],
    title: "Taskify",
    desc: "TODO application with drag and drop functionality",
    live: "https://taskify-typescript-one.vercel.app/",
    github: "https://github.com/shubhamkhatik/taskify-typescript",
  },
  {
    id: 5,
    img: employee,
    skills: [
      "JavaScript",
    ],
    title: "Employee Management",
    desc: "Add and delete employee",
    live: "https://employee-database-management.vercel.app/",
    github: "https://github.com/shubhamkhatik/employee-database-management",
  },
  
];
