(function(){
                const audio = document.getElementById('bg-audio');
                const btn = document.getElementById('music-toggle');
                const vol = document.getElementById('music-volume');
                const PLAY_KEY = 'bg-music-playing';
                const VOL_KEY = 'bg-music-volume';
                const progress = document.getElementById('music-progress');
                const progressContainer = document.getElementById('music-progress-container');
                const currentTimeSpan = document.getElementById('music-current-time');
                const durationSpan = document.getElementById('music-duration');
                // Format seconds as m:ss
                function formatTime(secs) {
                    if (!isFinite(secs) || secs < 0) return '0:00';
                    const m = Math.floor(secs / 60);
                    const s = Math.floor(secs % 60);
                    return m + ':' + (s < 10 ? '0' : '') + s;
                }
                // Update progress bar as song plays
                function updateProgress() {
                    if (!audio.duration) {
                        progress.value = 0;
                        currentTimeSpan.textContent = '0:00';
                        durationSpan.textContent = '0:00';
                        return;
                    }
                    const percent = (audio.currentTime / audio.duration) * 100;
                    progress.value = percent;
                    currentTimeSpan.textContent = formatTime(audio.currentTime);
                    durationSpan.textContent = formatTime(audio.duration);
                }

                audio.addEventListener('timeupdate', updateProgress);
                audio.addEventListener('loadedmetadata', updateProgress);
                audio.addEventListener('ended', function(){
                    progress.value = 0;
                    currentTimeSpan.textContent = '0:00';
                    durationSpan.textContent = formatTime(audio.duration);
                });

                // Allow seeking by clicking/dragging the progress bar
                progress.addEventListener('input', function(){
                    if (audio.duration) {
                        audio.currentTime = (progress.value / 100) * audio.duration;
                    }
                });
                const prevBtn = document.getElementById('music-prev');
                const nextBtn = document.getElementById('music-next');
                prevBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    setTrack((currentTrack - 1 + playlist.length) % playlist.length);
                    audio.play();
                });
                nextBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    setTrack((currentTrack + 1) % playlist.length);
                    audio.play();
                });
                // Playlist of 4 songs (update src as needed)
                    // Playlist: add song names for display
                    const playlist = [
                        {src: 'music/Spring.mp3', name: "Vivaldi's Spring"},
                        {src: 'music/Summer.mp3', name: "Vivaldi's Summer"},
                        {src: 'music/Autumn.mp3', name: "Vivaldi's Autumn"},
                        {src: 'music/Winter.mp3', name: "Vivaldi's Winter"}
                    ];
                let currentTrack = 0;
                    const songTitle = document.getElementById('music-song-title');

                // Status display (create if missing)
                let status = document.getElementById('music-status');
                if(!status){
                    status = document.createElement('div');
                    status.id = 'music-status';
                    status.style.position = 'fixed';
                    status.style.right = '16px';
                    status.style.bottom = '90px';
                    status.style.background = 'rgba(0,0,0,0.7)';
                    status.style.color = '#fff';
                    status.style.padding = '6px 10px';
                    status.style.borderRadius = '6px';
                    status.style.fontSize = '13px';
                    status.style.zIndex = '10000';
                    status.style.maxWidth = '220px';
                    status.style.display = 'none';
                    document.body.appendChild(status);
                }

                function showStatus(msg, timeout=4000){
                    status.textContent = msg;
                    status.style.display = 'block';
                    clearTimeout(status._hideTimer);
                    status._hideTimer = setTimeout(()=>{ status.style.display = 'none'; }, timeout);
                }

                function updateButton(playing){
                    btn.textContent = playing ? 'Pause Music' : 'Play Music';
                    btn.setAttribute('aria-pressed', String(playing));
                }

                // Initialize volume from storage (default 0.8)
                const storedVol = parseFloat(localStorage.getItem(VOL_KEY));
                const initVol = Number.isFinite(storedVol) ? storedVol : 0.8;
                audio.volume = Math.min(1, Math.max(0, initVol));
                vol.value = String(audio.volume);

                // Set initial track
                function setTrack(idx) {
                    currentTrack = idx % playlist.length;
                    if(currentTrack < 0) currentTrack = playlist.length - 1;
                        audio.src = playlist[currentTrack].src;
                        // Update song title
                        songTitle.textContent = playlist[currentTrack].name;
                    audio.load();
                }
                setTrack(0);

                // Play/pause on button click
                btn.addEventListener('click', function(){
                    if(!audio.src){
                        showStatus('No audio source set');
                        return;
                    }
                    if(audio.paused){
                        // Only reload if the source was just changed (not just paused)
                        // If audio.currentTime is 0 and audio.ended, reload to restart
                        if (audio.currentTime === 0 && audio.ended) {
                            try { audio.load(); } catch(e){}
                        }
                        audio.play().then(()=>{
                            updateButton(true);
                            localStorage.setItem(PLAY_KEY, '1');
                            showStatus('Playing');
                        }).catch((err)=>{
                            updateButton(false);
                            showStatus('Playback blocked or file missing');
                        });
                    } else {
                        audio.pause();
                        updateButton(false);
                        localStorage.setItem(PLAY_KEY, '0');
                        showStatus('Paused');
                    }
                });

                // When a song ends, go to next, loop at end
                audio.addEventListener('ended', function(){
                    setTrack((currentTrack + 1) % playlist.length);
                    audio.play();
                });
                    // Also update title if user seeks to a new track (future-proof)
                    audio.addEventListener('loadeddata', function(){
                        songTitle.textContent = playlist[currentTrack].name;
                    });

                // Volume slider handler
                vol.addEventListener('input', function(){
                    const v = parseFloat(this.value);
                    if(Number.isFinite(v)){
                        audio.volume = Math.min(1, Math.max(0, v));
                        localStorage.setItem(VOL_KEY, String(audio.volume));
                    }
                });

                // Keyboard accessibility: allow arrow keys to change when focused
                vol.addEventListener('keydown', function(e){
                    const step = parseFloat(this.step) || 0.01;
                    let v = parseFloat(this.value);
                    if(e.key === 'ArrowLeft' || e.key === 'ArrowDown'){
                        v = Math.max(0, v - step);
                        this.value = v.toFixed(2);
                        this.dispatchEvent(new Event('input'));
                    } else if(e.key === 'ArrowRight' || e.key === 'ArrowUp'){
                        v = Math.min(1, v + step);
                        this.value = v.toFixed(2);
                        this.dispatchEvent(new Event('input'));
                    }
                });

                // Error/status handling
                audio.addEventListener('error', function(){
                    showStatus('Audio error or file not found');
                });

                // Only update button state on load
                updateButton(false);
            })();