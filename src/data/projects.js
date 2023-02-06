import LanguageTutor from "../assets/projects/project-lt.png";
import Lfl from "../assets/projects/project-lfl.png";
import CookingBest from "../assets/projects/project-cooking-best.png";
import LogReg from "../assets/projects/project-login-register.png";
import Fiber from "../assets/projects/project-fiber.png";

const data = [
  {
    id: 1,
    title: "Language Tutor webpage",
    description:
      "It's simple landing page(homepage) which is compatible for your small and middle business!",
    srcCode: "https://github.com/saidbek-ai/Simple-Landing-Page.git",
    liveDemo: "https://saidbek-ai.github.io/Simple-Landing-Page/",
    category: ["bootstrap", "html", "css"],
    state: "NOT Completed",
    coverImage: LanguageTutor,
  },
  {
    id: 2,
    title: "Multipage Site",
    description:
      "This site is for full compatible for your middle business and you can use it for any purpose!",
    srcCode: "https://github.com/saidbek-ai/Mutli-Page-Frontend-website.git",
    liveDemo: "https://saidbek-ai.github.io/Mutli-Page-Frontend-website/",
    category: ["bootstrap", "html", "css", "javascript"],
    state: "ongoing",
    coverImage: Lfl,
  },
  {
    id: 3,
    title: "Cooking Best Recipes Web App",
    description:
      "Cooking Best is mutipage ReactJS app which used to search recipes by ingredient, type and cuisine!",
    srcCode: "https://github.com/saidbek-ai/cooking-best.git",
    liveDemo: "https://saidbek-ai.github.io/cooking-best/",
    category: ["react", "tailwindcss"],
    state: "ongoing",
    coverImage: CookingBest,
  },
  {
    id: 4,
    title: "Login & Register page",
    description:
      "Full Responsive Login & Register page in pure html, css, javascript! You can use it for all your project!",
    srcCode: "https://github.com/saidbek-ai/Login-Register-form.git",
    liveDemo: "https://saidbek-ai.github.io/Login-Register-form/",
    category: ["html", "css", "javascript"],
    state: "completed",
    coverImage: LogReg,
  },
  {
    id: 5,
    title: "Fiber Landing Page",
    description:
      "Fiber landing page is created using reactjs and tailwindcss with login/register . Full responsive for all devices(desktop, laptop, tablet and mobile)",
    srcCode: "",
    liveDemo: "https://saidbek-ai.github.io/fiber-landingpage/",
    category: ["html", "css", "javascript", "react", "tailwind"],
    state: "completed",
    coverImage: Fiber,
  },
];

export default data;
