import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import react, { useCallback } from "react";

const ParticlesContainer = () => {
  //init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: true },
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 240,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 0,
              },
              repulse: {
                distance: 120,
                duration: 0.01,
              },
            },
          },
          particles: {
            color: {
              value: "#e68e2e",
            },
            links: {
              color: "#f5d393",
              distance: 300,
              enable: true,
              opacity: 0.1,
              width: 0.5,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 500,
              },
              value: 70,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ParticlesContainer;
