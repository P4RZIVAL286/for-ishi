/**
 * ------------------------------------------------------------------
 * AUDIO CONTROLLER: UNTIL I FOUND YOU (INSTRUMENTAL)
 * ------------------------------------------------------------------
 * Plays local audio file if present, or synthesizes the gentle
 * vintage 1950s doo-wop / waltz arpeggio inspired by "Until I Found You"
 * using the Web Audio API.
 */

class RomanticAudioController {
  constructor() {
    this.isPlaying = false;
    this.isMuted = false;
    this.audioElement = null;
    this.synthContext = null;
    this.synthInterval = null;
    this.usingSynth = false;

    this.vinylDisk = document.getElementById("vinyl-disk");
    this.vinylArm = document.getElementById("vinyl-tonearm");
    this.musicToggleBtn = document.getElementById("music-toggle-btn");
    this.musicStatusText = document.getElementById("music-status-text");
    this.musicBars = document.getElementById("music-eq-bars");

    this.init();
  }

  init() {
    const config = window.ANNIVERSARY_CONFIG?.music || {};
    const src = config.src;

    if (src) {
      this.audioElement = new Audio();
      this.audioElement.src = src;
      this.audioElement.loop = true;
      this.audioElement.volume = 0.28; // Gentle, soft volume
      this.audioElement.preload = "auto";

      this.audioElement.addEventListener("error", () => {
        console.warn("Audio file not found. Playing synthesized 'Until I Found You' melody.");
        this.usingSynth = true;
      });
    } else {
      this.usingSynth = true;
    }

    if (this.musicToggleBtn) {
      this.musicToggleBtn.addEventListener("click", () => this.togglePlayback());
    }
  }

  startOnGesture() {
    if (!this.isPlaying) {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;

    if (this.vinylDisk) this.vinylDisk.classList.add("spinning");
    if (this.vinylArm) this.vinylArm.classList.add("playing");
    if (this.musicBars) this.musicBars.classList.add("active");
    if (this.musicStatusText) this.musicStatusText.textContent = "Until I Found You 🎵";

    if (this.audioElement && !this.usingSynth) {
      const promise = this.audioElement.play();
      if (promise !== undefined) {
        promise.catch(err => {
          this.usingSynth = true;
          this.playUntilIFoundYouSynth();
        });
      }
    } else {
      this.playUntilIFoundYouSynth();
    }
  }

  pause() {
    this.isPlaying = false;

    if (this.vinylDisk) this.vinylDisk.classList.remove("spinning");
    if (this.vinylArm) this.vinylArm.classList.remove("playing");
    if (this.musicBars) this.musicBars.classList.remove("active");
    if (this.musicStatusText) this.musicStatusText.textContent = "Music Paused";

    if (this.audioElement && !this.usingSynth) {
      this.audioElement.pause();
    }
    this.stopSynth();
  }

  togglePlayback() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  /**
   * Synthesizes the gentle 12/8 vintage waltz arpeggio of
   * "Until I Found You" (Stephen Sanchez)
   */
  playUntilIFoundYouSynth() {
    if (this.synthInterval) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.synthContext) {
        this.synthContext = new AudioCtx();
      }
      if (this.synthContext.state === "suspended") {
        this.synthContext.resume();
      }

      // Classic "Until I Found You" arpeggio notes (C major / A minor / F / G ballad)
      const arpeggioChords = [
        [261.63, 329.63, 392.00, 523.25], // C - E - G - C
        [220.00, 261.63, 329.63, 440.00], // A - C - E - A (Am)
        [174.61, 220.00, 261.63, 349.23], // F - A - C - F
        [196.00, 246.94, 293.66, 392.00]  // G - B - D - G
      ];

      let chordIdx = 0;
      let noteStep = 0;

      const playGuitarNote = (freq, duration = 1.4, volume = 0.04) => {
        if (!this.isPlaying || !this.synthContext) return;
        const osc = this.synthContext.createOscillator();
        const gain = this.synthContext.createGain();
        const filter = this.synthContext.createBiquadFilter();

        // Warm vintage guitar lowpass
        filter.type = "lowpass";
        filter.frequency.value = 850;

        osc.type = "triangle";
        osc.frequency.value = freq;

        const now = this.synthContext.currentTime;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(volume, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.synthContext.destination);

        osc.start(now);
        osc.stop(now + duration + 0.1);
      };

      this.synthInterval = setInterval(() => {
        if (!this.isPlaying) return;

        const currentChord = arpeggioChords[chordIdx % arpeggioChords.length];
        const note = currentChord[noteStep % currentChord.length];

        playGuitarNote(note, 1.2, 0.035);

        noteStep++;
        if (noteStep >= 4) {
          noteStep = 0;
          chordIdx++;
        }
      }, 420);

    } catch (e) {
      console.warn("Web Audio Synth could not initialize:", e);
    }
  }

  stopSynth() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

window.RomanticAudioController = RomanticAudioController;
