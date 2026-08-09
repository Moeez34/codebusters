/* ================================================
   BLOCKBUSTER 3D VR STORE — Application Logic
   ================================================ */

// ===== MOVIE DATA (60 movies, 5 genres) =====
const movieData = {
  comedy: [
    { title: "The Hangover", year: 2009, rating: 7.7, imdb: "https://www.imdb.com/title/tt1119646/", colors: ["#667eea", "#764ba2"] },
    { title: "Superbad", year: 2007, rating: 7.6, imdb: "https://www.imdb.com/title/tt0829482/", colors: ["#f093fb", "#f5576c"] },
    { title: "Bridesmaids", year: 2011, rating: 6.8, imdb: "https://www.imdb.com/title/tt1478338/", colors: ["#fa709a", "#fee140"] },
    { title: "Step Brothers", year: 2008, rating: 6.9, imdb: "https://www.imdb.com/title/tt0838283/", colors: ["#a18cd1", "#fbc2eb"] },
    { title: "Mean Girls", year: 2004, rating: 7.1, imdb: "https://www.imdb.com/title/tt0377092/", colors: ["#ff758c", "#ff7eb3"] },
    { title: "Dumb & Dumber", year: 1994, rating: 7.3, imdb: "https://www.imdb.com/title/tt0109686/", colors: ["#f6d365", "#fda085"] },
    { title: "Anchorman", year: 2004, rating: 7.2, imdb: "https://www.imdb.com/title/tt0357413/", colors: ["#ffecd2", "#fcb69f"] },
    { title: "Napoleon Dynamite", year: 2004, rating: 6.9, imdb: "https://www.imdb.com/title/tt0374900/", colors: ["#a1c4fd", "#c2e9fb"] },
    { title: "Grand Budapest Hotel", year: 2014, rating: 8.1, imdb: "https://www.imdb.com/title/tt2278388/", colors: ["#d4fc79", "#96e6a1"] },
    { title: "Borat", year: 2006, rating: 7.4, imdb: "https://www.imdb.com/title/tt0443453/", colors: ["#84fab0", "#8fd3f4"] },
    { title: "Shaun of the Dead", year: 2004, rating: 7.9, imdb: "https://www.imdb.com/title/tt0365748/", colors: ["#c471f5", "#fa71cd"] },
    { title: "Tropic Thunder", year: 2008, rating: 7.1, imdb: "https://www.imdb.com/title/tt0942385/", colors: ["#f5576c", "#ff9966"] }
  ],
  action: [
    { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, imdb: "https://www.imdb.com/title/tt1392190/", colors: ["#f12711", "#f5af19"] },
    { title: "John Wick", year: 2014, rating: 7.4, imdb: "https://www.imdb.com/title/tt2911666/", colors: ["#232526", "#414345"] },
    { title: "The Dark Knight", year: 2008, rating: 9.0, imdb: "https://www.imdb.com/title/tt0468569/", colors: ["#141E30", "#243B55"] },
    { title: "Die Hard", year: 1988, rating: 8.2, imdb: "https://www.imdb.com/title/tt0095016/", colors: ["#c31432", "#240b36"] },
    { title: "Gladiator", year: 2000, rating: 8.5, imdb: "https://www.imdb.com/title/tt0172495/", colors: ["#3a1c71", "#d76d77"] },
    { title: "Top Gun: Maverick", year: 2022, rating: 8.2, imdb: "https://www.imdb.com/title/tt1745960/", colors: ["#1a2a6c", "#fdbb2d"] },
    { title: "Mission Impossible", year: 2018, rating: 7.7, imdb: "https://www.imdb.com/title/tt4912910/", colors: ["#0f0c29", "#302b63"] },
    { title: "Kill Bill Vol.1", year: 2003, rating: 8.2, imdb: "https://www.imdb.com/title/tt0266697/", colors: ["#eb3349", "#f45c43"] },
    { title: "The Raid", year: 2011, rating: 7.6, imdb: "https://www.imdb.com/title/tt1899353/", colors: ["#1d4350", "#a43931"] },
    { title: "300", year: 2006, rating: 7.6, imdb: "https://www.imdb.com/title/tt0416449/", colors: ["#870000", "#190a05"] },
    { title: "Logan", year: 2017, rating: 8.1, imdb: "https://www.imdb.com/title/tt3315342/", colors: ["#283048", "#859398"] },
    { title: "Fury", year: 2014, rating: 7.6, imdb: "https://www.imdb.com/title/tt2713180/", colors: ["#414d0b", "#727a17"] }
  ],
  scifi: [
    { title: "Interstellar", year: 2014, rating: 8.7, imdb: "https://www.imdb.com/title/tt0816692/", colors: ["#0f2027", "#2c5364"] },
    { title: "Blade Runner 2049", year: 2017, rating: 8.0, imdb: "https://www.imdb.com/title/tt1856101/", colors: ["#fc4a1a", "#f7b733"] },
    { title: "The Matrix", year: 1999, rating: 8.7, imdb: "https://www.imdb.com/title/tt0133093/", colors: ["#000000", "#0f9b0f"] },
    { title: "Inception", year: 2010, rating: 8.8, imdb: "https://www.imdb.com/title/tt1375666/", colors: ["#0f0c29", "#24243e"] },
    { title: "Dune", year: 2021, rating: 8.0, imdb: "https://www.imdb.com/title/tt1160419/", colors: ["#c2935e", "#8b6f47"] },
    { title: "Alien", year: 1979, rating: 8.5, imdb: "https://www.imdb.com/title/tt0078748/", colors: ["#0c0c1d", "#0f4c75"] },
    { title: "Terminator 2", year: 1991, rating: 8.6, imdb: "https://www.imdb.com/title/tt0103064/", colors: ["#4b6cb7", "#182848"] },
    { title: "Arrival", year: 2016, rating: 7.9, imdb: "https://www.imdb.com/title/tt2543164/", colors: ["#1f1c2c", "#928DAB"] },
    { title: "Ex Machina", year: 2014, rating: 7.7, imdb: "https://www.imdb.com/title/tt0470752/", colors: ["#0a0e14", "#3a7bd5"] },
    { title: "The Martian", year: 2015, rating: 8.0, imdb: "https://www.imdb.com/title/tt3659388/", colors: ["#c0392b", "#8e44ad"] },
    { title: "Edge of Tomorrow", year: 2014, rating: 7.9, imdb: "https://www.imdb.com/title/tt1631867/", colors: ["#2c3e50", "#3498db"] },
    { title: "Gravity", year: 2013, rating: 7.7, imdb: "https://www.imdb.com/title/tt1454468/", colors: ["#0c0c1d", "#344955"] }
  ],
  drama: [
    { title: "Shawshank Redemption", year: 1994, rating: 9.3, imdb: "https://www.imdb.com/title/tt0111161/", colors: ["#2c3e50", "#4a6274"] },
    { title: "Forrest Gump", year: 1994, rating: 8.8, imdb: "https://www.imdb.com/title/tt0109830/", colors: ["#3E5151", "#DECBA4"] },
    { title: "Fight Club", year: 1999, rating: 8.8, imdb: "https://www.imdb.com/title/tt0137523/", colors: ["#200122", "#6f0000"] },
    { title: "The Godfather", year: 1972, rating: 9.2, imdb: "https://www.imdb.com/title/tt0068646/", colors: ["#0f0c0c", "#302b2b"] },
    { title: "Pulp Fiction", year: 1994, rating: 8.9, imdb: "https://www.imdb.com/title/tt0110912/", colors: ["#eecda3", "#ef629f"] },
    { title: "Schindler's List", year: 1993, rating: 9.0, imdb: "https://www.imdb.com/title/tt0108052/", colors: ["#141517", "#2c3e50"] },
    { title: "Whiplash", year: 2014, rating: 8.5, imdb: "https://www.imdb.com/title/tt2582802/", colors: ["#eb5757", "#000000"] },
    { title: "Parasite", year: 2019, rating: 8.5, imdb: "https://www.imdb.com/title/tt6751668/", colors: ["#0a504a", "#38ef7d"] },
    { title: "The Prestige", year: 2006, rating: 8.5, imdb: "https://www.imdb.com/title/tt0482571/", colors: ["#355c7d", "#6c5b7b"] },
    { title: "Good Will Hunting", year: 1997, rating: 8.3, imdb: "https://www.imdb.com/title/tt0119217/", colors: ["#4568dc", "#b06ab3"] },
    { title: "A Beautiful Mind", year: 2001, rating: 8.2, imdb: "https://www.imdb.com/title/tt0268978/", colors: ["#0f2027", "#203a43"] },
    { title: "The Green Mile", year: 1999, rating: 8.6, imdb: "https://www.imdb.com/title/tt0120689/", colors: ["#2c3e50", "#4ca1af"] }
  ],
  family: [
    { title: "Toy Story", year: 1995, rating: 8.3, imdb: "https://www.imdb.com/title/tt0114709/", colors: ["#00b4db", "#0083b0"] },
    { title: "Finding Nemo", year: 2003, rating: 8.2, imdb: "https://www.imdb.com/title/tt0266543/", colors: ["#56ab2f", "#a8e063"] },
    { title: "The Incredibles", year: 2004, rating: 8.0, imdb: "https://www.imdb.com/title/tt0317705/", colors: ["#ff416c", "#ff4b2b"] },
    { title: "Up", year: 2009, rating: 8.3, imdb: "https://www.imdb.com/title/tt1049413/", colors: ["#11998e", "#38ef7d"] },
    { title: "Shrek", year: 2001, rating: 7.9, imdb: "https://www.imdb.com/title/tt0126029/", colors: ["#a8ff78", "#78ffd6"] },
    { title: "Frozen", year: 2013, rating: 7.4, imdb: "https://www.imdb.com/title/tt2294629/", colors: ["#2193b0", "#6dd5ed"] },
    { title: "The Lion King", year: 1994, rating: 8.5, imdb: "https://www.imdb.com/title/tt0110357/", colors: ["#f7971e", "#ffd200"] },
    { title: "Coco", year: 2017, rating: 8.4, imdb: "https://www.imdb.com/title/tt2380307/", colors: ["#e44d26", "#f16529"] },
    { title: "Moana", year: 2016, rating: 7.6, imdb: "https://www.imdb.com/title/tt3521164/", colors: ["#667db6", "#0082c8"] },
    { title: "Ratatouille", year: 2007, rating: 8.1, imdb: "https://www.imdb.com/title/tt0382932/", colors: ["#f953c6", "#b91d73"] },
    { title: "WALL-E", year: 2008, rating: 8.4, imdb: "https://www.imdb.com/title/tt0910970/", colors: ["#1488cc", "#2b32b2"] },
    { title: "Monsters Inc", year: 2001, rating: 8.1, imdb: "https://www.imdb.com/title/tt0198781/", colors: ["#43cea2", "#185a9d"] }
  ]
};

// ===== TEXTURE GENERATORS =====

/** Generate a canvas texture simulating a dense grid of DVD cases on shelves */
function generateDVDWallTexture(rows, cols) {
  const dvdW = 36;
  const dvdH = 50;
  const gap = 3;
  const shelfH = 5;
  const canvas = document.createElement('canvas');
  canvas.width = cols * (dvdW + gap) + gap;
  canvas.height = rows * (dvdH + shelfH) + shelfH;
  const ctx = canvas.getContext('2d');

  // Dark shelf background
  ctx.fillStyle = '#0d0a07';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let r = 0; r < rows; r++) {
    // Shelf bar between rows
    const shelfY = shelfH + r * (dvdH + shelfH) + dvdH;
    ctx.fillStyle = '#4a3320';
    ctx.fillRect(0, shelfY, canvas.width, shelfH);
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.fillRect(0, shelfY, canvas.width, 1);

    for (let c = 0; c < cols; c++) {
      const x = gap + c * (dvdW + gap);
      const y = shelfH + r * (dvdH + shelfH);

      const hue = Math.random() * 360;
      const sat = 30 + Math.random() * 55;
      const light = 18 + Math.random() * 40;

      // DVD cover gradient
      const grad = ctx.createLinearGradient(x, y, x + dvdW, y + dvdH);
      grad.addColorStop(0, `hsl(${hue}, ${sat}%, ${light + 12}%)`);
      grad.addColorStop(0.5, `hsl(${hue + 10}, ${sat}%, ${light}%)`);
      grad.addColorStop(1, `hsl(${hue + 20}, ${sat - 5}%, ${light - 5}%)`);
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, dvdW, dvdH);

      // Spine line
      ctx.fillStyle = `hsl(${hue}, ${sat}%, ${Math.max(5, light - 10)}%)`;
      ctx.fillRect(x, y, 3, dvdH);

      // Cover art highlight
      if (Math.random() > 0.45) {
        const sg = ctx.createRadialGradient(x + dvdW * 0.4, y + dvdH * 0.3, 2, x + dvdW * 0.4, y + dvdH * 0.3, dvdW * 0.5);
        sg.addColorStop(0, `hsla(${hue}, ${sat}%, ${light + 25}%, 0.25)`);
        sg.addColorStop(1, 'transparent');
        ctx.fillStyle = sg;
        ctx.fillRect(x, y, dvdW, dvdH);
      }

      // Fake title text
      ctx.fillStyle = `hsla(0, 0%, 100%, ${0.12 + Math.random() * 0.2})`;
      ctx.fillRect(x + 4, y + dvdH * 0.72, dvdW - 8, 2.5);
      if (Math.random() > 0.35) {
        ctx.fillRect(x + 4, y + dvdH * 0.72 + 5, dvdW * 0.55, 1.5);
      }

      // Border
      ctx.strokeStyle = 'rgba(0,0,0,0.45)';
      ctx.lineWidth = 0.5;
      ctx.strokeRect(x, y, dvdW, dvdH);
    }
  }
  return canvas;
}

/** Generate a single movie poster canvas texture */
function generatePosterTexture(movie) {
  const canvas = document.createElement('canvas');
  canvas.width = 220;
  canvas.height = 320;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  // Gradient background
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, movie.colors[0]);
  grad.addColorStop(1, movie.colors[1]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Decorative circles
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(Math.random() * W, Math.random() * H * 0.5, 25 + Math.random() * 50, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.05})`;
    ctx.fill();
  }

  // Dark gradient for text readability
  const tg = ctx.createLinearGradient(0, H * 0.3, 0, H);
  tg.addColorStop(0, 'rgba(0,0,0,0)');
  tg.addColorStop(0.5, 'rgba(0,0,0,0.4)');
  tg.addColorStop(1, 'rgba(0,0,0,0.88)');
  ctx.fillStyle = tg;
  ctx.fillRect(0, 0, W, H);

  // Border
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(2, 2, W - 4, H - 4);

  // Title (word-wrapped)
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px Arial, Helvetica, sans-serif';
  ctx.textBaseline = 'bottom';
  const lines = wrapText(ctx, movie.title, W - 24);
  const lh = 24;
  const titleY = H - 38 - (lines.length - 1) * lh;
  lines.forEach((line, i) => {
    ctx.fillText(line, 12, titleY + i * lh);
  });

  // Year
  ctx.font = '14px Arial, Helvetica, sans-serif';
  ctx.fillStyle = '#bbbbbb';
  ctx.fillText(movie.year.toString(), 12, H - 12);

  // Rating badge
  const ratingStr = `★ ${movie.rating}`;
  ctx.font = 'bold 13px Arial, Helvetica, sans-serif';
  const rw = ctx.measureText(ratingStr).width + 14;
  roundRect(ctx, W - rw - 10, 10, rw, 22, 4);
  ctx.fillStyle = 'rgba(0,0,0,0.75)';
  ctx.fill();
  ctx.fillStyle = '#ffd700';
  ctx.textBaseline = 'middle';
  ctx.fillText(ratingStr, W - rw - 3, 21);

  return canvas;
}

/** Generate a Blockbuster-style genre sign texture */
function generateSignTexture(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  // Yellow border
  ctx.fillStyle = '#ffd700';
  roundRect(ctx, 0, 0, 512, 128, 6);
  ctx.fill();

  // Blue interior
  ctx.fillStyle = '#002d8a';
  roundRect(ctx, 6, 6, 500, 116, 4);
  ctx.fill();

  // Yellow text
  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 56px Arial, Helvetica, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 256, 66);

  return canvas;
}

// ===== UTILITY FUNCTIONS =====

function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ===== TEXTURE APPLICATION =====

/** Apply a canvas texture to an A-Frame element via Three.js */
function applyCanvasTexture(elementId, canvas) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  const tryApply = () => {
    const mesh = el.getObject3D('mesh');
    if (mesh) {
      mesh.material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.FrontSide });
      mesh.material.needsUpdate = true;
    } else {
      requestAnimationFrame(tryApply);
    }
  };
  tryApply();
}

// ===== STORE BUILDER =====

// Collect entities for deferred texture application
const pendingPosters = [];

function buildStore() {
  const scene = document.querySelector('a-scene');

  // 1. DVD wall textures - much higher density to look packed
  applyCanvasTexture('back-wall-dvds', generateDVDWallTexture(8, 90));
  applyCanvasTexture('left-wall-dvds', generateDVDWallTexture(8, 60));
  applyCanvasTexture('right-wall-dvds', generateDVDWallTexture(8, 60));

  // 2. Back wall genre signs
  const backSigns = [
    { text: 'NEW RELEASES', x: -11 },
    { text: 'CLASSICS', x: -5 },
    { text: 'SCI-FI', x: 0 },
    { text: 'ACTION', x: 5 },
    { text: 'DRAMA', x: 10 }
  ];
  backSigns.forEach(s => createSign(scene, s.text, `${s.x} 3.4 -9.8`, '0 0 0'));

  // 3. Side wall signs
  createSign(scene, 'DRAMA', '-14.85 3.4 -2', '0 90 0');
  createSign(scene, 'FAMILY', '14.85 3.4 -2', '0 -90 0');

  // 4. Entrance sign
  createSign(scene, 'BLOCKBUSTER', '0 3.4 9', '0 180 0');
  createSign(scene, 'NOW SHOWING', '0 3.4 5', '0 0 0');

  // 5. Center aisles with movies
  const aisles = [
    { genre: 'comedy', x: -7, label: 'COMEDY' },
    { genre: 'action', x: 0, label: 'ACTION' },
    { genre: 'scifi', x: 7, label: 'SCI-FI' }
  ];
  aisles.forEach(a => createAisle(scene, a.genre, a.x, a.label));

  // 6. Wall movies — Drama on left, Family on right, and a mix on the back wall
  createWallMovies(scene, 'drama', 'left');
  createWallMovies(scene, 'family', 'right');
  createBackWallMovies(scene);

  // 7. Apply all poster textures after entities initialize
  setTimeout(applyPendingTextures, 400);
}

function createAisle(scene, genre, x, label) {
  const movies = movieData[genre];
  const aisleZ = -1;
  const aisleLen = 8.5;

  // Shelf body
  const shelf = document.createElement('a-box');
  shelf.setAttribute('position', `${x} 1.15 ${aisleZ}`);
  shelf.setAttribute('width', '0.2');
  shelf.setAttribute('height', '2.3');
  shelf.setAttribute('depth', `${aisleLen}`);
  shelf.setAttribute('material', 'color: #4a3320; roughness: 0.9; shader: standard');
  scene.appendChild(shelf);

  // Shelf bars (horizontal edges) - 4 rows of shelves
  for (let row = 0; row < 4; row++) {
    const bar = document.createElement('a-box');
    bar.setAttribute('position', `${x} ${0.12 + row * 0.55} ${aisleZ}`);
    bar.setAttribute('width', '0.28');
    bar.setAttribute('height', '0.04');
    bar.setAttribute('depth', `${aisleLen}`);
    bar.setAttribute('material', 'color: #3a2515; roughness: 0.9; shader: standard');
    scene.appendChild(bar);
  }

  // Top cap
  const cap = document.createElement('a-box');
  cap.setAttribute('position', `${x} 2.35 ${aisleZ}`);
  cap.setAttribute('width', '0.28');
  cap.setAttribute('height', '0.06');
  cap.setAttribute('depth', `${aisleLen}`);
  cap.setAttribute('material', 'color: #3a2515; roughness: 0.9; shader: standard');
  scene.appendChild(cap);

  // Genre sign above aisle
  createSign(scene, label, `${x} 2.85 ${aisleZ}`, '0 0 0');

  // Movies on left side (facing -x, rotation 0 -90 0) - Densely packed: 4 rows of 12 columns = 48 movies!
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 12; c++) {
      const index = (r * 12 + c) % movies.length;
      const movie = movies[index];
      const pz = aisleZ - aisleLen / 2 + 0.6 + c * 0.64;
      const py = 0.38 + r * 0.55;
      createMoviePoster(scene, movie, x - 0.12, py, pz, -90, 0.48, 0.52);
    }
  }

  // Movies on right side (facing +x, rotation 0 90 0) - Densely packed: 4 rows of 12 columns = 48 movies!
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 12; c++) {
      const index = (r * 12 + c) % movies.length;
      const movie = movies[index];
      const pz = aisleZ - aisleLen / 2 + 0.6 + c * 0.64;
      const py = 0.38 + r * 0.55;
      createMoviePoster(scene, movie, x + 0.12, py, pz, 90, 0.48, 0.52);
    }
  }

  // End cap — featured poster facing entrance
  const featured = movies[0];
  createMoviePoster(scene, featured, x, 1.2, aisleZ + aisleLen / 2 + 0.12, 0, 1.1, 1.5);
}

function createWallMovies(scene, genre, wall) {
  const movies = movieData[genre];
  const isLeft = wall === 'left';
  const x = isLeft ? -14.82 : 14.82;
  const rotY = isLeft ? 90 : -90;

  // Create wall shelf bars for visual support
  for (let r = 0; r < 3; r++) {
    const bar = document.createElement('a-box');
    bar.setAttribute('position', `${isLeft ? -14.88 : 14.88} ${0.12 + r * 0.85} -0.5`);
    bar.setAttribute('width', '0.08');
    bar.setAttribute('height', '0.04');
    bar.setAttribute('depth', '18.5');
    bar.setAttribute('material', 'color: #3a2515; roughness: 0.9; shader: standard');
    scene.appendChild(bar);
  }

  // Place 3 rows of 26 columns = 78 movies on each side wall!
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 26; c++) {
      const index = (r * 26 + c) % movies.length;
      const movie = movies[index];
      const z = -8.2 + c * 0.63;
      const y = 0.55 + r * 0.85;
      createMoviePoster(scene, movie, x, y, z, rotY, 0.55, 0.72);
    }
  }
}

function createBackWallMovies(scene) {
  // Combine movies from different genres to fill the back wall
  const allMovies = [...movieData.action, ...movieData.scifi, ...movieData.comedy];
  const z = -9.82;
  const rotY = 0;

  // Create back wall shelf bars for visual support
  for (let r = 0; r < 3; r++) {
    const bar = document.createElement('a-box');
    bar.setAttribute('position', `0 ${0.12 + r * 0.85} -9.88`);
    bar.setAttribute('width', '28.5');
    bar.setAttribute('height', '0.04');
    bar.setAttribute('depth', '0.08');
    bar.setAttribute('material', 'color: #3a2515; roughness: 0.9; shader: standard');
    scene.appendChild(bar);
  }

  // Place 3 rows of 42 columns = 126 movies on the back wall!
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 42; c++) {
      const index = (r * 42 + c) % allMovies.length;
      const movie = allMovies[index];
      const x = -13.0 + c * 0.63;
      const y = 0.55 + r * 0.85;
      createMoviePoster(scene, movie, x, y, z, rotY, 0.55, 0.72);
    }
  }
}

function createMoviePoster(scene, movie, x, y, z, rotY, w, h) {
  w = w || 0.55;
  h = h || 0.78;

  const entity = document.createElement('a-entity');
  entity.setAttribute('geometry', `primitive: plane; width: ${w}; height: ${h}`);
  entity.setAttribute('material', 'shader: flat; side: double; color: #222');
  entity.setAttribute('position', `${x} ${y} ${z}`);
  entity.setAttribute('rotation', `0 ${rotY} 0`);
  entity.classList.add('clickable');

  // Generate poster texture
  const canvas = generatePosterTexture(movie);
  pendingPosters.push({ entity, canvas });

  // Click → IMDB
  entity.addEventListener('click', () => {
    window.open(movie.imdb, '_blank');
  });

  // Hover effects
  entity.addEventListener('mouseenter', () => {
    entity.setAttribute('scale', '1.12 1.12 1.12');
    document.getElementById('crosshair').classList.add('active');
    showTooltip(movie.title, movie.year, movie.rating);
  });

  entity.addEventListener('mouseleave', () => {
    entity.setAttribute('scale', '1 1 1');
    document.getElementById('crosshair').classList.remove('active');
    hideTooltip();
  });

  scene.appendChild(entity);
  return entity;
}

function createSign(scene, text, position, rotation) {
  const entity = document.createElement('a-entity');
  entity.setAttribute('position', position);
  if (rotation) entity.setAttribute('rotation', rotation);

  const plane = document.createElement('a-plane');
  plane.setAttribute('width', '2.8');
  plane.setAttribute('height', '0.6');
  plane.setAttribute('material', 'shader: flat; side: double; color: #222');
  entity.appendChild(plane);

  // Generate sign texture
  const canvas = generateSignTexture(text);
  pendingPosters.push({ entity: plane, canvas });

  scene.appendChild(entity);
}

/** Apply all generated canvas textures to their entities */
function applyPendingTextures() {
  pendingPosters.forEach(({ entity, canvas }) => {
    const mesh = entity.getObject3D('mesh');
    if (mesh) {
      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      mesh.material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      mesh.material.needsUpdate = true;
    }
  });
  // Clear after applying
  pendingPosters.length = 0;
}

// ===== UI FUNCTIONS =====

function showTooltip(title, year, rating) {
  const tooltip = document.getElementById('movie-tooltip');
  document.getElementById('tooltip-title').textContent = title;
  document.getElementById('tooltip-info').textContent = `${year}  ·  ★ ${rating}`;
  tooltip.classList.remove('hidden');
}

function hideTooltip() {
  document.getElementById('movie-tooltip').classList.add('hidden');
}

function hideLoadingScreen() {
  const ls = document.getElementById('loading-screen');
  ls.classList.add('fade-out');
  // Show instructions overlay
  setTimeout(() => {
    document.getElementById('overlay').classList.remove('hidden');
  }, 800);
}

function hideOverlay() {
  document.getElementById('overlay').classList.add('hidden');
}

// ===== POINTER LOCK & CROSSHAIR =====

function initPointerLock() {
  const overlay = document.getElementById('overlay');
  const crosshair = document.getElementById('crosshair');

  // Clicking overlay hides it and lets A-Frame capture pointer
  overlay.addEventListener('click', () => {
    hideOverlay();
  });

  // Show/hide crosshair based on pointer lock state
  document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement) {
      crosshair.classList.remove('hidden');
    } else {
      crosshair.classList.add('hidden');
      crosshair.classList.remove('active');
      hideTooltip();
    }
  });
}

// ===== CUSTOM A-FRAME COMPONENTS =====

AFRAME.registerComponent('boundary-check', {
  tick: function () {
    var pos = this.el.getAttribute('position');
    var minX = -13.8;
    var maxX = 13.8;
    var minZ = -8.8;
    var maxZ = 8.8;
    var changed = false;

    if (pos.x < minX) { pos.x = minX; changed = true; }
    if (pos.x > maxX) { pos.x = maxX; changed = true; }
    if (pos.z < minZ) { pos.z = minZ; changed = true; }
    if (pos.z > maxZ) { pos.z = maxZ; changed = true; }

    if (changed) {
      this.el.setAttribute('position', pos);
    }
  }
});

// ===== INIT =====

document.addEventListener('DOMContentLoaded', () => {
  const scene = document.querySelector('a-scene');

  scene.addEventListener('loaded', () => {
    buildStore();

    // Allow textures to settle, then hide loading screen
    setTimeout(() => {
      hideLoadingScreen();
    }, 1800);
  });

  initPointerLock();
});
