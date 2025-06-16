import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const ParticleBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        const loadParticles = async () => {
            await initParticlesEngine(loadSlim); // Loads the engine
            setInit(true);
        };

        loadParticles();
    }, []);

    const particlesConfig = { 
        style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: -1,
        },        
        background: { color: { value: "#000000" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: false, mode: "push" },
                onHover: { enable: false, mode: "repulse" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "out" } },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    } 


    // star particles
    // const particlesConfig = {
    //     fullScreen: { enable: true, zIndex: -1 }, // Ensures it covers the entire screen
    //     background: {
    //         color: "#000",
    //     },
    //     detectRetina: false,
    //     fpsLimit: 30,
    //     particles: {
    //         number: {
    //             value: 160,
    //             density: {
    //                 enable: true,
    //                 value_area: 1500,
    //             },
    //         },
    //         line_linked: {
    //             enable: false,
    //             opacity: 0.03,
    //         },
    //         move: {
    //             direction: "right",
    //             speed: 0.05,
    //         },
    //         size: {
    //             value: 1,
    //         },
    //         opacity: {
    //             anim: {
    //                 enable: true,
    //                 speed: 0.5, // Adjust speed for smoother twinkling
    //                 opacity_min: 0.1, // Minimum opacity to make twinkling more noticeable
    //             },
    //         },
    //     },
    //     interactivity: {
    //         events: {
    //             onclick: {
    //                 enable: true,
    //                 mode: "push",
    //             },
    //         },
    //         modes: {
    //             push: {
    //                 particles_nb: 1,
    //             },
    //         },
    //     },
    //     retina_detect: true,
    // };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    className="w-full h-screen fixed top-0 left-0 -z-10 bg-no-repeat bg-cover"
                    options={particlesConfig}
                />
            )}
        </>
    );
};

export default ParticleBackground;
