import fullstackauth from "../assets/fullstackauth.png";
import foodvilla from "../assets/foodvilla.png";
import netflix from "../assets/netflix.png";

export const projects = [
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
    id: 0,
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
    desc: "pending",
    live: "https://netflix-123fe.web.app/",
    github: "https://github.com/shubhamkhatik/netflix-gpt",
  },
];
