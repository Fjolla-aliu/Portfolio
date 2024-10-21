import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#16423C] overflow-hidden">
      <Navbar />
      <div className="container mt-24 mx-auto md:mx-0 max-w-screen-xl px-10 py-4 ">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <div className="h-1 w-11/12 rounded-xl bg-[#80CBC4]"></div>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
