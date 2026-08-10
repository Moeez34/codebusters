/* ================================================
   BLOCKBUSTER 3D VR STORE — Application Logic
   ================================================ */

// ===== MOVIE DATA (60 movies, 5 genres with poster images) =====
const movieData = {
  comedy: [
    {
      title: "The Hangover",
      year: 2009,
      rating: 7.7,
      imdb: "https://www.imdb.com/title/tt1119646/",
      colors: [
        "#667eea",
        "#764ba2"
      ],
      poster: "https://images.justwatch.com/poster/285598209/s332/the-hangover.jpg"
    },
    {
      title: "Superbad",
      year: 2007,
      rating: 7.6,
      imdb: "https://www.imdb.com/title/tt0829482/",
      colors: [
        "#f093fb",
        "#f5576c"
      ],
      poster: "https://images.justwatch.com/poster/195865316/s332/superbad.jpg"
    },
    {
      title: "Bridesmaids",
      year: 2011,
      rating: 6.8,
      imdb: "https://www.imdb.com/title/tt1478338/",
      colors: [
        "#fa709a",
        "#fee140"
      ],
      poster: "https://images.justwatch.com/poster/301539331/s332/bridesmaids.jpg"
    },
    {
      title: "Step Brothers",
      year: 2008,
      rating: 6.9,
      imdb: "https://www.imdb.com/title/tt0838283/",
      colors: [
        "#a18cd1",
        "#fbc2eb"
      ],
      poster: "https://images.justwatch.com/poster/297627242/s332/step-brothers.jpg"
    },
    {
      title: "Mean Girls",
      year: 2004,
      rating: 7.1,
      imdb: "https://www.imdb.com/title/tt0377092/",
      colors: [
        "#ff758c",
        "#ff7eb3"
      ],
      poster: "https://images.justwatch.com/poster/252834940/s332/mean-girls.jpg"
    },
    {
      title: "Dumb & Dumber",
      year: 1994,
      rating: 7.3,
      imdb: "https://www.imdb.com/title/tt0109686/",
      colors: [
        "#f6d365",
        "#fda085"
      ],
      poster: "https://images.justwatch.com/poster/20464003/s332/dumb-and-dumber.jpg"
    },
    {
      title: "Anchorman",
      year: 2004,
      rating: 7.2,
      imdb: "https://www.imdb.com/title/tt0357413/",
      colors: [
        "#ffecd2",
        "#fcb69f"
      ],
      poster: "https://images.justwatch.com/poster/180599159/s332/anchorman-the-legend-of-ron-burgundy.jpg"
    },
    {
      title: "Napoleon Dynamite",
      year: 2004,
      rating: 6.9,
      imdb: "https://www.imdb.com/title/tt0374900/",
      colors: [
        "#a1c4fd",
        "#c2e9fb"
      ],
      poster: "https://images.justwatch.com/poster/11012718/s332/napoleon-dynamite.jpg"
    },
    {
      title: "Grand Budapest Hotel",
      year: 2014,
      rating: 8.1,
      imdb: "https://www.imdb.com/title/tt2278388/",
      colors: [
        "#d4fc79",
        "#96e6a1"
      ],
      poster: "https://images.justwatch.com/poster/131734409/s332/the-grand-budapest-hotel.jpg"
    },
    {
      title: "Borat",
      year: 2006,
      rating: 7.4,
      imdb: "https://www.imdb.com/title/tt0443453/",
      colors: [
        "#84fab0",
        "#8fd3f4"
      ],
      poster: "https://images.justwatch.com/poster/294848441/s332/borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan.jpg"
    },
    {
      title: "Shaun of the Dead",
      year: 2004,
      rating: 7.9,
      imdb: "https://www.imdb.com/title/tt0365748/",
      colors: [
        "#c471f5",
        "#fa71cd"
      ],
      poster: "https://images.justwatch.com/poster/90411252/s332/shaun-of-the-dead.jpg"
    },
    {
      title: "Tropic Thunder",
      year: 2008,
      rating: 7.1,
      imdb: "https://www.imdb.com/title/tt0942385/",
      colors: [
        "#f5576c",
        "#ff9966"
      ],
      poster: "https://images.justwatch.com/poster/181550759/s332/tropic-thunder.jpg"
    }
  ],
  action: [
    {
      title: "Mad Max: Fury Road",
      year: 2015,
      rating: 8.1,
      imdb: "https://www.imdb.com/title/tt1392190/",
      colors: [
        "#f12711",
        "#f5af19"
      ],
      poster: "https://images.justwatch.com/poster/8716732/s332/mad-max-fury-road.jpg"
    },
    {
      title: "John Wick",
      year: 2014,
      rating: 7.4,
      imdb: "https://www.imdb.com/title/tt2911666/",
      colors: [
        "#232526",
        "#414345"
      ],
      poster: "https://images.justwatch.com/poster/61511363/s332/john-wick.jpg"
    },
    {
      title: "The Dark Knight",
      year: 2008,
      rating: 9,
      imdb: "https://www.imdb.com/title/tt0468569/",
      colors: [
        "#141E30",
        "#243B55"
      ],
      poster: "https://images.justwatch.com/poster/116082563/s332/the-dark-knight.jpg"
    },
    {
      title: "Die Hard",
      year: 1988,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt0095016/",
      colors: [
        "#c31432",
        "#240b36"
      ],
      poster: "https://images.justwatch.com/poster/311306044/s332/die-hard.jpg"
    },
    {
      title: "Gladiator",
      year: 2000,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt0172495/",
      colors: [
        "#3a1c71",
        "#d76d77"
      ],
      poster: "https://images.justwatch.com/poster/344681902/s332/gladiator.jpg"
    },
    {
      title: "Top Gun: Maverick",
      year: 2022,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt1745960/",
      colors: [
        "#1a2a6c",
        "#fdbb2d"
      ],
      poster: "https://images.justwatch.com/poster/331624779/s332/top-gun-maverick.jpg"
    },
    {
      title: "Mission Impossible",
      year: 2018,
      rating: 7.7,
      imdb: "https://www.imdb.com/title/tt4912910/",
      colors: [
        "#0f0c29",
        "#302b63"
      ],
      poster: "https://images.justwatch.com/poster/65973274/s332/mission-impossible.jpg"
    },
    {
      title: "Kill Bill Vol.1",
      year: 2003,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt0266697/",
      colors: [
        "#eb3349",
        "#f45c43"
      ],
      poster: "https://images.justwatch.com/poster/56448079/s332/kill-bill-vol-1.jpg"
    },
    {
      title: "The Raid",
      year: 2011,
      rating: 7.6,
      imdb: "https://www.imdb.com/title/tt1899353/",
      colors: [
        "#1d4350",
        "#a43931"
      ],
      poster: "https://images.justwatch.com/poster/179878732/s332/the-raid.jpg"
    },
    {
      title: "300",
      year: 2006,
      rating: 7.6,
      imdb: "https://www.imdb.com/title/tt0416449/",
      colors: [
        "#870000",
        "#190a05"
      ],
      poster: "https://images.justwatch.com/poster/182872015/s332/300.jpg"
    },
    {
      title: "Logan",
      year: 2017,
      rating: 8.1,
      imdb: "https://www.imdb.com/title/tt3315342/",
      colors: [
        "#283048",
        "#859398"
      ],
      poster: "https://images.justwatch.com/poster/76832017/s332/logan.jpg"
    },
    {
      title: "Fury",
      year: 2014,
      rating: 7.6,
      imdb: "https://www.imdb.com/title/tt2713180/",
      colors: [
        "#414d0b",
        "#727a17"
      ],
      poster: "https://images.justwatch.com/poster/8704796/s332/fury.jpg"
    }
  ],
  scifi: [
    {
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      imdb: "https://www.imdb.com/title/tt0816692/",
      colors: [
        "#0f2027",
        "#2c5364"
      ],
      poster: "https://images.justwatch.com/poster/449990/s332/interstellar.jpg"
    },
    {
      title: "Blade Runner 2049",
      year: 2017,
      rating: 8,
      imdb: "https://www.imdb.com/title/tt1856101/",
      colors: [
        "#fc4a1a",
        "#f7b733"
      ],
      poster: "https://images.justwatch.com/poster/24702418/s332/blade-runner-2049.jpg"
    },
    {
      title: "The Matrix",
      year: 1999,
      rating: 8.7,
      imdb: "https://www.imdb.com/title/tt0133093/",
      colors: [
        "#000000",
        "#0f9b0f"
      ],
      poster: "https://images.justwatch.com/poster/126401284/s332/the-matrix.jpg"
    },
    {
      title: "Inception",
      year: 2010,
      rating: 8.8,
      imdb: "https://www.imdb.com/title/tt1375666/",
      colors: [
        "#0f0c29",
        "#24243e"
      ],
      poster: "https://images.justwatch.com/poster/302449148/s332/inception.jpg"
    },
    {
      title: "Dune",
      year: 2021,
      rating: 8,
      imdb: "https://www.imdb.com/title/tt1160419/",
      colors: [
        "#c2935e",
        "#8b6f47"
      ],
      poster: "https://images.justwatch.com/poster/249473713/s332/dune-2021.jpg"
    },
    {
      title: "Alien",
      year: 1979,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt0078748/",
      colors: [
        "#0c0c1d",
        "#0f4c75"
      ],
      poster: "https://images.justwatch.com/poster/8543836/s332/alien.jpg"
    },
    {
      title: "Terminator 2",
      year: 1991,
      rating: 8.6,
      imdb: "https://www.imdb.com/title/tt0103064/",
      colors: [
        "#4b6cb7",
        "#182848"
      ],
      poster: "https://images.justwatch.com/poster/301019966/s332/terminator-2-judgment-day.jpg"
    },
    {
      title: "Arrival",
      year: 2016,
      rating: 7.9,
      imdb: "https://www.imdb.com/title/tt2543164/",
      colors: [
        "#1f1c2c",
        "#928DAB"
      ],
      poster: "https://images.justwatch.com/poster/8709099/s332/arrival.jpg"
    },
    {
      title: "Ex Machina",
      year: 2014,
      rating: 7.7,
      imdb: "https://www.imdb.com/title/tt0470752/",
      colors: [
        "#0a0e14",
        "#3a7bd5"
      ],
      poster: "https://images.justwatch.com/poster/183412567/s332/ex-machina.jpg"
    },
    {
      title: "The Martian",
      year: 2015,
      rating: 8,
      imdb: "https://www.imdb.com/title/tt3659388/",
      colors: [
        "#c0392b",
        "#8e44ad"
      ],
      poster: "https://images.justwatch.com/poster/344669530/s332/the-martian.jpg"
    },
    {
      title: "Edge of Tomorrow",
      year: 2014,
      rating: 7.9,
      imdb: "https://www.imdb.com/title/tt1631867/",
      colors: [
        "#2c3e50",
        "#3498db"
      ],
      poster: "https://images.justwatch.com/poster/302993962/s332/edge-of-tomorrow.jpg"
    },
    {
      title: "Gravity",
      year: 2013,
      rating: 7.7,
      imdb: "https://www.imdb.com/title/tt1454468/",
      colors: [
        "#0c0c1d",
        "#344955"
      ],
      poster: "https://images.justwatch.com/poster/241479855/s332/gravity.jpg"
    }
  ],
  drama: [
    {
      title: "Shawshank Redemption",
      year: 1994,
      rating: 9.3,
      imdb: "https://www.imdb.com/title/tt0111161/",
      colors: [
        "#2c3e50",
        "#4a6274"
      ],
      poster: "https://images.justwatch.com/poster/309786652/s332/the-shawshank-redemption.jpg"
    },
    {
      title: "Forrest Gump",
      year: 1994,
      rating: 8.8,
      imdb: "https://www.imdb.com/title/tt0109830/",
      colors: [
        "#3E5151",
        "#DECBA4"
      ],
      poster: "https://images.justwatch.com/poster/109577912/s332/forrest-gump.jpg"
    },
    {
      title: "Fight Club",
      year: 1999,
      rating: 8.8,
      imdb: "https://www.imdb.com/title/tt0137523/",
      colors: [
        "#200122",
        "#6f0000"
      ],
      poster: "https://images.justwatch.com/poster/210852313/s332/fight-club.jpg"
    },
    {
      title: "The Godfather",
      year: 1972,
      rating: 9.2,
      imdb: "https://www.imdb.com/title/tt0068646/",
      colors: [
        "#0f0c0c",
        "#302b2b"
      ],
      poster: "https://images.justwatch.com/poster/202440770/s332/the-godfather.jpg"
    },
    {
      title: "Pulp Fiction",
      year: 1994,
      rating: 8.9,
      imdb: "https://www.imdb.com/title/tt0110912/",
      colors: [
        "#eecda3",
        "#ef629f"
      ],
      poster: "https://images.justwatch.com/poster/301999989/s332/pulp-fiction.jpg"
    },
    {
      title: "Schindler's List",
      year: 1993,
      rating: 9,
      imdb: "https://www.imdb.com/title/tt0108052/",
      colors: [
        "#141517",
        "#2c3e50"
      ],
      poster: "https://images.justwatch.com/poster/169344232/s332/schindlers-list.jpg"
    },
    {
      title: "Whiplash",
      year: 2014,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt2582802/",
      colors: [
        "#eb5757",
        "#000000"
      ],
      poster: "https://images.justwatch.com/poster/268498981/s332/whiplash.jpg"
    },
    {
      title: "Parasite",
      year: 2019,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt6751668/",
      colors: [
        "#0a504a",
        "#38ef7d"
      ],
      poster: "https://images.justwatch.com/poster/130011621/s332/parasite.jpg"
    },
    {
      title: "The Prestige",
      year: 2006,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt0482571/",
      colors: [
        "#355c7d",
        "#6c5b7b"
      ],
      poster: "https://images.justwatch.com/poster/55085098/s332/the-prestige.jpg"
    },
    {
      title: "Good Will Hunting",
      year: 1997,
      rating: 8.3,
      imdb: "https://www.imdb.com/title/tt0119217/",
      colors: [
        "#4568dc",
        "#b06ab3"
      ],
      poster: "https://images.justwatch.com/poster/214706751/s332/good-will-hunting.jpg"
    },
    {
      title: "A Beautiful Mind",
      year: 2001,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt0268978/",
      colors: [
        "#0f2027",
        "#203a43"
      ],
      poster: "https://images.justwatch.com/poster/208348730/s332/a-beautiful-mind.jpg"
    },
    {
      title: "The Green Mile",
      year: 1999,
      rating: 8.6,
      imdb: "https://www.imdb.com/title/tt0120689/",
      colors: [
        "#2c3e50",
        "#4ca1af"
      ],
      poster: "https://images.justwatch.com/poster/102622497/s332/the-green-mile.jpg"
    }
  ],
  family: [
    {
      title: "Toy Story",
      year: 1995,
      rating: 8.3,
      imdb: "https://www.imdb.com/title/tt0114709/",
      colors: [
        "#00b4db",
        "#0083b0"
      ],
      poster: "https://images.justwatch.com/poster/76796933/s332/toy-story.jpg"
    },
    {
      title: "Finding Nemo",
      year: 2003,
      rating: 8.2,
      imdb: "https://www.imdb.com/title/tt0266543/",
      colors: [
        "#56ab2f",
        "#a8e063"
      ],
      poster: "https://images.justwatch.com/poster/29014421/s332/finding-nemo.jpg"
    },
    {
      title: "The Incredibles",
      year: 2004,
      rating: 8,
      imdb: "https://www.imdb.com/title/tt0317705/",
      colors: [
        "#ff416c",
        "#ff4b2b"
      ],
      poster: "https://images.justwatch.com/poster/67664646/s332/the-incredibles.jpg"
    },
    {
      title: "Up",
      year: 2009,
      rating: 8.3,
      imdb: "https://www.imdb.com/title/tt1049413/",
      colors: [
        "#11998e",
        "#38ef7d"
      ],
      poster: "https://images.justwatch.com/poster/302310503/s332/up.jpg"
    },
    {
      title: "Shrek",
      year: 2001,
      rating: 7.9,
      imdb: "https://www.imdb.com/title/tt0126029/",
      colors: [
        "#a8ff78",
        "#78ffd6"
      ],
      poster: "https://images.justwatch.com/poster/65667949/s332/shrek.jpg"
    },
    {
      title: "Frozen",
      year: 2013,
      rating: 7.4,
      imdb: "https://www.imdb.com/title/tt2294629/",
      colors: [
        "#2193b0",
        "#6dd5ed"
      ],
      poster: "https://images.justwatch.com/poster/285416360/s332/frozen.jpg"
    },
    {
      title: "The Lion King",
      year: 1994,
      rating: 8.5,
      imdb: "https://www.imdb.com/title/tt0110357/",
      colors: [
        "#f7971e",
        "#ffd200"
      ],
      poster: "https://images.justwatch.com/poster/344629567/s332/the-lion-king.jpg"
    },
    {
      title: "Coco",
      year: 2017,
      rating: 8.4,
      imdb: "https://www.imdb.com/title/tt2380307/",
      colors: [
        "#e44d26",
        "#f16529"
      ],
      poster: "https://images.justwatch.com/poster/35315559/s332/coco.jpg"
    },
    {
      title: "Moana",
      year: 2016,
      rating: 7.6,
      imdb: "https://www.imdb.com/title/tt3521164/",
      colors: [
        "#667db6",
        "#0082c8"
      ],
      poster: "https://images.justwatch.com/poster/343683458/s332/moana-2025.jpg"
    },
    {
      title: "Ratatouille",
      year: 2007,
      rating: 8.1,
      imdb: "https://www.imdb.com/title/tt0382932/",
      colors: [
        "#f953c6",
        "#b91d73"
      ],
      poster: "https://images.justwatch.com/poster/151544381/s332/ratatouille.jpg"
    },
    {
      title: "WALL-E",
      year: 2008,
      rating: 8.4,
      imdb: "https://www.imdb.com/title/tt0910970/",
      colors: [
        "#1488cc",
        "#2b32b2"
      ],
      poster: "https://images.justwatch.com/poster/222296424/s332/wall-e.jpg"
    },
    {
      title: "Monsters Inc",
      year: 2001,
      rating: 8.1,
      imdb: "https://www.imdb.com/title/tt0198781/",
      colors: [
        "#43cea2",
        "#185a9d"
      ],
      poster: "https://images.justwatch.com/poster/200836345/s332/monsters-inc.jpg"
    }
  ]
};

// ===== MOVIE SYNOPSES FOR RETRO BACK COVERS =====
const movieSynopses = {
  // Comedy
  "The Hangover": "Three buddies wake up from a wild bachelor party in Las Vegas with no memory of the previous night and the groom missing. They must retrace their steps through the city to find him before the wedding.",
  "Superbad": "Two co-dependent high school seniors are forced to deal with separation anxiety after their elaborate plan to secure alcohol for a major house party goes hilariously awry.",
  "Bridesmaids": "Competition between the maid of honor and a wealthy bridesmaid over who is the bride's true best friend threatens to completely upend the chaotic life of a struggling pastry chef.",
  "Step Brothers": "Two middle-aged, spoiled, unemployed men still living with their respective parents are forced to become roommates when their parents marry, triggering an escalating war of childish pranks.",
  "Mean Girls": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastique Regina George.",
  "Dumb & Dumber": "After a woman leaves a briefcase at the airport terminal, two extremely dim-witted friends embark on an cross-country road trip to Aspen to return it, unaware it contains ransom money.",
  "Anchorman": "Ron Burgundy is San Diego's top-rated news anchorman in the male-dominated 1970s broadcast world, but his position is threatened when an ambitious newswoman is hired as co-anchor.",
  "Napoleon Dynamite": "A listless and alienated teenager in Idaho decides to help his eccentric new friend Pedro win the class presidency, while navigating his bizarre family life at home.",
  "Grand Budapest Hotel": "A writer relates his adventures at a renowned European resort hotel between the wars, featuring a legendary concierge falsely accused of murder and his loyal lobby boy.",
  "Borat": "Kazakh TV talking head Borat Sagdiyev travels to the United States to report on the 'Greatest Country in the World' in this satirical mockumentary of cultural clashes.",
  "Shaun of the Dead": "A man's uneventful life is disrupted when he has to single-handedly deal with his girlfriend, his mother, and an entire community of local residents who have turned into flesh-eating zombies.",
  "Tropic Thunder": "While shooting a big-budget war movie, a crew of self-absorbed actors are dropped into the middle of a real jungle combat zone and forced to become the soldiers they are playing.",

  // Action
  "Mad Max: Fury Road": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
  "John Wick": "An ex-hitman comes out of retirement to track down the gangsters that killed his dog, a final gift from his recently deceased wife, embarking on a ruthless, action-packed revenge mission.",
  "The Dark Knight": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
  "Die Hard": "An NYPD officer tries to save his estranged wife and several others taken hostage by a band of highly trained German terrorists during a Christmas Eve party at Nakatomi Plaza.",
  "Gladiator": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery, rising through the ranks of the gladiator arena.",
  "Top Gun: Maverick": "After thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is tasked with training a detachment of graduates for a dangerous and specialized mission.",
  "Mission Impossible": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: to track down a rogue organization planning to trigger a global catastrophe using stolen nuclear cores.",
  "Kill Bill Vol.1": "After awakening from a four-year coma, a former assassin seeks vengeance against the team of killers who betrayed her, led by her former master, Bill.",
  "The Raid": "A SWAT team becomes trapped in a high-rise tenement block run by a ruthless drug lord and his army of killers, forcing them to fight their way up floor-by-floor using hand-to-hand combat.",
  "300": "King Leonidas of Sparta and a force of 300 men fight to the death against the Persian King Xerxes and his massive invading army of over 300,000 soldiers at the Battle of Thermopylae.",
  "Logan": "In a future where mutants are nearly extinct, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border, until a young mutant chased by dark forces arrives.",
  "Fury": "A battle-hardened army sergeant commands a Sherman tank and its five-man crew on a deadly mission behind enemy lines in Nazi Germany during the final weeks of World War II.",

  // Sci-Fi
  "Interstellar": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival on a dying Earth, navigating extreme time dilation and cosmic mysteries.",
  "Blade Runner 2049": "A new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what is left of society into chaos, leading him to track down Rick Deckard.",
  "The Matrix": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its war-like controllers in this cyberpunk masterpiece.",
  "Inception": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., navigating layers of subconscious.",
  "Dune": "Paul Atreides, a brilliant and gifted young man born into a great destiny, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
  "Alien": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating a mysterious transmission from an undeveloped planet, fighting to survive a claustrophobic nightmare.",
  "Terminator 2": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her young son John from a more advanced and devastating shape-shifting terminator.",
  "Arrival": "A linguist is recruited by the military to assist in translating communications with sentient extraterrestrial lifeforms after twelve mysterious spacecraft touch down around the globe.",
  "Ex Machina": "A programmer at a huge internet-search giant wins a competition to spend a week at the private mountain estate of the company's brilliant CEO, only to administer a Turing test on an A.I.",
  "The Martian": "An astronaut becomes stranded on Mars after his crew mates presume him dead, and must rely on his scientific ingenuity to find a way to signal Earth and survive.",
  "Edge of Tomorrow": "A soldier fighting aliens finds himself caught in a time loop, waking up on the same battlefield every time he dies, teaming up with a legendary warrior to find a way to win.",
  "Gravity": "Two astronauts work together to survive after an accident leaves them stranded in deep orbit with no connection to Earth and a rapidly depleting oxygen supply.",

  // Drama
  "Shawshank Redemption": "Over the course of several years, two convicts form a deep friendship, seeking consolation and, eventually, redemption through basic compassion inside a brutal state prison.",
  "Forrest Gump": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
  "Fight Club": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more dangerous and revolutionary.",
  "The Godfather": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son, Michael, in this legendary crime saga.",
  "Pulp Fiction": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence, redemption, and dark comedy.",
  "Schindler's List": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  "Whiplash": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
  "Parasite": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan, culminating in a shocking confrontation.",
  "The Prestige": "After a tragic accident, two stage magicians in 19th-century London engage in a battle of one-upmanship to create the ultimate illusion, sacrificing everything they hold dear.",
  "Good Will Hunting": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist in order to find direction in his life and face his childhood trauma.",
  "A Beautiful Mind": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish as he battles severe schizophrenia.",
  "The Green Mile": "The lives of guards on death row are affected by one of their charges: a black man accused of child murder and rape, who possesses a mysterious, miraculous healing gift.",

  // Family
  "Toy Story": "A cowboy toy is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's bedroom, embarking on an adventure to find their way home.",
  "Finding Nemo": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish embarks on a dangerous journey across the ocean to bring him home.",
  "The Incredibles": "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world from a vengeful former fan.",
  "Up": "Seventy-eight-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with thousands of balloons, accidentally taking a young Wilderness Explorer along for the ride.",
  "Shrek": "An ogre finds his swamp invaded by fairytale creatures banished by Lord Farquaad. To get his swamp back, he agrees to rescue a princess who harbors a dark secret.",
  "Frozen": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to condemn her home to infinite winter, her sister Anna teams up to save their kingdom.",
  "The Lion King": "A young lion prince, Simba, flees his kingdom after his father is murdered by his uncle, only to learn the true meaning of responsibility and valor when he returns.",
  "Coco": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
  "Moana": "In Ancient Polynesia, when a terrible curse reaches Moana's island, she answers the Ocean's call to seek out the Demigod Maui to set things right and save her people.",
  "Ratatouille": "A young rat who dreams of becoming a renowned French chef allies with a clumsy kitchen boy at a famous Parisian restaurant to cook exquisite meals in secret.",
  "WALL-E": "In the distant future, a small waste-collecting robot embarked on a space journey that will ultimately decide the fate of mankind after meeting a sleek probe named EVE.",
  "Monsters Inc": "In order to power the city, monsters must scream-collect children. But when a small girl accidentally enters their world, two friendly monsters must hide her from authorities."
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
      const index = (c + r * 5) % movies.length;
      const movie = movies[index];
      const pz = aisleZ - aisleLen / 2 + 0.6 + c * 0.64;
      const py = 0.38 + r * 0.55;
      createMoviePoster(scene, movie, x - 0.12, py, pz, -90, 0.48, 0.52);
    }
  }

  // Movies on right side (facing +x, rotation 0 90 0) - Densely packed: 4 rows of 12 columns = 48 movies!
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 12; c++) {
      const index = (c + r * 5) % movies.length;
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
      const index = (c + r * 5) % movies.length;
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
      const index = (c + r * 11) % allMovies.length;
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

  // Use a reliable, fast, open-source CORS image proxy that works on Vercel
  const proxiedPoster = `https://images.weserv.nl/?url=${encodeURIComponent(movie.poster)}`;

  const entity = document.createElement('a-entity');
  entity.setAttribute('geometry', `primitive: plane; width: ${w}; height: ${h}`);
  entity.setAttribute('material', `src: ${proxiedPoster}; shader: flat; side: double; roughness: 0.95`);
  entity.setAttribute('position', `${x} ${y} ${z}`);
  entity.setAttribute('rotation', `0 ${rotY} 0`);
  entity.classList.add('clickable');

  // Click → Inspect Movie
  entity.addEventListener('click', () => {
    startInspection(movie, entity);
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

// ===== MOBILE: STEP DETECTION COMPONENT =====

AFRAME.registerComponent('step-movement', {
  schema: {
    stepSize: { type: 'number', default: 0.6 },
    threshold: { type: 'number', default: 1.5 },
    cooldown: { type: 'number', default: 350 },
    enabled: { type: 'boolean', default: false }
  },

  init: function () {
    this.lastStepTime = 0;
    this.rising = false;
    this.motionEnabled = false;
    this.smoothedMag = 0;
    this.stepCount = 0;
    this.lastDebugUpdate = 0;

    // Tilt-to-walk state
    this.tiltBeta = 0;       // phone tilt angle (forward/back)
    this.tiltGamma = 0;      // phone tilt angle (left/right)
    this.orientationEnabled = false;

    // Joystick state
    this.joystickActive = false;
    this.joystickX = 0;
    this.joystickY = 0;

    // D-pad state
    this.dpadX = 0;
    this.dpadY = 0;

    // Bind handlers
    this._onDeviceMotion = this._onDeviceMotion.bind(this);
    this._onDeviceOrientation = this._onDeviceOrientation.bind(this);
  },

  enableMotion: function () {
    if (this.motionEnabled) return;
    this.motionEnabled = true;
    this.data.enabled = true;

    // Listen for acceleration (step detection)
    window.addEventListener('devicemotion', this._onDeviceMotion, true);

    // Listen for orientation (tilt-to-walk)
    window.addEventListener('deviceorientation', this._onDeviceOrientation, true);
    this.orientationEnabled = true;

    // Update debug indicator
    this._updateDebug('Motion: ON | Waiting...', true);
    console.log('[StepMovement] Walking + tilt detection ENABLED');
  },

  disableMotion: function () {
    this.motionEnabled = false;
    this.data.enabled = false;
    window.removeEventListener('devicemotion', this._onDeviceMotion, true);
    window.removeEventListener('deviceorientation', this._onDeviceOrientation, true);
    this.orientationEnabled = false;
  },

  _updateDebug: function (text, isActive) {
    var debugEl = document.getElementById('mobile-debug');
    var statusEl = document.getElementById('debug-status');
    if (!debugEl || !statusEl) return;
    statusEl.textContent = text;
    if (isActive) {
      debugEl.classList.add('active');
    } else {
      debugEl.classList.remove('active');
    }
  },

  _onDeviceOrientation: function (event) {
    // beta = front-back tilt (0 = flat, 90 = upright, >90 = tilted towards user)
    // gamma = left-right tilt
    if (event.beta !== null) {
      this.tiltBeta = event.beta;
    }
    if (event.gamma !== null) {
      this.tiltGamma = event.gamma;
    }
  },

  _onDeviceMotion: function (event) {
    if (!this.data.enabled) return;

    // Prefer acceleration (gravity removed) — gives clean motion data
    var useRaw = !event.acceleration || (event.acceleration.x === null);
    var acc = useRaw ? event.accelerationIncludingGravity : event.acceleration;
    if (!acc) return;

    var x = acc.x || 0;
    var y = acc.y || 0;
    var z = acc.z || 0;

    // Compute total acceleration magnitude (orientation-independent)
    var magnitude = Math.sqrt(x * x + y * y + z * z);

    // If using accelerationIncludingGravity, subtract gravity baseline
    if (useRaw) {
      magnitude = Math.abs(magnitude - 9.81);
    }

    // Low-pass smoothing
    this.smoothedMag = this.smoothedMag * 0.6 + magnitude * 0.4;

    var now = Date.now();

    // Update debug indicator every 200ms
    if (now - this.lastDebugUpdate > 200) {
      this.lastDebugUpdate = now;
      var src = useRaw ? 'RAW' : 'PURE';
      this._updateDebug(
        src + ' | Mag: ' + this.smoothedMag.toFixed(1) + ' | Steps: ' + this.stepCount,
        true
      );
    }

    // Peak detection
    if (!this.rising && this.smoothedMag > this.data.threshold) {
      this.rising = true;
    }

    if (this.rising && this.smoothedMag < this.data.threshold * 0.4) {
      this.rising = false;

      if (now - this.lastStepTime > this.data.cooldown) {
        this.lastStepTime = now;
        this.stepCount++;
        this._moveForward(this.data.stepSize);
      }
    }
  },

  _moveForward: function (distance) {
    var rig = this.el;
    var camera = document.getElementById('camera');
    if (!camera) return;

    var direction = new THREE.Vector3(0, 0, -1);
    camera.object3D.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();

    var pos = rig.getAttribute('position');
    pos.x += direction.x * distance;
    pos.z += direction.z * distance;
    rig.setAttribute('position', pos);
  },

  tick: function (time, delta) {
    if (this.isInspecting) return;
    if (!delta) return;
    var dt = delta / 1000;
    var camera = document.getElementById('camera');
    if (!camera) return;

    var pos = this.el.getAttribute('position');
    var moved = false;

    // === TILT-TO-WALK ===
    // When phone is held upright (~60-90° beta) and tilted forward past 70°, walk forward
    // When tilted past 110°, walk backward
    // Tilt left/right (gamma) to strafe
    if (this.orientationEnabled && !this.joystickActive) {
      var beta = this.tiltBeta;
      var gamma = this.tiltGamma;

      // Forward/back: beta ~90 = upright. <70 = tilted forward, >110 = tilted back
      var forwardTilt = 0;
      if (beta < 65) {
        forwardTilt = (65 - beta) / 40;    // tilted forward → positive = walk forward
        forwardTilt = Math.min(forwardTilt, 1.0);
      } else if (beta > 115) {
        forwardTilt = (115 - beta) / 40;   // tilted back → negative = walk backward
        forwardTilt = Math.max(forwardTilt, -1.0);
      }

      // Strafe: gamma tilt
      var strafeTilt = 0;
      if (Math.abs(gamma) > 15) {
        strafeTilt = gamma / 45;
        strafeTilt = Math.max(-1.0, Math.min(1.0, strafeTilt));
      }

      if (Math.abs(forwardTilt) > 0.05 || Math.abs(strafeTilt) > 0.05) {
        var speed = 3.5;

        var forward = new THREE.Vector3(0, 0, -1);
        camera.object3D.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();

        var right = new THREE.Vector3();
        right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

        pos.x += (forward.x * forwardTilt + right.x * strafeTilt) * speed * dt;
        pos.z += (forward.z * forwardTilt + right.z * strafeTilt) * speed * dt;
        moved = true;
      }
    }

    // === JOYSTICK ===
    if (this.joystickActive) {
      var speed = 4.0;

      var forward = new THREE.Vector3(0, 0, -1);
      camera.object3D.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();

      var right = new THREE.Vector3();
      right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

      var moveX = this.joystickX * speed * dt;
      var moveZ = -this.joystickY * speed * dt;

      pos.x += forward.x * moveZ + right.x * moveX;
      pos.z += forward.z * moveZ + right.z * moveX;
      moved = true;
    }

    // === DPAD ARROWS ===
    if (this.dpadX !== 0 || this.dpadY !== 0) {
      var speed = 4.0;

      var forward = new THREE.Vector3(0, 0, -1);
      camera.object3D.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();

      var right = new THREE.Vector3();
      right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

      var moveX = this.dpadX * speed * dt;
      var moveZ = -this.dpadY * speed * dt; // negative Y is forward

      pos.x += forward.x * moveZ + right.x * moveX;
      pos.z += forward.z * moveZ + right.z * moveX;
      moved = true;
    }

    if (moved) {
      this.el.setAttribute('position', pos);
    }
  },

  remove: function () {
    this.disableMotion();
  }
});

// ===== MOBILE: VIRTUAL JOYSTICK CONTROLLER =====

function initVirtualJoystick() {
  var joystickEl = document.getElementById('mobile-joystick');
  var baseEl = document.getElementById('joystick-base');
  var thumbEl = document.getElementById('joystick-thumb');
  if (!joystickEl || !baseEl || !thumbEl) return;

  var baseRect;
  var baseCenterX, baseCenterY;
  var maxRadius = 38;
  var activeTouchId = null;

  function updateBaseRect() {
    baseRect = baseEl.getBoundingClientRect();
    baseCenterX = baseRect.left + baseRect.width / 2;
    baseCenterY = baseRect.top + baseRect.height / 2;
  }

  function getStepComponent() {
    var rig = document.getElementById('rig');
    if (!rig) return null;
    return rig.components['step-movement'];
  }

  function resetThumb() {
    thumbEl.style.transform = 'translate(0px, 0px)';
    thumbEl.classList.remove('active');
    var comp = getStepComponent();
    if (comp) {
      comp.joystickActive = false;
      comp.joystickX = 0;
      comp.joystickY = 0;
    }
  }

  baseEl.addEventListener('touchstart', function (e) {
    e.preventDefault();
    e.stopPropagation();
    updateBaseRect();
    var touch = e.changedTouches[0];
    activeTouchId = touch.identifier;
    thumbEl.classList.add('active');
    handleMove(touch.clientX, touch.clientY);
  }, { passive: false });

  document.addEventListener('touchmove', function (e) {
    if (activeTouchId === null) return;
    for (var i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId) {
        e.preventDefault();
        handleMove(e.changedTouches[i].clientX, e.changedTouches[i].clientY);
        break;
      }
    }
  }, { passive: false });

  document.addEventListener('touchend', function (e) {
    if (activeTouchId === null) return;
    for (var i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId) {
        activeTouchId = null;
        resetThumb();
        break;
      }
    }
  });

  document.addEventListener('touchcancel', function () {
    activeTouchId = null;
    resetThumb();
  });

  function handleMove(clientX, clientY) {
    var dx = clientX - baseCenterX;
    var dy = clientY - baseCenterY;
    var dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > maxRadius) {
      dx = (dx / dist) * maxRadius;
      dy = (dy / dist) * maxRadius;
      dist = maxRadius;
    }

    thumbEl.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';

    var normX = dx / maxRadius;
    var normY = dy / maxRadius;

    var comp = getStepComponent();
    if (comp) {
      comp.joystickActive = true;
      comp.joystickX = normX;
      comp.joystickY = normY;
    }
  }
}

// ===== MOBILE: VIRTUAL D-PAD CONTROLLER =====

function initDpad() {
  var dpadEl = document.getElementById('mobile-dpad');
  if (!dpadEl) return;

  var btnUp = document.getElementById('dpad-up');
  var btnDown = document.getElementById('dpad-down');
  var btnLeft = document.getElementById('dpad-left');
  var btnRight = document.getElementById('dpad-right');

  function getStepComponent() {
    var rig = document.getElementById('rig');
    if (!rig) return null;
    return rig.components['step-movement'];
  }

  function setupDpadButton(btn, dx, dy) {
    if (!btn) return;

    function handlePress(e) {
      e.preventDefault();
      e.stopPropagation();
      var comp = getStepComponent();
      if (comp) {
        comp.dpadX = dx;
        comp.dpadY = dy;
      }
    }

    function handleRelease(e) {
      e.preventDefault();
      e.stopPropagation();
      var comp = getStepComponent();
      if (comp) {
        if (comp.dpadX === dx && comp.dpadY === dy) {
          comp.dpadX = 0;
          comp.dpadY = 0;
        }
      }
    }

    // Touch events for mobile
    btn.addEventListener('touchstart', handlePress, { passive: false });
    btn.addEventListener('touchend', handleRelease, { passive: false });
    btn.addEventListener('touchcancel', handleRelease, { passive: false });

    // Mouse events for testing on desktop
    btn.addEventListener('mousedown', handlePress);
    btn.addEventListener('mouseup', handleRelease);
    btn.addEventListener('mouseleave', handleRelease);
  }

  // Up: move forward (dx=0, dy=-1)
  setupDpadButton(btnUp, 0, -1);
  // Down: move backward (dx=0, dy=1)
  setupDpadButton(btnDown, 0, 1);
  // Left: strafe left (dx=-1, dy=0)
  setupDpadButton(btnLeft, -1, 0);
  // Right: strafe right (dx=1, dy=0)
  setupDpadButton(btnRight, 1, 0);
}

// ===== POINTER LOCK & CROSSHAIR =====

function initPointerLock() {
  const overlay = document.getElementById('overlay');
  const crosshair = document.getElementById('crosshair');

  // Clicking overlay hides it, captures pointer, AND enables walking on mobile
  overlay.addEventListener('click', () => {
    hideOverlay();

    // On mobile, request motion permission as part of this tap gesture (required by iOS)
    if (isMobileDevice()) {
      requestMotionAndEnableWalking();
    }
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

// ===== MOBILE DETECTION & AUTO-WALKING =====

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    ('ontouchstart' in window) ||
    (window.innerWidth <= 1024);
}

function requestMotionAndEnableWalking() {
  if (typeof DeviceMotionEvent !== 'undefined' &&
      typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+ requires explicit permission from a user gesture
    // Request both motion AND orientation permissions
    Promise.all([
      DeviceMotionEvent.requestPermission(),
      typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
        ? DeviceOrientationEvent.requestPermission()
        : Promise.resolve('granted')
    ])
      .then(function (results) {
        if (results[0] === 'granted') {
          enableStepDetection();
        } else {
          updateDebugStatus('Permission DENIED');
        }
      })
      .catch(function (err) {
        console.warn('Motion permission error:', err);
        updateDebugStatus('Permission ERROR: ' + err.message);
      });
  } else if ('DeviceMotionEvent' in window) {
    // Android / older iOS — no permission needed, just enable
    enableStepDetection();
  } else {
    updateDebugStatus('No motion API on this device');
  }
}

function updateDebugStatus(text) {
  var statusEl = document.getElementById('debug-status');
  if (statusEl) statusEl.textContent = text;
}

function enableStepDetection() {
  var rig = document.getElementById('rig');
  if (!rig) {
    updateDebugStatus('ERROR: rig not found');
    return;
  }
  var comp = rig.components['step-movement'];
  if (comp) {
    comp.enableMotion();
  } else {
    updateDebugStatus('ERROR: component not ready');
    // Retry after a short delay
    setTimeout(function () {
      var comp2 = rig.components['step-movement'];
      if (comp2) {
        comp2.enableMotion();
      } else {
        updateDebugStatus('ERROR: component failed to load');
      }
    }, 1000);
  }
}

function initMobileControls() {
  if (!isMobileDevice()) return;

  // Show the joystick (on bottom-left)
  var joystickEl = document.getElementById('mobile-joystick');
  if (joystickEl) joystickEl.classList.remove('hidden');

  // Show the D-pad (on bottom-right)
  var dpadEl = document.getElementById('mobile-dpad');
  if (dpadEl) dpadEl.classList.remove('hidden');

  // Keep debug indicator hidden to keep the screen clean
  var debugEl = document.getElementById('mobile-debug');
  if (debugEl) debugEl.classList.add('hidden');

  // Init controllers
  initVirtualJoystick();
  initDpad();

  // On Android, we can auto-enable step detection without a user gesture
  if (typeof DeviceMotionEvent !== 'undefined' &&
      typeof DeviceMotionEvent.requestPermission !== 'function') {
    // Not iOS — no permission needed, enable walking immediately
    var scene = document.querySelector('a-scene');
    if (scene) {
      if (scene.hasLoaded) {
        // Scene already loaded
        setTimeout(enableStepDetection, 500);
      } else {
        scene.addEventListener('loaded', function () {
          setTimeout(enableStepDetection, 500);
        });
      }
    }
  }
}

// ===== 3D DVD INSPECTION SYSTEM =====

let isInspecting = false;
let activeInspectMovie = null;
let originalClickedEntity = null;
let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };
let currentRotation = { x: 0, y: 0 };

function startInspection(movie, clickedEntity) {
  if (isInspecting) return;
  isInspecting = true;
  activeInspectMovie = movie;
  originalClickedEntity = clickedEntity;

  // Exit Pointer Lock so desktop users can click the HUD buttons and drag to rotate easily
  document.exitPointerLock();

  // Hide tooltips and pointer lock crosshair
  hideTooltip();
  document.getElementById('crosshair').classList.add('hidden');

  // Disable movement controls
  const rig = document.getElementById('rig');
  if (rig && rig.components['wasd-controls']) {
    rig.components['wasd-controls'].pause();
  }
  if (rig && rig.components['step-movement']) {
    rig.components['step-movement'].joystickActive = false;
    rig.components['step-movement'].dpadX = 0;
    rig.components['step-movement'].dpadY = 0;
    rig.components['step-movement'].isInspecting = true;
  }

  // Pause camera look-controls so camera orientation remains fixed
  const camera = document.getElementById('camera');
  if (camera && camera.components['look-controls']) {
    camera.components['look-controls'].pause();
  }

  // Generate dynamic retro back cover
  const backCanvas = generateDVDBackCover(movie);
  const canvasId = `canvas-back-${Date.now()}`;
  backCanvas.setAttribute('id', canvasId);
  backCanvas.style.display = 'none';
  document.body.appendChild(backCanvas);

  // Create Inspection 3D Box inside camera space
  const inspectBox = document.createElement('a-entity');
  inspectBox.setAttribute('id', 'inspection-box');
  inspectBox.setAttribute('position', '0 0 -2.5'); // Start further back for zoom-in animation
  inspectBox.setAttribute('rotation', '0 0 0'); // Start facing forward
  inspectBox.setAttribute('scale', '0.05 0.05 0.05'); // Start tiny

  // Case body (black plastic)
  const caseBody = document.createElement('a-box');
  caseBody.setAttribute('width', '0.32');
  caseBody.setAttribute('height', '0.45');
  caseBody.setAttribute('depth', '0.025');
  caseBody.setAttribute('material', 'color: #121214; roughness: 0.85; metalness: 0.1; shader: standard');
  inspectBox.appendChild(caseBody);

  // Front Cover
  const proxiedPoster = `https://images.weserv.nl/?url=${encodeURIComponent(movie.poster)}`;
  const frontCover = document.createElement('a-plane');
  frontCover.setAttribute('width', '0.316');
  frontCover.setAttribute('height', '0.446');
  frontCover.setAttribute('position', '0 0 0.013');
  frontCover.setAttribute('material', `src: ${proxiedPoster}; shader: flat; side: double; roughness: 0.95`);
  inspectBox.appendChild(frontCover);

  // Back Cover
  const backCover = document.createElement('a-plane');
  backCover.setAttribute('width', '0.316');
  backCover.setAttribute('height', '0.446');
  backCover.setAttribute('position', '0 0 -0.013');
  backCover.setAttribute('rotation', '0 180 0');
  backCover.setAttribute('material', `src: #${canvasId}; shader: flat; side: double; roughness: 0.95`);
  inspectBox.appendChild(backCover);

  // Append inspectBox to camera so it remains centered
  camera.appendChild(inspectBox);

  // Set up rotation state
  currentRotation = { x: 0, y: 0 };

  // Trigger Zoom-In animation
  inspectBox.setAttribute('animation__pos', {
    property: 'position',
    to: '0 0 -0.65',
    dur: 600,
    easing: 'easeOutBack'
  });
  inspectBox.setAttribute('animation__scale', {
    property: 'scale',
    to: '1 1 1',
    dur: 600,
    easing: 'easeOutBack'
  });

  // Set HUD content
  document.getElementById('inspect-title').textContent = movie.title;
  document.getElementById('inspect-meta').textContent = `${movie.year}  ·  ★ ${movie.rating}  ·  ${movie.genre ? movie.genre.toUpperCase() : 'SPECIAL'}`;
  
  // Show UI overlays
  document.getElementById('inspect-overlay').classList.remove('hidden');
  document.getElementById('hands-overlay').classList.remove('hidden');

  // Hide mobile joystick and D-pad during inspection
  var joystickEl = document.getElementById('mobile-joystick');
  if (joystickEl) joystickEl.classList.add('hidden');
  var dpadEl = document.getElementById('mobile-dpad');
  if (dpadEl) dpadEl.classList.add('hidden');
}

function stopInspection() {
  if (!isInspecting) return;

  const inspectBox = document.getElementById('inspection-box');
  if (!inspectBox) return;

  // Hide HUD & hands overlays immediately
  document.getElementById('inspect-overlay').classList.add('hidden');
  document.getElementById('hands-overlay').classList.add('hidden');

  // Restore joystick and D-pad on mobile
  if (isMobileDevice()) {
    var joystickEl = document.getElementById('mobile-joystick');
    if (joystickEl) joystickEl.classList.remove('hidden');
    var dpadEl = document.getElementById('mobile-dpad');
    if (dpadEl) dpadEl.classList.remove('hidden');
  }

  // Animate the box flying back / shrinking out of view
  inspectBox.setAttribute('animation__pos', {
    property: 'position',
    to: '0 0 -2.5',
    dur: 400,
    easing: 'easeInBack'
  });
  inspectBox.setAttribute('animation__scale', {
    property: 'scale',
    to: '0.05 0.05 0.05',
    dur: 400,
    easing: 'easeInBack'
  });

  // Clean up after animation finishes
  setTimeout(() => {
    const camera = document.getElementById('camera');
    if (inspectBox.parentNode === camera) {
      camera.removeChild(inspectBox);
    }

    // Clean up dynamically created canvas from DOM
    const canvases = document.querySelectorAll('[id^="canvas-back-"]');
    canvases.forEach(canvas => canvas.remove());

    // Restore controls
    const rig = document.getElementById('rig');
    if (rig && rig.components['wasd-controls']) {
      rig.components['wasd-controls'].play();
    }
    if (rig && rig.components['step-movement']) {
      rig.components['step-movement'].isInspecting = false;
    }

    const cameraEl = document.getElementById('camera');
    if (cameraEl && cameraEl.components['look-controls']) {
      cameraEl.components['look-controls'].play();
    }

    // Restore pointer lock crosshair if not on mobile
    if (!isMobileDevice()) {
      document.getElementById('crosshair').classList.remove('hidden');
    }

    isInspecting = false;
    activeInspectMovie = null;
    originalClickedEntity = null;
  }, 400);
}

// Draw a beautifully designed retro VHS/DVD back cover on a canvas
function generateDVDBackCover(movie) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 720;
  const ctx = canvas.getContext('2d');

  // Background: Dark retro cardboard texture / Blockbuster blue
  ctx.fillStyle = '#001c58';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Outer border (retro gold)
  ctx.strokeStyle = '#ffd700';
  ctx.lineWidth = 12;
  ctx.strokeRect(6, 6, canvas.width - 12, canvas.height - 12);

  // Inner border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  // Logo banner at the top
  ctx.fillStyle = '#ffd700';
  ctx.fillRect(20, 20, canvas.width - 40, 70);

  ctx.fillStyle = '#002d8a';
  ctx.font = 'bold 36px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('BLOCKBUSTER VIDEO', canvas.width / 2, 68);

  // Movie Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(movie.title.toUpperCase(), 40, 140);

  // Movie Meta Details
  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText(`YEAR: ${movie.year}   |   RATING: ★ ${movie.rating}/10`, 40, 175);

  // Divider line
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(40, 195);
  ctx.lineTo(canvas.width - 40, 195);
  ctx.stroke();

  // Movie Synopsis
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '18px sans-serif';
  const synopsis = movieSynopses[movie.title] || `Experience the spectacular motion picture event '${movie.title}' now. Grab a copy, grab some popcorn, and enjoy a classic Blockbuster night at home!`;
  wrapText(ctx, synopsis, 40, 235, canvas.width - 80, 26);

  // Terms and conditions box
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(40, 420, canvas.width - 80, 110);
  ctx.strokeStyle = 'rgba(255, 215, 0, 0.3)';
  ctx.strokeRect(40, 420, canvas.width - 80, 110);

  ctx.fillStyle = '#ffd700';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('RENTAL RULES & TERMS', 55, 445);
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '12px sans-serif';
  ctx.fillText('1. One-night rental. Must be returned by 12:00 PM tomorrow.', 55, 470);
  ctx.fillText('2. A late fee of $2.50 per day will be charged for overdue items.', 55, 490);
  ctx.fillText('3. Please rewind cassette tapes before returning to drop box.', 55, 510);

  // Barcode container
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(320, 560, 150, 80);
  
  // Draw barcode lines
  ctx.fillStyle = '#000000';
  let barX = 330;
  while (barX < 460) {
    let w = Math.random() > 0.5 ? 4 : 2;
    ctx.fillRect(barX, 570, w, 50);
    barX += w + (Math.random() > 0.4 ? 2 : 4);
  }
  ctx.font = '10px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('2026857 004128', 395, 632);

  // "Be Kind Rewind" badge on the left
  ctx.fillStyle = '#ff0055';
  ctx.beginPath();
  ctx.arc(110, 600, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('BE KIND', 110, 595);
  ctx.fillText('REWIND!', 110, 612);

  return canvas;
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n] + ' ';
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
  return y;
}

// Drag / Swipe listeners to rotate the 3D DVD Box on its axes
function initRotationHandlers() {
  function onPointerDown(e) {
    if (!isInspecting) return;
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    previousMousePosition = { x: clientX, y: clientY };
  }

  function onPointerMove(e) {
    if (!isDragging || !isInspecting) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - previousMousePosition.x;
    const deltaY = clientY - previousMousePosition.y;

    currentRotation.y += deltaX * 0.4;
    currentRotation.x += deltaY * 0.4;

    // Clamp vertical tilt
    currentRotation.x = Math.max(-55, Math.min(55, currentRotation.x));

    const box = document.getElementById('inspection-box');
    if (box) {
      box.setAttribute('rotation', `${currentRotation.x} ${currentRotation.y} 0`);
    }

    previousMousePosition = { x: clientX, y: clientY };
  }

  function onPointerUp() {
    isDragging = false;
  }

  window.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  window.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

function initInspectionControls() {
  const btnClose = document.getElementById('inspect-btn-close');
  const btnImdb = document.getElementById('inspect-btn-imdb');

  if (btnClose) {
    btnClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      stopInspection();
    });
  }

  if (btnImdb) {
    btnImdb.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (activeInspectMovie) {
        window.open(activeInspectMovie.imdb, '_blank');
      }
    });
  }

  initRotationHandlers();
}

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
  initMobileControls();
  initInspectionControls();
});


