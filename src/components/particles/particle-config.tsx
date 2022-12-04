const particlesConfig= {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#b11dc5"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#000000"
      },
      polygon: {
        nb_sides: 3
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#7c43be",
      opacity: 0.4,
      width: 1.5782952832645454
    },
    move: {
      enable: true,
      speed: 3,
      random: false,
      straight: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 121.81158184520176,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 280.1666382439641,
        size: 12.181158184520177,
        duration: 1.2181158184520178,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default particlesConfig