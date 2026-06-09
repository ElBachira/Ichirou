document.addEventListener('DOMContentLoaded', function() {

    const audio = document.getElementById('song-player'); 
    const preloader = document.getElementById('preloader');
    
    const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
    const swooshSound = new Audio('https://www.fesliyanstudios.com/play-mp3/570');
    
    document.querySelectorAll('.tab-button, .close-btn, .links-grid a, .player-ctrl-btn').forEach(element => {
        element.addEventListener('click', () => {
            if (element.matches('.links-grid a')) {
                swooshSound.currentTime = 0;
                swooshSound.play().catch(e => console.log("Error al reproducir swoosh:", e));
            } else {
                clickSound.currentTime = 0;
                clickSound.play().catch(e => console.log("Error al reproducir click:", e));
            }
        });
    });

    document.querySelectorAll('.typewriter').forEach((element, index) => {
        const text = element.innerHTML;
        element.innerHTML = '';
        element.style.opacity = 1;
        let i = 0;
        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 25);
        }, 500 + index * 100); 
    });

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xOffset = (clientX / innerWidth - 0.5) * -2;
        const yOffset = (clientY / innerHeight - 0.5) * -2;
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.body.style.backgroundPosition = `calc(50% + ${xOffset}%) calc(50% + ${yOffset}%)`;
        }
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const closeButtons = document.querySelectorAll('.close-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const paneId = button.dataset.tab;
            document.getElementById(paneId).classList.add('active');
            if (paneId === 'stats-tab') { animateStats(); }
        });
    });
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.overlay-pane').classList.remove('active');
        });
    });
    function animateStats() {
        const bars = document.querySelectorAll('.overlay-pane.active .fill');
        bars.forEach(bar => {
            bar.style.transition = 'none';
            bar.style.width = '0%';
            void bar.offsetWidth; 
            bar.style.transition = 'width 1s ease-in-out';

            let rawVal = bar.getAttribute('data-p');
            if(rawVal) {
                const percentage = rawVal.replace('%', '').trim();
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, 50);
            }
        });
    }
    
    // =================================================================
    // === CONFIGURACIÓN DE CANCIONES ===
    // =================================================================
    const songs = [
        {
            title: "Done For Me",
            artist: "Charlie Puth",
            src: "song.mp3",
            lyrics: [
  { "time": 9, "line": "Ooh, ooh-oh-oh" },
  { "time": 18, "line": "¿En qué estás pensando?" },
  { "time": 20, "line": "Crees que te iría mejor con alguien nuevo" },
  { "time": 24, "line": "(No, oh, oh, bebé, no)" },
  { "time": 26, "line": "Dices que te vas" },
  { "time": 29, "line": "Bueno, si te quieres ir, nadie te va a detener" },
  { "time": 33, "line": "(No, oh, oh, bebé, no)" },
  { "time": 34, "line": "No voy a rogar por tu amor" },
  { "time": 36, "line": "No diré 'por favor'" },
  { "time": 38, "line": "No caeré al suelo de rodillas" },
  { "time": 43, "line": "Sabes que lo he dado todo por esto" },
  { "time": 46, "line": "Bebé, honestamente, bebé, honestamente" },
  { "time": 50, "line": "Mentí por ti, bebé" },
  { "time": 53, "line": "Moriría por ti, bebé" },
  { "time": 56, "line": "He llorado por ti, bebé" },
  { "time": 58, "line": "Pero dime qué has hecho tú por mí" },
  { "time": 60, "line": "Por ti, bebé, y solo por ti, bebé" },
  { "time": 63, "line": "Las cosas que hago, bebé" },
  { "time": 66, "line": "Pero dime qué has hecho tú por mí" },
  { "time": 69, "line": "Nunca te engañé" },
  { "time": 71, "line": "Eliminé a todos porque te hacían sentir incómoda" },
  { "time": 76, "line": "(No, oh, oh, bebé, no)" },
  { "time": 78, "line": "Estas acusaciones" },
  { "time": 80, "line": "No puedo pedir perdón por algo que no hice" },
  { "time": 84, "line": "(No, oh, oh, bebé, no)" },
  { "time": 85, "line": "No voy a rogar por tu amor" },
  { "time": 88, "line": "No diré 'por favor' (Oh no, no diré 'por favor')" },
  { "time": 90, "line": "No caeré al suelo de rodillas (De rodillas)" },
  { "time": 95, "line": "Sabes que lo he dado todo por esto (Oh, oh)" },
  { "time": 98, "line": "Bebé honestamente (Bebé honestamente), bebé honestamente (Whoa)" },
  { "time": 102, "line": "Mentí por ti, bebé" },
  { "time": 104, "line": "Moriría por ti, bebé" },
  { "time": 106, "line": "He llorado por ti, bebé" },
  { "time": 109, "line": "Pero dime qué has hecho tú por mí" },
  { "time": 111, "line": "Por ti, bebé, y solo por ti, bebé" },
  { "time": 115, "line": "Las cosas que hago, bebé" },
  { "time": 118, "line": "Pero dime qué has hecho tú por mí" },
  { "time": 120, "line": "Oh, dime qué has hecho tú por mí" },
  { "time": 122, "line": "(Oh, dime qué has hecho tú por mí)" },
  { "time": 126, "line": "Oh, dime qué has hecho tú por mí" },
  { "time": 130, "line": "Oh-oh-oh-oh-oh" },
  { "time": 137, "line": "Sabes que lo he dado todo por esto" },
  { "time": 141, "line": "Bebé, honestamente" },
  { "time": 143, "line": "Dime qué has hecho tú por mí" },
  { "time": 146, "line": "Mentí por ti, bebé" },
  { "time": 148, "line": "Moriría por ti, bebé" },
  { "time": 150, "line": "He llorado por ti, bebé" },
  { "time": 152, "line": "Pero dime qué has hecho tú por mí" },
  { "time": 154, "line": "Por ti, bebé, y solo por ti, bebé (Oh)" },
  { "time": 158, "line": "Las cosas que hago, bebé (Pero dime)" },
  { "time": 160, "line": "Pero dime qué has hecho tú por mí" },
  { "time": 163, "line": "Oh, dime qué has hecho tú por mí" },
  { "time": 165, "line": "(Oh, dime qué has hecho tú por mí)" },
  { "time": 167, "line": "Oh, dime qué has hecho tú por mí" }
]
        }
    ];

    let currentSongIndex = 0;
    let currentLyricIndex = -1;

    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const songTitleEl = document.getElementById('song-title');
    const songArtistEl = document.getElementById('song-artist');
    const spotifyIcon = document.querySelector('.spotify-icon');
    
    const lyricsContainer = document.getElementById('lyrics-container');
    
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.src;
        songTitleEl.textContent = song.title;
        songArtistEl.textContent = song.artist;
        loadLyrics(song.lyrics);
        audio.pause();
        playPauseBtn.innerHTML = playIcon;
        spotifyIcon.classList.remove('is-spinning');
    }

    function loadLyrics(lyrics) {
        lyricsContainer.innerHTML = ''; 
        currentLyricIndex = -1; 

        if (!lyrics || lyrics.length === 0) {
            lyricsContainer.innerHTML = '<p class="lyric-line active">♪ No hay letra para esta canción ♪</p>';
            return;
        }

        lyrics.forEach((line, index) => {
            const p = document.createElement('p');
            p.textContent = line.line;
            p.classList.add('lyric-line');
            p.dataset.index = index; 
            lyricsContainer.appendChild(p);
        });
        
        lyricsContainer.style.transform = `translateY(0px)`;
    }

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(e => console.error("Error al intentar reproducir:", e));
            playPauseBtn.innerHTML = pauseIcon;
            spotifyIcon.classList.add('is-spinning');
        } else {
            audio.pause();
            playPauseBtn.innerHTML = playIcon;
            spotifyIcon.classList.remove('is-spinning');
        }
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; 
        }
        loadSong(currentSongIndex);
        audio.play().catch(e => console.error("Error al intentar reproducir:", e)); 
        playPauseBtn.innerHTML = pauseIcon;
        spotifyIcon.classList.add('is-spinning');
    });

    audio.addEventListener('ended', () => {
        nextBtn.click(); 
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const lyrics = songs[currentSongIndex].lyrics;

        if (!lyrics || lyrics.length === 0) return; 

        let newActiveIndex = -1;
        for (let i = lyrics.length - 1; i >= 0; i--) {
            if (currentTime >= lyrics[i].time) {
                newActiveIndex = i;
                break;
            }
        }

        if (newActiveIndex === currentLyricIndex) {
            return;
        }

        currentLyricIndex = newActiveIndex;

        lyricsContainer.querySelectorAll('.lyric-line').forEach(lineEl => {
            lineEl.classList.remove('active');
        });

        if (currentLyricIndex !== -1) {
            const activeLine = lyricsContainer.querySelector(`.lyric-line[data-index="${currentLyricIndex}"]`);
            if (activeLine) {
                activeLine.classList.add('active');
                const scrollOffset = activeLine.offsetTop - (100 / 2) + (activeLine.clientHeight / 2);
                lyricsContainer.style.transform = `translateY(-${scrollOffset}px)`;
            }
        } else {
            lyricsContainer.style.transform = `translateY(0px)`;
        }
    });

    loadSong(currentSongIndex);

    const fnafSticker=document.getElementById('fnaf-sticker');const honkSound=new Audio('https://www.myinstants.com/media/sounds/fnaf-nose-honk.mp3');fnafSticker.addEventListener('click',()=>{honkSound.currentTime=0;honkSound.play().catch(e => {})});
    const copyBtn = document.getElementById('copy-link-btn');
    const originalBtnText = copyBtn.innerHTML;
    copyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
            copyBtn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            copyBtn.classList.add('copied');
            swooshSound.currentTime = 0;
            swooshSound.play().catch(err => {});
            setTimeout(() => {
                copyBtn.innerHTML = originalBtnText;
                copyBtn.classList.remove('copied');
            }, 2000);
        });
    });

    // OCULTAR PRELOADER AL FINAL
    preloader.classList.add('loaded');

});
                          
