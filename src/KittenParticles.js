// src/KittenParticles.js
import React from "react";
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const particlesInit = async (engine) => {
  await loadAll(engine);
};

const KittenParticles = () => {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#fef9f4" }
        },
        particles: {
          number: {
            value: 25,
            density: {
              enable: true,
              value_area: 1000
            }
          },
          shape: {
            type: "image",
            image: [
              {
                src: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
                width: 100,
                height: 100
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/616/616490.png",
                width: 100,
                height: 100
              },
              {
                src: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
                width: 100,
                height: 100
              }
            ]
          },
          size: {
            value: 24,
            random: true,
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 10,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outMode: "bounce",
            random: false,
            straight: false
          },
          opacity: {
            value: 0.9,
            random: true
          }
        },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 2
            }
          }
        }
      }}
    />
  );
};

export default KittenParticles;
