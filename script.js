/* ================================================
   BLOCKBUSTER 3D STORE — Application Logic
   ================================================ */

// ===== MOVIE DATA =====
const movieData = {
  comedy: [
    {
      title: "The Hangover",
      year: 2009,
      rating: 7.7,
      imdb: "https://www.imdb.com/title/tt1119646/",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Superbad",
      year: 2007,
      rating: 7.6,
      imdb: "https://www.imdb.com/title/tt0829482/",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Bridesmaids",
      year: 2011,
      rating: 6.8,
      imdb: "https://www.imdb.com/title/tt1478338/",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Step Brothers",
      year: 2008,
      rating: 6.9,
      imdb: "https://www.imdb.com/title/tt0838283/",
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
    },
    {
      title: "Mean Girls",
      year: 2004,
      rating: 7.1,
      imdb: "https://www.imdb.com/title/tt0377092/",
      gradient: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)"
    },
    {
      title: "Dumb and Dumber",
      year: 1994,
      rating: 7.3,
      imdb: "https://www.imdb.com/title/tt0109686/",
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    }
  ],
  action: [
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      rating: 8.1,
      imdb: "https://www.imdb.com/title/tt1392190/",
      gradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)"
    },
    {
      title: "John Wick",
      year: 2014,
      rating: 7.4,
      imdb: "https://www.imdb.com/title/tt2911666/",
      gradient: "linear-gradient(135deg, #1a1a2e 0%, #3d3d5c 50%, #16213e 100%)"
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      imdb: "https://www.imdb.com/title/tt0468569/",
      gradient: "linear-gradient(135deg, #141E30 0%, #243B55 100%)"
    },
    {
      title: "Die Hard",
      year: 1988,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt0095016/",
      gradient: "linear-gradient(135deg, #c31432 0%, #240b36 100%)"
    },
    {
      title: "Gladiator",
      year: 2000,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt0172495/",
      gradient: "linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)"
    },
    {
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt1745960/",
      gradient: "linear-gradient(135deg, #1a2a6c 0%, #b21f1f 50%, #fdbb2d 100%)"
    }
  ],
  scifi: [
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      imdb: "https://www.imdb.com/title/tt0816692/",
      gradient: "linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #203a43 100%)"
    },
    {
      title: "Blade Runner 2049",
      year: 2017,
      rating: 8.0,
      imdb: "https://www.imdb.com/title/tt1856101/",
      gradient: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)"
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      imdb: "https://www.imdb.com/title/tt0133093/",
      gradient: "linear-gradient(135deg, #000000 0%, #0a4a0a 50%, #0f9b0f 100%)"
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      imdb: "https://www.imdb.com/title/tt1375666/",
      gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
    },
    {
      title: "Dune",
      year: 2021,
      rating: 8.0,
      imdb: "https://www.imdb.com/title/tt1160419/",
      gradient: "linear-gradient(135deg, #c2935e 0%, #8b6f47 50%, #d4a76a 100%)"
    },
    {
      title: "Alien",
      year: 1979,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt0078748/",
      gradient: "linear-gradient(135deg, #0c0c1d 0%, #1a1a3e 50%, #0f4c75 100%)"
    }
  ]
};

// Genre display labels
const genreLabels = {
  comedy: "Comedy",
  action: "Action",
  scifi: "Sci-Fi"
};

// ===== RENDER MOVIE CARDS =====
function createMovieCard(movie, genre) {
  const card = document.createElement("a");
  card.href = movie.imdb;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.className = "movie-case";
  card.setAttribute("aria-label", `${movie.title} (${movie.year}) — Open IMDB page`);

  card.innerHTML = `
    <div class="movie-poster" style="background: ${movie.gradient}">
      <div class="poster-pattern"></div>
      <div class="poster-overlay"></div>
      <div class="poster-shimmer"></div>
      <div class="movie-rating">
        <span class="rating-star">★</span> ${movie.rating}
      </div>
      <div class="poster-content">
        <span class="movie-genre-tag">${genreLabels[genre]}</span>
        <h3 class="movie-title">${movie.title}</h3>
        <span class="movie-year">${movie.year}</span>
      </div>
      <div class="movie-imdb-badge">▶ View on IMDB</div>
    </div>
  `;

  return card;
}

function renderMovies() {
  Object.entries(movieData).forEach(([genre, movies]) => {
    const grid = document.getElementById(`${genre}-grid`);
    if (!grid) return;

    movies.forEach((movie, index) => {
      const card = createMovieCard(movie, genre);
      card.style.animationDelay = `${index * 0.12}s`;
      grid.appendChild(card);
    });
  });
}

// ===== 3D TILT EFFECT ON MOUSE MOVE =====
function initTiltEffect() {
  const cards = document.querySelectorAll(".movie-case");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * -18;
      const tiltY = (x - 0.5) * 18;

      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(25px) scale(1.06)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)";
    });
  });
}

// ===== SCROLL REVEAL — IntersectionObserver =====
function initScrollReveal() {
  // Reveal movie cards
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".movie-case").forEach((card) => {
    cardObserver.observe(card);
  });

  // Reveal section headers
  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          headerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".section-header").forEach((header) => {
    headerObserver.observe(header);
  });
}

// ===== FLOATING PARTICLES =====
function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  const count = 45;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = 2 + Math.random() * 3;
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${10 + Math.random() * 15}s;
      animation-delay: ${Math.random() * 12}s;
    `;
    container.appendChild(particle);
  }
}

// ===== ACTIVE NAV LINK ON SCROLL =====
function initActiveNav() {
  const sections = document.querySelectorAll(".genre-section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const genre = entry.target.getAttribute("data-genre");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("data-genre") === genre
            );
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: `-${70}px 0px -50% 0px` }
  );

  sections.forEach((section) => observer.observe(section));
}

// ===== NAV BACKGROUND ON SCROLL =====
function initNavScroll() {
  const nav = document.getElementById("main-nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ===== INITIALIZE EVERYTHING =====
document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  initTiltEffect();
  initScrollReveal();
  createParticles();
  initActiveNav();
  initNavScroll();
  initSmoothScroll();
});
