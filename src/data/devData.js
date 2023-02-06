import Photo from "../assets/images/devPhoto.jpg";

const devData = {
  firstName: "Saidbek",
  lastName: "Khudayberdiev",
  photo: Photo,
  contacts: [
    { "phone-Number": "+998 (94) 023 01 55" },
    { email: "saidbexudayberdiyevs@gmail.com" },
    { facebook: "Saidbek Xudayberdiyev" },
    { address: "Tashkent, Uzbekistan" },
  ],

  aboutMe:
    "Innovative web developer skilled in creating fresh, modern web sites. Problem-solver successful at collaborating with technical teams to deliver attractive and engaging results.",
  mySkills: {
    frontEnd: [
      "HTML",
      "CSS",
      "SaSS",
      "JavaScript",
      "jQuery",
      "TailwindCSS",
      "Bootstrap",
      "ReactJS",
    ],
    backEnd: [
      "JS(ES6, ES7, CommonJS)",
      "Python(Telegram bot)",
      "NodeJS",
      "ExpressJS",
      "EJS",
      "MongoDB",
      "SQL",
      "API Development",
    ],
    extra: ["GulpJS", "Git", "Github"],
  },
};

export default devData;
