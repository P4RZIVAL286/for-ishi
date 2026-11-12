/**
 * ------------------------------------------------------------------
 * GOLD FOIL SCRATCH-OFF CARD (HTML5 Canvas)
 * ------------------------------------------------------------------
 * Touch-enabled canvas scratch mechanic with metallic gold gradient,
 * percentage detection, and sparkle celebration reveal.
 */

class ScratchTicket {
  constructor(canvasId, containerId, onComplete) {
    this.canvas = document.getElementById(canvasId);
    this.container = document.getElementById(containerId);
    this.onComplete = onComplete;
    this.ctx = null;
    this.isDrawing = false;
    this.isRevealed = false;
    this.lastCheck = 0;

    if (this.canvas && typeof this.canvas.getContext === "function") {
      this.init();
    }
  }

  init() {
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    this.resizeCanvas();
    this.drawFoil();
    this.bindEvents();

    window.addEventListener("resize", () => {
      if (!this.isRevealed) {
        this.resizeCanvas();
        this.drawFoil();
      }
    });
  }

  resizeCanvas() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  drawFoil() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Golden metallic gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#D4AF37");
    grad.addColorStop(0.25, "#FFF2A1");
    grad.addColorStop(0.5, "#AA771C");
    grad.addColorStop(0.75, "#FDF0A6");
    grad.addColorStop(1, "#8A5A00");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle decorative sparkle stars
    ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
    for (let i = 0; i < 28; i++) {
      const x = (i * 37) % w;
      const y = (i * 29) % h;
      ctx.beginPath();
      ctx.arc(x, y, (i % 3) + 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Callout text
    ctx.fillStyle = "#4A3200";
    ctx.font = "bold 15px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨ Rub with your finger to reveal ✨", w / 2, h / 2 - 10);

    ctx.font = "12px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(74, 50, 0, 0.8)";
    ctx.fillText("Special Anniversary Surprise Inside", w / 2, h / 2 + 14);
  }

  bindEvents() {
    const scratch = (e) => {
      if (!this.isDrawing || this.isRevealed) return;
      e.preventDefault();

      const rect = this.canvas.getBoundingClientRect();
      let clientX, clientY;

      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      this.eraseAt(x, y);
      this.spawnSparkle(clientX, clientY);

      // Throttled clearance calculation
      const now = Date.now();
      if (now - this.lastCheck > 250) {
        this.lastCheck = now;
        this.checkScratchPercentage();
      }
    };

    // Touch events for mobile
    this.canvas.addEventListener("touchstart", (e) => {
      this.isDrawing = true;
      scratch(e);
    }, { passive: false });

    this.canvas.addEventListener("touchmove", scratch, { passive: false });
    this.canvas.addEventListener("touchend", () => { this.isDrawing = false; });

    // Mouse events for desktop
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDrawing = true;
      scratch(e);
    });
    this.canvas.addEventListener("mousemove", scratch);
    window.addEventListener("mouseup", () => { this.isDrawing = false; });
  }

  spawnSparkle(cx, cy) {
    if (Math.random() > 0.35) return;
    const spark = document.createElement("span");
    spark.className = "scratch-sparkle";
    spark.textContent = ["✨", "💛", "⭐", "💫"][Math.floor(Math.random() * 4)];
    spark.style.left = `${cx + (Math.random() - 0.5) * 24}px`;
    spark.style.top = `${cy + (Math.random() - 0.5) * 24}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 650);
  }

  eraseAt(x, y) {
    const ctx = this.ctx;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
  }

  checkScratchPercentage() {
    if (this.isRevealed) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    let transparentPixels = 0;
    const totalPixels = data.length / 4;

    // Sample every 4th pixel for speed
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] === 0) {
        transparentPixels++;
      }
    }

    const ratio = transparentPixels / (totalPixels / 4);
    if (ratio > 0.45) {
      this.revealFull();
    }
  }

  revealFull() {
    if (this.isRevealed) return;
    this.isRevealed = true;

    // Smooth fade out
    this.canvas.style.transition = "opacity 0.6s ease-out";
    this.canvas.style.opacity = "0";
    setTimeout(() => {
      this.canvas.style.display = "none";
    }, 600);

    if (typeof this.onComplete === "function") {
      this.onComplete();
    }
  }
}

window.ScratchTicket = ScratchTicket;
