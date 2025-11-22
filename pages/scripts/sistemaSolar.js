
    const planetData = {
      mercury: {
        name: "Mercúrio",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/800px-Mercury_in_color_-_Prockter07-edit1.jpg",
        description: "Mercúrio é o planeta mais próximo do Sol e o menor do Sistema Solar. Não tem atmosfera significativa e sofre grandes variações de temperatura.",
        facts: {
          "Diâmetro": "4.879 km",
          "Distância do Sol": "57,9 milhões de km",
          "Período orbital": "88 dias terrestres",
          "Temperatura": "De -173°C a 427°C"
        }
      },
      venus: {
        name: "Vênus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/800px-Venus-real_color.jpg",
        description: "Vênus é o planeta mais quente do Sistema Solar, com uma atmosfera densa de dióxido de carbono que causa um forte efeito estufa.",
        facts: {
          "Diâmetro": "12.104 km",
          "Distância do Sol": "108,2 milhões de km",
          "Período orbital": "225 dias terrestres",
          "Temperatura": "Aprox. 462°C"
        }
      },
      earth: {
        name: "Terra",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg",
        description: "Nosso lar! A Terra é o único planeta conhecido com vida. Tem água líquida em abundância e uma atmosfera rica em oxigênio.",
        facts: {
          "Diâmetro": "12.742 km",
          "Distância do Sol": "149,6 milhões de km",
          "Período orbital": "365,25 dias",
          "Satélites naturais": "1 (a Lua)"
        }
      },
      mars: {
        name: "Marte",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg",
        description: "Conhecido como o 'Planeta Vermelho' por causa do óxido de ferro em sua superfície. É alvo de muitas missões de exploração.",
        facts: {
          "Diâmetro": "6.779 km",
          "Distância do Sol": "227,9 milhões de km",
          "Período orbital": "687 dias terrestres",
          "Luas": "2 (Fobos e Deimos)"
        }
      },
      jupiter: {
        name: "Júpiter",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        description: "O maior planeta do Sistema Solar! É um gigante gasoso com uma famosa tempestade chamada Grande Mancha Vermelha.",
        facts: {
          "Diâmetro": "139.820 km",
          "Distância do Sol": "778,5 milhões de km",
          "Período orbital": "11,86 anos terrestres",
          "Luas conhecidas": "95+"
        }
      },
      saturn: {
        name: "Saturno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg",
        description: "Famoso por seus anéis espetaculares feitos de gelo e rochas. É o segundo maior planeta do Sistema Solar.",
        facts: {
          "Diâmetro": "116.460 km",
          "Distância do Sol": "1,43 bilhão de km",
          "Período orbital": "29,5 anos terrestres",
          "Luas conhecidas": "146+"
        }
      },
      uranus: {
        name: "Urano",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg",
        description: "Um gigante de gelo com uma cor azul-esverdeada. Gira de lado, quase como se estivesse deitado em sua órbita!",
        facts: {
          "Diâmetro": "50.724 km",
          "Distância do Sol": "2,87 bilhões de km",
          "Período orbital": "84 anos terrestres",
          "Luas": "27"
        }
      },
      neptune: {
        name: "Netuno",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/800px-Neptune_Full.jpg",
        description: "O planeta mais distante do Sol. Tem os ventos mais fortes do Sistema Solar, chegando a 2.100 km/h!",
        facts: {
          "Diâmetro": "49.244 km",
          "Distância do Sol": "4,5 bilhões de km",
          "Período orbital": "165 anos terrestres",
          "Luas": "14"
        }
      }
    };

    function createStars() {
      const stars = document.getElementById('stars');
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 2 + 0.3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        star.style.animationDelay = `${Math.random() * 3}s`;
        stars.appendChild(star);
      }
    }


    function animatePlanets() {
      const planets = [
        { el: document.querySelector('[data-planet="mercury"]'), radius: 80, speed: 0.004, angle: 0 },
        { el: document.querySelector('[data-planet="venus"]'), radius: 110, speed: 0.003, angle: 1 },
        { el: document.querySelector('[data-planet="earth"]'), radius: 140, speed: 0.0025, angle: 2 },
        { el: document.querySelector('[data-planet="mars"]'), radius: 170, speed: 0.002, angle: 3 },
        { el: document.querySelector('[data-planet="jupiter"]'), radius: 230, speed: 0.001, angle: 4 },
        { el: document.querySelector('[data-planet="saturn"]'), radius: 280, speed: 0.0008, angle: 5 },
        { el: document.querySelector('[data-planet="uranus"]'), radius: 330, speed: 0.0006, angle: 6 },
        { el: document.querySelector('[data-planet="neptune"]'), radius: 380, speed: 0.0004, angle: 7 }
      ];

      function update() {
        planets.forEach(p => {
          p.angle += p.speed;
          const x = Math.cos(p.angle) * p.radius;
          const y = Math.sin(p.angle) * p.radius;
          p.el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
        requestAnimationFrame(update);
      }
      update();
    }

    function showPlanetDetails(planetKey) {
      const data = planetData[planetKey];
      if (!data) return;

      document.getElementById('detailTitle').textContent = data.name;
      document.getElementById('detailImage').src = data.image;
      
      let factsHtml = `<p>${data.description}</p><div class="mt-3">`;
      for (const [label, value] of Object.entries(data.facts)) {
        factsHtml += `<div class="info-item"><span class="info-label">${label}:</span> ${value}</div>`;
      }
      factsHtml += `</div>`;
      
      document.getElementById('detailContent').innerHTML = factsHtml;
      document.getElementById('planetDetails').classList.add('active');
      document.querySelector('.solar-system-main').style.transform = 'translateX(380px)';
    }

    function closeDetails() {
      document.getElementById('planetDetails').classList.remove('active');
      document.querySelector('.solar-system-main').style.transform = 'translateX(0)';
    }

    document.addEventListener('DOMContentLoaded', () => {
      createStars();
      animatePlanets();

      document.querySelectorAll('.planet').forEach(planet => {
        planet.addEventListener('click', () => {
          const key = planet.getAttribute('data-planet');
          showPlanetDetails(key);
        });

        planet.addEventListener('mouseenter', () => {
          planet.style.transform = 'translate(-50%, -50%) scale(1.8)';
          planet.style.zIndex = '20';
          planet.style.filter = 'drop-shadow(0 0 8px white)';
        });
        planet.addEventListener('mouseleave', () => {
          planet.style.transform = 'translate(-50%, -50%) scale(1)';
          planet.style.zIndex = '5';
          planet.style.filter = 'none';
        });
      });

      document.getElementById('closeDetails').addEventListener('click', closeDetails);
    });
  