/**
 * ------------------------------------------------------------------
 * MAIN ANNIVERSARY APP ENGINE
 * ------------------------------------------------------------------
 * Handles wax-seal entry, journey counter, 3D polaroid flips,
 * envelope reading modals, voucher claim & persistence, love-o-meter,
 * and tap heart micro-interactions.
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.ANNIVERSARY_CONFIG || {};

  // 1. Initialize Audio Controller
  const audio = new window.RomanticAudioController();

  // 2. Personalize Page Headings & Names
  const herNameElements = document.querySelectorAll(".her-name-placeholder");
  herNameElements.forEach(el => el.textContent = config.herName || "My Love");

  // 3. Wax-Seal Entry Overlay + Password Check ("babygirl")
  const entryOverlay = document.getElementById("entry-overlay");
  const waxSealBtn = document.getElementById("wax-seal-btn");
  const mainContent = document.getElementById("main-content");
  const passwordInput = document.getElementById("password-input");
  const passwordError = document.getElementById("password-error");
  // Accepts 'babygirl' or 'my love' (case and whitespace insensitive)
  const VALID_PASSWORDS = ["babygirl", "mylove"];

  function checkAndOpen() {
    const rawVal = passwordInput ? passwordInput.value : "";
    const clean = rawVal.trim().toLowerCase().replace(/\s+/g, "");

    if (VALID_PASSWORDS.includes(clean)) {
      if (passwordError) passwordError.classList.add("hidden");

      // Audio gesture unlock
      audio.startOnGesture();

      // Envelope open animation
      if (entryOverlay) entryOverlay.classList.add("opening");

      // Confetti burst
      if (typeof confetti === "function") {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#557A66', '#E2B86E', '#7B9E8C', '#FAF9F6']
        });
      }

      setTimeout(() => {
        if (entryOverlay) entryOverlay.classList.add("hidden");
        if (mainContent) {
          mainContent.classList.remove("blurred");
          mainContent.classList.add("visible");
        }
        document.body.classList.add("has-motion");
        if (typeof triggerScrollReveal === "function") {
          triggerScrollReveal();
        }
      }, 850);
    } else {
      if (passwordError) passwordError.classList.remove("hidden");
      if (passwordInput) {
        passwordInput.classList.add("shake");
        setTimeout(() => passwordInput.classList.remove("shake"), 400);
        passwordInput.focus();
      }
    }
  }

  if (waxSealBtn) {
    waxSealBtn.addEventListener("click", checkAndOpen);
  }
  if (passwordInput) {
    passwordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") checkAndOpen();
      if (passwordError) passwordError.classList.add("hidden");
    });
  }

  // 4. Live Journey & Heartbeat Counter + LDR Jan 1st Countdown
  initJourneyCounter(config.startDate);
  initMeetingCountdown(config.meetingDate);

  // 5. Render Timeline
  renderTimeline(config.timeline);

  // 6. Render Polaroids & 3D Flip
  renderPolaroids(config.polaroids);

  // 7. Render "Open When..." Envelopes
  renderOpenWhenEnvelopes(config.openWhenLetters);

  // 8. Render Vouchers & Redemption Engine
  renderVouchers(config.vouchers, config.yourName);

  // 9. Interactive Love-O-Meter
  initLoveMeter();

  // 10. Interactive Affection Jar
  initAffectionJar(config.jarNotes);

  // 11. Scratch Card Initialization
  initScratchCard(config.scratchSecret);

  // 12. Render Personal Letter
  renderLetter(config.letter, config.herName);

  // 13. Screen Tap Floating Hearts
  initTapHearts();

  // 14. Lucide Icons refresh
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/**
 * Real-time journey counter with pulsing heartbeats calculation
 */
function initJourneyCounter(startDateStr) {
  const daysEl = document.getElementById("counter-days");
  const hoursEl = document.getElementById("counter-hours");
  const minutesEl = document.getElementById("counter-minutes");
  const heartbeatsEl = document.getElementById("counter-heartbeats");

  if (!daysEl || !startDateStr) return;

  const startDate = new Date(startDateStr).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = Math.max(0, now - startDate);

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;

    // Estimated heartbeats at ~72 bpm
    const heartbeats = Math.floor(totalMinutes * 72);

    daysEl.textContent = days.toLocaleString();
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (heartbeatsEl) heartbeatsEl.textContent = heartbeats.toLocaleString();
  }

  update();
  setInterval(update, 1000);
}

/**
 * Real-time countdown to January 1st In-Person Meeting
 */
function initMeetingCountdown(meetingDateStr) {
  const meetingDaysEl = document.getElementById("meeting-countdown-days");
  if (!meetingDaysEl || !meetingDateStr) return;

  const targetDate = new Date(meetingDateStr).getTime();

  function updateMeeting() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      meetingDaysEl.textContent = "TODAY! 🫂🎉";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    meetingDaysEl.textContent = `${days} Days, ${hours}h ${minutes}m`;
  }

  updateMeeting();
  setInterval(updateMeeting, 1000 * 60);
}

/**
 * Render Month-by-Month Scrapbook Timeline
 */
function renderTimeline(timelineData = []) {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = timelineData.map((item, idx) => `
    <div class="timeline-entry" style="--accent: ${item.accent}">
      <div class="timeline-pin">
        <span class="pin-head"></span>
        <span class="washi-strip"></span>
      </div>
      <div class="timeline-card scrapbook-paper">
        <div class="timeline-header">
          <span class="timeline-tag">${escapeHtml(item.tag)}</span>
          <span class="timeline-month">${escapeHtml(item.month)}</span>
        </div>
        <h3 class="timeline-title">${escapeHtml(item.title)}</h3>
        <p class="timeline-caption">${escapeHtml(item.caption)}</p>
        <div class="timeline-date-stamp">
          <span>${escapeHtml(item.date)}</span>
          <span class="timeline-icon-badge">${item.imagePlaceholder || "✨"}</span>
        </div>
      </div>
    </div>
  `).join("");
}

/**
 * Render Polaroids with 3D Touch-Flip
 */
function renderPolaroids(polaroidsData = []) {
  const grid = document.getElementById("polaroids-grid");
  if (!grid) return;

  grid.innerHTML = polaroidsData.map(item => `
    <div class="polaroid-wrapper" style="transform: rotate(${item.rotation || '0deg'});">
      <div class="polaroid-washi ${item.washiColor || 'washi-rose'}"></div>
      <div class="polaroid-card" data-polaroid-id="${item.id}" tabindex="0" role="button" aria-label="Tap to flip polaroid: ${escapeHtml(item.caption)}">
        <!-- Front of Polaroid -->
        <div class="polaroid-side polaroid-front scrapbook-paper">
          <div class="polaroid-image-frame">
            <img src="${item.image}" alt="${escapeHtml(item.caption)}" class="polaroid-img" style="${item.objectPosition ? `object-position: ${item.objectPosition};` : ''}" onerror="this.onerror=null; this.src='assets/images/placeholder.svg';">
            <span class="polaroid-symbol">${item.symbol || '📷'}</span>
          </div>
          <div class="polaroid-caption-area">
            <p class="polaroid-caption">${escapeHtml(item.caption)}</p>
            <span class="polaroid-flip-hint">👆 Tap to flip</span>
          </div>
        </div>
        <!-- Back of Polaroid -->
        <div class="polaroid-side polaroid-back scrapbook-paper">
          <div class="polaroid-back-inner">
            <div class="polaroid-stamp">💌 MEMORY</div>
            <p class="polaroid-back-date">${escapeHtml(item.date)} • ${escapeHtml(item.location)}</p>
            <p class="polaroid-back-note">"${escapeHtml(item.backNote)}"</p>
            <div class="polaroid-back-footer">❤️ Tap to flip back</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Bind 3D flip on touch / click
  grid.querySelectorAll(".polaroid-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

/**
 * Render "Open When..." Interactive Envelopes
 */
function renderOpenWhenEnvelopes(envelopesData = []) {
  const grid = document.getElementById("envelopes-grid");
  if (!grid) return;

  grid.innerHTML = envelopesData.map(env => `
    <div class="envelope-item ${env.colorClass}" data-env-id="${env.id}">
      <div class="envelope-paper scrapbook-paper">
        <div class="envelope-stamp-badge">${env.stamp}</div>
        <div class="envelope-tag">${escapeHtml(env.label)}</div>
        <h3 class="envelope-title">${escapeHtml(env.title)}</h3>
        <p class="envelope-teaser">${escapeHtml(env.teaser)}</p>
        <button class="open-envelope-btn" aria-label="Open letter for: ${escapeHtml(env.title)}">
          <span>Tap to Open Letter</span>
          <i data-lucide="mail-open"></i>
        </button>
      </div>
    </div>
  `).join("");

  const modal = document.getElementById("envelope-modal");
  const modalTitle = document.getElementById("envelope-modal-title");
  const modalBody = document.getElementById("envelope-modal-body");
  const modalClose = document.getElementById("envelope-modal-close");

  grid.querySelectorAll(".open-envelope-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const parent = btn.closest(".envelope-item");
      const id = parent.getAttribute("data-env-id");
      const letterData = envelopesData.find(item => item.id === id);

      if (letterData && modal) {
        modalTitle.textContent = `${letterData.label} ${letterData.title}`;
        modalBody.innerHTML = letterData.letter.split('\n\n').map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`).join("");
        modal.classList.add("active");

        if (typeof confetti === "function") {
          confetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
        }
      }
    });
  });

  if (modalClose && modal) {
    const closeModal = () => modal.classList.remove("active");
    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // Apple HIG: Escape key dismissal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal();
      }
    });

    // Apple HIG: Swipe down on sheet header to dismiss
    let touchStartY = 0;
    const modalCard = modal.querySelector(".envelope-modal-card");
    if (modalCard) {
      modalCard.addEventListener("touchstart", (e) => {
        if (modalCard.scrollTop <= 5) {
          touchStartY = e.touches[0].clientY;
        } else {
          touchStartY = 0;
        }
      }, { passive: true });

      modalCard.addEventListener("touchend", (e) => {
        if (touchStartY > 0) {
          const deltaY = e.changedTouches[0].clientY - touchStartY;
          if (deltaY > 75) {
            closeModal();
          }
        }
      }, { passive: true });
    }
  }
}

/**
 * Generate universal WhatsApp redemption link for claimed vouchers
 */
function getWhatsAppRedeemLink(v, yourName) {
  const msg = `Hey ${yourName}! 💚 I'm officially claiming my anniversary voucher: "${v.title}" (${v.number})! ✨`;
  const config = window.ANNIVERSARY_CONFIG || {};
  const phone = (config.yourWhatsAppNumber || "").replace(/[^0-9]/g, "");
  if (phone) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
  return `https://wa.me/?text=${encodeURIComponent(msg)}`;
}

/**
 * Render Interactive Claimable Vouchers with LocalStorage Persistence
 */
function renderVouchers(vouchersData = [], yourName = "Me") {
  const container = document.getElementById("vouchers-container");
  if (!container) return;

  const STORAGE_KEY = "anniversary_claimed_vouchers_v1";
  let claimedSet = new Set();
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) claimedSet = new Set(JSON.parse(saved));
  } catch (e) {
    console.warn("LocalStorage unavailable", e);
  }

  function getVouchersHTML() {
    return vouchersData.map(v => {
      const isClaimed = claimedSet.has(v.id);
      return `
        <div class="voucher-ticket scrapbook-paper ${isClaimed ? 'claimed' : ''}" id="${v.id}">
          <div class="ticket-left">
            <div class="ticket-badge">${escapeHtml(v.badge)}</div>
            <span class="ticket-number">${escapeHtml(v.number)}</span>
            <h3 class="ticket-title">${escapeHtml(v.title)}</h3>
            <p class="ticket-desc">${escapeHtml(v.description)}</p>
            <div class="ticket-terms">
              <i data-lucide="info"></i>
              <span>${escapeHtml(v.terms)}</span>
            </div>
            
            <div class="ticket-action-area">
              ${isClaimed ? `
                <div class="claimed-banner">
                  <span class="claimed-icon">✓</span>
                  <div class="claimed-text">
                    <strong>CLAIMED & READY!</strong>
                    <span>Screenshot or tap below to redeem with ${escapeHtml(yourName)}:</span>
                  </div>
                </div>
                <a href="${getWhatsAppRedeemLink(v, yourName)}" target="_blank" rel="noopener" class="redeem-wa-btn">
                  <span>Send to ${escapeHtml(yourName)} on WhatsApp 💬</span>
                </a>
              ` : `
                <button class="claim-voucher-btn" data-id="${v.id}">
                  <span>Claim This Voucher</span>
                  <i data-lucide="sparkles"></i>
                </button>
              `}
            </div>
          </div>

          <div class="ticket-perforation">
            <span class="notch notch-top"></span>
            <span class="perforation-line"></span>
            <span class="notch notch-bottom"></span>
          </div>

          <div class="ticket-stub">
            <div class="stub-icon"><i data-lucide="${v.icon || 'gift'}"></i></div>
            <span class="stub-tag">COUPON</span>
            <div class="stub-barcode">||||| | |||| |||</div>
            ${isClaimed ? `<div class="rubber-stamp">CLAIMED</div>` : ''}
          </div>
        </div>
      `;
    }).join("");
  }

  container.innerHTML = getVouchersHTML();

  // Bind claim events
  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".claim-voucher-btn");
    if (!btn) return;

    const id = btn.getAttribute("data-id");
    claimedSet.add(id);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(claimedSet)));
    } catch (err) {
      console.warn("Could not save to localStorage", err);
    }

    // Trigger celebratory confetti
    if (typeof confetti === "function") {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#D96B75', '#F2A65A', '#FFD166', '#06D6A0']
      });
    }

    container.innerHTML = getVouchersHTML();
    if (window.lucide) window.lucide.createIcons();
  });

  // Reset vouchers listener
  const resetBtn = document.getElementById("reset-vouchers-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset all claimed vouchers so you can test claiming them again?")) {
        claimedSet.clear();
        try {
          localStorage.removeItem(STORAGE_KEY);
        } catch (e) {}
        container.innerHTML = getVouchersHTML();
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
}

/**
 * Interactive "Love-O-Meter" Slider with overflow Easter Egg
 */
function initLoveMeter() {
  const slider = document.getElementById("love-slider");
  const valueDisplay = document.getElementById("love-value-display");
  const feedbackDisplay = document.getElementById("love-feedback-text");
  const container = document.getElementById("love-meter-container");

  if (!slider || !valueDisplay) return;

  slider.addEventListener("input", () => {
    const raw = parseInt(slider.value, 10);
    let val;

    // First portion (0 to 35) maps smoothly from 0% to 100%
    if (raw <= 35) {
      val = Math.round((raw / 35) * 100);
    } else {
      // Past 100% (raw 36 to 100), rapidly surges from 100% up to 3000%
      const progress = (raw - 35) / (100 - 35);
      val = Math.round(100 + Math.pow(progress, 1.85) * 2900);
      if (val > 3000) val = 3000;
    }

    valueDisplay.textContent = `${val.toLocaleString()}%`;

    // Sad / disbelief lines below 50%
    if (val === 0) {
      feedbackDisplay.textContent = "Wait... 0%? This wasn't expected at all 🥺💔";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 20) {
      feedbackDisplay.textContent = "Are you sure about this? My heart is physically aching... 😢";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 35) {
      feedbackDisplay.textContent = "Is this a misclick? Please tell me this was a misclick 🥺";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 50) {
      feedbackDisplay.textContent = "Below 50%?! Ouch... this wasn't expected from you 💔";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 100) {
      feedbackDisplay.textContent = "Getting warmer... but it's supposed to be way higher than that! 😉";
      container.classList.remove("shaking", "overflowed");
    } else if (val === 100) {
      feedbackDisplay.textContent = "100% — A completely full heart! But keep going... 💕";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 500) {
      feedbackDisplay.textContent = "Now we're talking! Filling up the room with love ✨";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 1500) {
      feedbackDisplay.textContent = "Levels higher than all the green in your wardrobe! 🌿💚";
      container.classList.remove("shaking", "overflowed");
    } else if (val < 2500) {
      feedbackDisplay.textContent = "Warning: Exceeding normal human capacity levels! 💓";
      container.classList.add("shaking");
      container.classList.remove("overflowed");
    } else if (val < 3000) {
      feedbackDisplay.textContent = "CRITICAL: Meter is about to explode from cuteness! 🚨";
      container.classList.add("shaking");
      container.classList.remove("overflowed");
    } else {
      // Exactly 3000%
      feedbackDisplay.textContent = "💥 OVERFLOW ERROR: Cannot calculate! My love for you is genuinely infinite! ❤️";
      container.classList.add("overflowed");

      if (typeof confetti === "function") {
        confetti({ particleCount: 35, spread: 65, origin: { y: 0.7 } });
      }
    }
  });
}

/**
 * Affection Jar Note Dispenser (Progressive 0 to 12 Fill with Fluid Animation)
 */
function initAffectionJar(notes = []) {
  const jarBtn = document.getElementById("affection-jar-trigger");
  const noteCard = document.getElementById("jar-revealed-note");
  const noteText = document.getElementById("jar-note-text");
  const noteBadge = document.getElementById("jar-note-badge");
  const progressFill = document.getElementById("jar-progress-fill");
  const progressNum = document.getElementById("jar-progress-num");
  const counterHint = document.getElementById("jar-counter-hint");
  const completionBox = document.getElementById("jar-completion-box");
  const fluidLayer = document.getElementById("jar-fluid-layer");

  if (!jarBtn || !notes.length) return;

  const totalNotes = notes.length;
  let drawnCount = 0;

  jarBtn.addEventListener("click", () => {
    // Jiggle & elastic spring animation
    jarBtn.classList.add("jiggling");
    setTimeout(() => jarBtn.classList.remove("jiggling"), 600);

    // Sequence through notes starting from 0 up to 12
    if (drawnCount < totalNotes) {
      drawnCount++;
    }

    const noteIndex = (drawnCount - 1) % totalNotes;
    const pct = Math.min(100, Math.round((drawnCount / totalNotes) * 100));

    // Animate fluid layer inside the glass jar and the progress track below
    if (fluidLayer) fluidLayer.style.height = `${pct}%`;
    if (progressFill) progressFill.style.width = `${pct}%`;

    // Update note content
    if (noteBadge) noteBadge.textContent = `Reason #${drawnCount} of ${totalNotes}`;
    if (noteText) noteText.textContent = `"${notes[noteIndex]}"`;

    if (noteCard) {
      noteCard.classList.remove("hidden");
      noteCard.classList.add("popping");
      setTimeout(() => noteCard.classList.remove("popping"), 500);
    }

    if (drawnCount < totalNotes) {
      if (progressNum) progressNum.textContent = drawnCount.toString();
      if (counterHint) {
        counterHint.innerHTML = `Tap the jar to draw note ${drawnCount + 1} of ${totalNotes}! (<span id="jar-progress-num">${drawnCount}</span> of ${totalNotes} unlocked) 💌`;
      }

      // Mini confetti
      if (typeof confetti === "function") {
        confetti({
          particleCount: 20,
          spread: 35,
          origin: { y: 0.8 },
          colors: ['#557A66', '#FFD166']
        });
      }
    } else {
      // 12 / 12 Full jar milestone!
      if (progressNum) progressNum.textContent = totalNotes.toString();
      if (counterHint) {
        counterHint.innerHTML = `✨ Jar 100% full! All 12/12 reasons unlocked! 💚`;
      }
      if (centerGlyph) centerGlyph.textContent = "🏺✨";
      if (completionBox) completionBox.classList.remove("hidden");

      // Big celebratory burst
      if (typeof confetti === "function") {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#557A66', '#E2B86E', '#7B9E8C', '#FAF9F6']
        });
      }
    }
  });
}

/**
 * Gold Scratch Card Initialization
 */
function initScratchCard(secretData = {}) {
  const titleEl = document.getElementById("scratch-secret-title");
  const msgEl = document.getElementById("scratch-secret-message");
  const rewardEl = document.getElementById("scratch-secret-reward");

  if (titleEl && secretData.title) titleEl.textContent = secretData.title;
  if (msgEl && secretData.message) msgEl.textContent = secretData.message;
  if (rewardEl && secretData.reward) rewardEl.textContent = secretData.reward;

  if (window.ScratchTicket) {
    new window.ScratchTicket("scratch-canvas", "scratch-card-box", () => {
      if (typeof confetti === "function") {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.7 },
          colors: ['#D4AF37', '#FFF2A1', '#D96B75']
        });
      }
    });
  }
}

/**
 * Render Personal Handwritten Anniversary Letter
 */
function renderLetter(letterData = {}, herName = "My Love") {
  const salutationEl = document.getElementById("letter-salutation");
  const dateEl = document.getElementById("letter-date");
  const bodyEl = document.getElementById("letter-paragraphs");
  const closingEl = document.getElementById("letter-closing");
  const sigEl = document.getElementById("letter-signature");

  if (!bodyEl || !letterData) return;

  if (salutationEl) salutationEl.textContent = letterData.salutation || `To My Dearest ${herName},`;
  if (dateEl) dateEl.textContent = letterData.date || "November 14, 2024";
  if (closingEl) closingEl.textContent = letterData.closing || "Forever yours,";
  if (sigEl) sigEl.textContent = letterData.signature || "With all my love ❤️";

  if (letterData.paragraphs && letterData.paragraphs.length) {
    bodyEl.innerHTML = letterData.paragraphs.map(p => `<p class="letter-p">${escapeHtml(p)}</p>`).join("");
  }
}

/**
 * Tap screen to create floating mini hearts
 */
function initTapHearts() {
  const container = document.body;

  window.addEventListener("click", (e) => {
    // Skip if clicking interactive inputs
    if (e.target.closest("button, input, a, .polaroid-card")) return;

    const heart = document.createElement("span");
    heart.className = "floating-touch-heart";
    heart.textContent = ["❤️", "💖", "✨", "🌸", "💕"][Math.floor(Math.random() * 5)];
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  });
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

/* ==========================================================================
   FIX #6: PROGRESSIVE SCROLL-REVEAL (Safe & Guaranteed Visible)
   ========================================================================== */

function triggerScrollReveal() {
  const targets = document.querySelectorAll(
    ".chapter-section, .journey-counter-card, .meeting-countdown-card, .letter-parchment"
  );
  if (!targets.length) return;

  targets.forEach(el => el.classList.add("reveal-block"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(el => observer.observe(el));
  } else {
    targets.forEach(el => el.classList.add("is-revealed"));
  }

  // Safety fallback: reveal everything after 1s so content NEVER stays hidden
  setTimeout(() => {
    targets.forEach(el => el.classList.add("is-revealed"));
  }, 1000);
}

/* ==========================================================================
   FIX #7: SUBTLE FLOATING BOTANICAL PETALS
   ========================================================================== */

(function initPetals() {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas || typeof canvas.getContext !== "function") return;

  // Apple HIG Motion: respect prefers-reduced-motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let petals = [];
  const MAX_PETALS = 14;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function createPetal() {
    return {
      x: Math.random() * canvas.width,
      y: -15,
      size: 4 + Math.random() * 5,
      speedY: 0.3 + Math.random() * 0.4,
      speedX: (Math.random() - 0.5) * 0.35,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      opacity: 0.2 + Math.random() * 0.2,
      hue: 115 + Math.random() * 35 // Soft sage & matcha green
    };
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (petals.length < MAX_PETALS && Math.random() < 0.02) {
      petals.push(createPetal());
    }

    for (let i = petals.length - 1; i >= 0; i--) {
      const p = petals[i];
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.01) * 0.25;
      p.rotation += p.rotSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;

      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.55, p.size, 0, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${p.hue}, 28%, 68%)`;
      ctx.fill();
      ctx.restore();

      if (p.y > canvas.height + 25) {
        petals.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
})();
