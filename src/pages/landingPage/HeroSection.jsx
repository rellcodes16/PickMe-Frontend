import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";

function HeroSection() {
  const navigate = useNavigate()
  function getStarted(){
    navigate('/signup')
  }
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Revolutionize Voting with{" "}
          <span className="text-violet-700">Ease and Security</span>
        </h1>
        <p className="text-lg text-gray-600">
          Empower your organization with <span className="font-semibold text-violet-700 text-lg">PickMe</span>.
          A seamless, transparent, and real-time voting platform.
          Whether you're running elections for schools, clubs, or professional bodies, we have got you covered.
        </p>
        <Button type="primary" onClick={getStarted}>Get Started</Button>
      </div>

      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src=""
          alt="App preview"
          className="w-[300px] h-auto object-contain"
        />
      </div>
    </section>
  );
}

export default HeroSection;
