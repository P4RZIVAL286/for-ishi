/**
 * ------------------------------------------------------------------
 * ANNIVERSARY CONFIGURATION: LDR & "OUR FIRSTS" EDITION
 * ------------------------------------------------------------------
 * Soft Botanical / Sage Green aesthetic with LDR countdown to Jan 1st!
 * You can edit any details, memories, or dates below.
 */

window.ANNIVERSARY_CONFIG = {
  // Couple Information
  herName: "My Love",        // Change to her name or nickname
  yourName: "Yours Truly",   // Change to your name
  startDate: "2024-05-14T00:00:00", // Start of relationship (6 months ago)
  anniversaryDate: "2024-11-14",    // 6-Month Anniversary date
  
  // Special LDR Milestone: The In-Person Meeting Date!
  meetingDate: "2025-01-01T00:00:00", // January 1st in-person meeting!
  meetingCity: "Our First Meeting Place", // e.g. Airport, City, etc.

  // Music Settings
  music: {
    title: "Our Song",
    artist: "Six Months & Counting to Jan 1st",
    src: "assets/audio/our-song.mp3"
  },

  // Chapter 1: "Our Firsts" Timeline (Replacing generic months)
  timeline: [
    {
      month: "First 01",
      tag: "Where It Began",
      date: "May 2024",
      title: "Our Very First Message",
      caption: "A simple notification that turned into hours of nonstop typing. From the very first day, talking to you felt like coming home.",
      accent: "#557A66",
      imagePlaceholder: "💬",
      image: "assets/images/first1.jpg"
    },
    {
      month: "First 02",
      tag: "Hearing You",
      date: "May 2024",
      title: "Our First Voice Call",
      caption: "Hearing your real laugh for the first time. I remember smiling so hard my cheeks hurt, and I didn't want to hang up.",
      accent: "#7B9E8C",
      imagePlaceholder: "🎙️",
      image: "assets/images/first2.jpg"
    },
    {
      month: "First 03",
      tag: "All-Night Talk",
      date: "June 2024",
      title: "Our First Sleep Call",
      caption: "Falling asleep together with the call still connected. Listening to your soft breathing made hundreds of miles disappear.",
      accent: "#E2B86E",
      imagePlaceholder: "🌙",
      image: "assets/images/first3.jpg"
    },
    {
      month: "First 04",
      tag: "Movie Date",
      date: "July 2024",
      title: "Our First Virtual Movie Night",
      caption: "Pressing play at the exact same second, sharing popcorn through the screen, and spending more time looking at you than the movie.",
      accent: "#557A66",
      imagePlaceholder: "🍿",
      image: "assets/images/first4.jpg"
    },
    {
      month: "First 05",
      tag: "The Big Words",
      date: "August 2024",
      title: "The First 'I Love You'",
      caption: "The moment that made my heart race. Saying it out loud and hearing you say it back was the best feeling in the world.",
      accent: "#EFA6AA",
      imagePlaceholder: "💚",
      image: "assets/images/first5.jpg"
    },
    {
      month: "First 06",
      tag: "Next Big First",
      date: "January 1, 2025",
      title: "Our First In-Person Hug",
      caption: "The countdown is ticking. On January 1st, the distance ends and we finally hold each other in real life. I can't wait.",
      accent: "#2E6B47",
      imagePlaceholder: "✈️",
      image: "assets/images/first6.jpg"
    }
  ],

  // Chapter 2: Digital Keepsakes & First Photos (Tap to Flip 3D)
  polaroids: [
    {
      id: "p1",
      rotation: "-2deg",
      washiColor: "washi-sage",
      caption: "The first picture you sent me",
      date: "May 2024",
      location: "Saved to favorites instantly",
      backNote: "I stared at this picture for so long thinking, 'How is someone this gorgeous talking to me?'",
      image: "assets/images/photo1.jpg",
      symbol: "📸"
    },
    {
      id: "p2",
      rotation: "2.5deg",
      washiColor: "washi-mint",
      caption: "Our FaceTime smile screenshot",
      date: "June 2024",
      location: "Late night video call",
      backNote: "You caught me looking at you like an idiot. My favorite sight in the world.",
      image: "assets/images/photo2.jpg",
      symbol: "📱"
    },
    {
      id: "p3",
      rotation: "-3deg",
      washiColor: "washi-honey",
      caption: "Matching songs & shared screen",
      date: "July 2024",
      location: "Our digital universe",
      backNote: "Listening to our favorite playlist together across the miles.",
      image: "assets/images/photo3.jpg",
      symbol: "🎧"
    },
    {
      id: "p4",
      rotation: "2deg",
      washiColor: "washi-blush",
      caption: "Silly faces & laughing fits",
      date: "September 2024",
      location: "Mid-call candid",
      backNote: "No filters, no pretending—just complete comfort with you.",
      image: "assets/images/photo4.jpg",
      symbol: "🧸"
    },
    {
      id: "p5",
      rotation: "-1.5deg",
      washiColor: "washi-sage",
      caption: "Countdown to January 1st",
      date: "Jan 1, 2025",
      location: "Arrival gate",
      backNote: "The moment I see you walking toward me in person will be the happiest second of my life.",
      image: "assets/images/photo5.jpg",
      symbol: "✈️"
    },
    {
      id: "p6",
      rotation: "1.8deg",
      washiColor: "washi-mint",
      caption: "Six months strong",
      date: "November 14, 2024",
      location: "Half-a-year milestone",
      backNote: "Distance proved how strong our love is. Nothing can replace what we have.",
      image: "assets/images/photo6.jpg",
      symbol: "🌿"
    }
  ],

  // Chapter 3: "Open When..." Letters (Adapted for LDR)
  openWhenLetters: [
    {
      id: "distance-heavy",
      label: "Open When...",
      title: "The Distance Feels Too Heavy",
      stamp: "🌍",
      colorClass: "env-sage",
      teaser: "For the quiet days when you just wish I were standing right beside you.",
      letter: `My beautiful girl,\n\nI know how hard the distance can feel sometimes. Some days, a screen just isn't enough, and you crave a real hug and physical presence. I feel it too, more than words can say.\n\nWhenever the miles feel heavy, please remember: distance is temporary, but what we are building is permanent. Every single second brings us closer to January 1st.\n\nTake a deep breath and put your hand over your heart. That warmth is me loving you from afar. Text me '💚' right now so I can send you a voice note!`
    },
    {
      id: "jan1-countdown",
      label: "Open When...",
      title: "You're Counting Down to Jan 1st",
      stamp: "✈️",
      colorClass: "env-mint",
      teaser: "A reminder of everything that awaits us on our first meeting day.",
      letter: `Hey love,\n\nCan you picture January 1st? Because I think about it every single day.\n\nThe moment I see you at the arrival gate, I'm not letting you go. No screens, no Wi-Fi lags, no time limits. Just you and me, finally in the same room, holding hands and laughing in real life.\n\nWe have conquered every mile together. The wait is going to make that first hug the sweetest thing either of us has ever known. It's coming so soon!`
    },
    {
      id: "cant-sleep-ldr",
      label: "Open When...",
      title: "You Can't Sleep at Night",
      stamp: "🌙",
      colorClass: "env-twilight",
      teaser: "Comforting words for late night overthinking when the house is quiet.",
      letter: `Sweetheart,\n\nLate nights are the hardest part of long distance. If your mind is racing or you feel lonely in bed, know that I am looking up at the exact same moon thinking about you.\n\nClose your eyes and imagine me tucking you in, smoothing your hair, and whispering how proud I am of you. You are safe in my heart, always.\n\nRest your eyes, sleep gently, and wake up knowing you are deeply and fiercely loved.`
    },
    {
      id: "reassurance-ldr",
      label: "Open When...",
      title: "You Need Reassurance",
      stamp: "🤍",
      colorClass: "env-honey",
      teaser: "For when doubts or overthinking sneak in.",
      letter: `My favorite person,\n\nLet me make this crystal clear: no distance, no time zone, and no number of miles could ever weaken what I feel for you. I don't look around; my heart is completely and happily settled on you.\n\nYou are not just someone I talk to on the phone. You are my future, my peace, and my partner. I choose you over anyone closer, because nobody on this earth compares to you.\n\nYou have all of me.`
    },
    {
      id: "want-to-smile-ldr",
      label: "Open When...",
      title: "You Want to Smile",
      stamp: "☀️",
      colorClass: "env-blush",
      teaser: "A pocket of green sunshine and our favorite silly moments.",
      letter: `Hello angel!\n\nJust popping into your screen to remind you that you are the cutest, funniest, and most radiant girl I know.\n\nRemember that call where we laughed so hard at nothing that tears were streaming down? Or that silly voice you make? I love every single piece of you.\n\nNow give this screen your biggest, sweetest smile. That smile is my whole world! 😊🌿`
    }
  ],

  // Chapter 4: Vouchers (LDR & Jan 1st In-Person Offers)
  vouchers: [
    {
      id: "vouch-first-hug",
      number: "VOUCHER #001",
      title: "The First In-Person Airport Hug",
      badge: "JAN 1ST EXCLUSIVE",
      icon: "heart",
      description: "Redeemable the exact second we meet on January 1st. No time limit—you decide when we let go.",
      terms: "Guaranteed 100% warmth, forehead kisses, and never-ending embrace.",
      claimedText: "First hug locked in! January 1st cannot come soon enough."
    },
    {
      id: "vouch-food-delivery",
      number: "VOUCHER #002",
      title: "Long-Distance Food Delivery",
      badge: "COMFORT FOOD",
      icon: "utensils",
      description: "Any snack, sweet treat, boba, or dinner delivered directly to your doorstep tonight on my tab.",
      terms: "Send me your craving and your address, and I take care of the rest.",
      claimedText: "Cravings unlocked! Delivery is on the way."
    },
    {
      id: "vouch-first-date",
      number: "VOUCHER #003",
      title: "Our Very First Real-Life Date",
      badge: "VIP JANUARY 1ST",
      icon: "sparkles",
      description: "You make zero decisions. I plan our first in-person lunch/dinner, activities, and surprises.",
      terms: "All you need to do is show up, be yourself, and look stunning as always.",
      claimedText: "First real date booked! Get ready to be spoiled."
    },
    {
      id: "vouch-sleep-call",
      number: "VOUCHER #004",
      title: "All-Night Sleep Call",
      badge: "LDR ESSENTIAL",
      icon: "moon",
      description: "A continuous voice or video call all night until morning, with zero rush to hang up.",
      terms: "Includes soft bedtime talks and waking up together.",
      claimedText: "Sleep call activated! Plug your charger in."
    },
    {
      id: "vouch-hand-hold",
      number: "VOUCHER #005",
      title: "Hold Hands For The First Time",
      badge: "FIRST TOUCH",
      icon: "hand",
      description: "Fingers intertwined in real life as we take our very first walk together.",
      terms: "Valid from January 1st onwards for as long as we walk.",
      claimedText: "First handhold reserved! My hand is already waiting for yours."
    },
    {
      id: "vouch-care-package",
      number: "VOUCHER #006",
      title: "Surprise Care Package in the Mail",
      badge: "PHYSICAL GIFT",
      icon: "package",
      description: "A customized physical package with your favorite snacks, a handwritten letter, and a surprise.",
      terms: "Sent straight to your mailbox with love.",
      claimedText: "Care package queued! Keep an eye on your mailbox."
    },
    {
      id: "vouch-reassure",
      number: "VOUCHER #007",
      title: "Emergency Overthinking Remedy",
      badge: "24/7 SUPPORT",
      icon: "shield-check",
      description: "Instant phone call or voice memo whenever distance makes you feel anxious or down.",
      terms: "Redeemable anytime day or night. You are always my top priority.",
      claimedText: "Overthinking remedy active! I am always one tap away."
    },
    {
      id: "vouch-you-win",
      number: "VOUCHER #008",
      title: "The 'You Win Any Argument' Pass",
      badge: "WILDCARD PASS",
      icon: "crown",
      description: "Instantly win any playful debate or disagreement with zero counter-arguments allowed.",
      terms: "One-time use. Must be wielded with that cute smug smile!",
      claimedText: "Pass redeemed! You are officially 100% right."
    }
  ],

  // Chapter 5: Affection Jar Notes (LDR Themed)
  jarNotes: [
    "The way your face lights up on video calls whenever you see me.",
    "How you make 1,000 miles feel like zero miles just with your voice.",
    "Your laugh through my earphones that instantly melts all my stress away.",
    "The sleepy little 'good mornings' you send me before you start your day.",
    "How committed, loyal, and loving you are, even across the distance.",
    "Thinking about how lucky I will be when I finally get to hug you on Jan 1st.",
    "Your adorable photos that I secretly save and look at when I miss you.",
    "How safe and peaceful my heart feels knowing you are mine.",
    "The way we can sit on FaceTime in silence for hours and it's still perfect.",
    "Your favorite color green, and how everything green now reminds me of you.",
    "The fact that distance has only made my love for you grow deeper each day.",
    "Your kind heart, your empathy, and the beautiful soul you have.",
    "Counting down the days until January 1st when our screen becomes real life.",
    "Just being you. Loving you is the easiest choice of my life."
  ],

  // Golden Scratch Ticket Hidden Promise
  scratchSecret: {
    title: "✨ A Secret Anniversary Promise ✨",
    message: "Distance has tested us, but it only proved that our connection is real, deep, and unbreakable. On January 1st, we start our next chapter in person. I promise to cherish every second with you. Happy 6 Months, baby!",
    reward: "Redeem this for our very first in-person dessert date on January 1st!"
  },

  // Chapter 6: Personal Anniversary Letter
  letter: {
    salutation: "To My Dearest Girlfriend,",
    date: "November 14, 2024",
    paragraphs: [
      "Six months ago, we started this journey across the distance, and every single day since has proven to me that you are worth every mile, every quiet night, and every second of waiting.",
      "Loving you from afar has taught me what true connection means. We don't have the luxury of holding hands every day, but what we have built with our words, our honesty, and our hearts is stronger than anything physical distance could ever challenge.",
      "Thank you for being my comfort through the phone, my favorite notification, and the sweetest part of every day. Thank you for your patience, your trust, and for choosing me again and again.",
      "January 1st is right around the corner. Soon, the screens will close, the countdown will hit zero, and I will finally get to look into your eyes in real life and wrap my arms around you.",
      "Happy 6-Month Anniversary, my love. Half a year down, forever to go."
    ],
    closing: "Forever counting down the days,",
    signature: "Yours Always 💚"
  }
};
