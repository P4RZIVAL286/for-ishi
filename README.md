# 🌸 Interactive 6-Month Anniversary Website

A personalized, romantic, mobile-first anniversary website and digital scrapbook created to celebrate our 6-month anniversary on November 14th.

---

## 📱 Quick Preview on Device

You can launch a local web server with Python right now:

```bash
cd /data/user/0/com.agy/files/.gemini/antigravity-app/scratch/anniversary-website
python -m http.server 3000 --bind 127.0.0.1
```

Then open your browser to **`http://localhost:3000`** to experience the full interactive site!

---

## 🎨 How to Personalize Everything (`js/content.js`)

All personal details, photos, letters, dates, and vouchers are cleanly isolated in **`js/content.js`**. You don't need to touch complex HTML or CSS to customize the site:

1. **Names & Dates:**
   - Change `herName` to her real name or affectionate nickname (e.g., `"Sophia"`, `"Babe"`).
   - Change `yourName` so voucher redemption screenshots clearly reference you.
   - Set `startDate` to the exact day your relationship began. The journey counter will automatically calculate exact days, hours, minutes, and pulsing heartbeats!

2. **Photos & Polaroids:**
   - Put your photos into the `assets/images/` directory:
     - `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
   - Update captions and back-of-the-polaroid handwritten notes in `config.polaroids`.
   - *Built-in Fallback:* If photos are missing or still being gathered, a cute romantic SVG placeholder displays automatically without breaking the layout.

3. **Background Music:**
   - Place your song in `assets/audio/our-song.mp3`.
   - *Romantic Fallback:* If no MP3 is added, the custom Web Audio synthesizer automatically plays a soft, warm romantic lofi chord progression when the wax seal is broken!

4. **Anniversary Vouchers & Claims:**
   - Customize titles, descriptions, and icons in `config.vouchers`.
   - When she taps "Claim This Voucher", confetti fires, a realistic rubber stamp slams down with the date, and it prompts her to take a screenshot and send it to you.
   - Claims are saved in browser `localStorage` so they stay claimed even if she reloads.

5. **"Open When..." Letters:**
   - Modify the 5 letters in `config.openWhenLetters` to include your own inside memories and words of comfort.

6. **The Secret Scratch-Off Ticket:**
   - Edit `config.scratchSecret` to customize the hidden surprise revealed when she rubs her finger across the gold foil.

7. **The Personal Anniversary Letter:**
   - Update `config.letter` with your personal words for Chapter 6.

---

## 🚀 Free 1-Click Public Deployment (To Share With Her)

### Option 1: Vercel (Instant CLI or Drag-and-Drop)
1. Push this directory to a GitHub repository or use Vercel CLI:
   ```bash
   # via git:
   git init
   git add .
   git commit -m "Initial anniversary website"
   ```
2. Import the repo at [vercel.com](https://vercel.com) — since it is a static website, Vercel will deploy it in seconds with a free `.vercel.app` URL and free HTTPS.

### Option 2: Netlify Drop (Zero Terminal required)
1. Zip the `anniversary-website/` folder.
2. Visit [app.netlify.com/drop](https://app.netlify.com/drop) and drag the folder into the browser.
3. You immediately get a live public shareable link!

### Option 3: GitHub Pages
1. Push the repo to GitHub.
2. In the repository settings under **Pages**, select the `main` branch root.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.
