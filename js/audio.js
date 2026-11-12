/**
 * ------------------------------------------------------------------
 * AUDIO CONTROLLER & ROMANTIC SYNTHESIZER
 * ------------------------------------------------------------------
 * Controls the spinning vinyl record, playback toggles, and provides
 * an automatic soft romantic lofi piano fallback if no audio file is provided.
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
      this.audioElement.preload = "auto";

      this.audioElement.addEventListener("error", () => {
        console.warn("Audio file not found or unsupported format. Falling back to romantic web synth.");
        this.usingSynth = true;
      });
    } else {
      this.usingSynth = true;
    }

    if (this.musicToggleBtn) {
      this.musicToggleBtn.addEventListener("click", () => this.togglePlayback());
    }
  }

  // Graceful user gesture trigger (called upon breaking the wax seal)
  startOnGesture() {
    if (!this.isPlaying) {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;

    // Update UI state
    if (this.vinylDisk) this.vinylDisk.classList.add("spinning");
    if (this.vinylArm) this.vinylArm.classList.add("playing");
    if (this.musicBars) this.musicBars.classList.add("active");
    if (this.musicStatusText) this.musicStatusText.textContent = "Playing Our Song";

    if (this.audioElement && !this.usingSynth) {
      const promise = this.audioElement.play();
      if (promise !== undefined) {
        promise.catch(err => {
          console.warn("HTML5 audio playback blocked. Using Web Audio synth fallback.", err);
          this.usingSynth = true;
          this.playSynth();
        });
      }
    } else {
      this.playSynth();
    }
  }

  pause() {
    this.isPlaying = false;

    // Update UI state
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
   * Generates a sweet, gentle romantic lofi pentatonic progression
   * using Web Audio API oscillators when no local MP3 is present.
   */
  playSynth() {
    if (this.synthInterval) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!this.synthContext) {
        this.synthContext = new AudioCtx();
      }
      if (this.synthContext.state === "suspended") {
        this.synthContext.resume();
      }

      // Romantic pentatonic chord tones (F major / D minor warm aesthetic)
      const notes = [
        261.63, 293.66, 329.63, 392.00, 440.00, // C4, D4, E4, G4, A4
        523.25, 587.33, 659.25, 783.99, 880.00  // C5, D5, E5, G5, A5
      ];
      const chords = [
        [261.63, 329.63, 392.00], // C
        [220.00, 261.63, 329.63], // Am
        [174.61, 261.63, 349.23], // F
        [196.00, 246.94, 293.66]  // G
      ];

      let chordIndex = 0;
      let step = 0;

      const playChordNote = (freq, duration = 1.6, gainLevel = 0.04) => {
        if (!this.isPlaying || !this.synthContext) return;
        const osc = this.synthContext.createOscillator();
        const gain = this.synthContext.createGain();
        const filter = this.synthContext.createBiquadFilter();

        // Warm, mellow low-pass filtering
        filter.type = "lowpass";
        filter.frequency.value = 900;

        osc.type = "triangle";
        osc.frequency.value = freq;

        const now = this.synthContext.currentTime;
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(gainLevel, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.synthContext.destination);

        osc.start(now);
        osc.stop(now + duration + 0.1);
      };

      // Gentle melodic progression loop
      this.synthInterval = setInterval(() => {
        if (!this.isPlaying) return;
        
        // Root pad
        if (step % 4 === 0) {
          const chord = chords[chordIndex % chords.length];
          chord.forEach(f => playChordNote(f, 2.2, 0.03));
          chordIndex++;
        }

        // Random sweet melody note
        const melodyNote = notes[Math.floor(Math.random() * notes.length)];
        playChordNote(melodyNote, 0.8, 0.05);

        step++;
      }, 700);

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
