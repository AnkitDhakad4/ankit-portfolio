// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import particlesConfig from "./particle-config"; // ✅ import your config

const ParticlesPage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // load the slim version of tsparticles into the engine
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="h-screen w-screen relative">
      {/* particles background */}
      <Particles
        className="absolute inset-0 z-0"
        options={particlesConfig} // ✅ pass imported config here
      />
      {/* your content */}
      <div className="flex items-center justify-center text-white h-full relative z-10">
        <h1 className="text-4xl font-bold">Welcome to Particles Page</h1>
      </div>
    </div>
  );
};

export default ParticlesPage;
