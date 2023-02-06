import devData from "../data/devData.js";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Container from "../components/Home/Container";
import Hero from "../components/Home/Hero";

const Home = () => {
  const { firstName, lastName, photo, contacts, aboutMe, mySkills } = devData;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="">
      <Hero fullName={fullName} />
      <About
        fullName={fullName}
        photo={photo}
        aboutMe={aboutMe}
        mySkills={mySkills}
      />
      <Container />
      <Contact contacts={contacts} />
    </div>
  );
};

export default Home;
