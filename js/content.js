/**
 * ------------------------------------------------------------------
 * ANNIVERSARY WEBSITE CONFIGURATION & CONTENT
 * ------------------------------------------------------------------
 * You can personalize every single piece of content, image, date,
 * and message here! The website updates automatically.
 */

window.ANNIVERSARY_CONFIG = {
  // Couple Information
  herName: "My Love", // Change to her name or nickname (e.g. "Babe", "Sophia", "Princess")
  yourName: "Yours Truly", // Change to your name
  startDate: "2024-05-14T00:00:00", // Start date of your relationship (YYYY-MM-DD)
  anniversaryDate: "2024-11-14", // 6-month anniversary milestone
  
  // Audio & Music Settings
  // Tip: Put an mp3 in 'assets/audio/our-song.mp3' or use an external URL.
  // If left empty or file is missing, a sweet romantic ambient melody will be synthesized automatically!
  music: {
    title: "Our Song",
    artist: "Six Months Together",
    src: "assets/audio/our-song.mp3"
  },

  // Chapter 1: The 6-Month Timeline
  timeline: [
    {
      month: "Month 1 • May",
      tag: "Where It All Began",
      date: "May 14, 2024",
      title: "The First Spark",
      caption: "From our very first conversation, everything felt natural. That day marked the beginning of my favorite chapter.",
      accent: "#E07A5F",
      imagePlaceholder: "🌸",
      image: "assets/images/month1.jpg"
    },
    {
      month: "Month 2 • June",
      tag: "First Adventures",
      date: "June 2024",
      title: "Unstoppable Laughter",
      caption: "Getting to know the quirks that make you so uniquely you. Time seemed to fly every time we were together.",
      accent: "#819875",
      imagePlaceholder: "🌿",
      image: "assets/images/month2.jpg"
    },
    {
      month: "Month 3 • July",
      tag: "Deep Conversations",
      date: "July 2024",
      title: "Midnight Confessions",
      caption: "Talking until the stars faded. Realizing that you weren't just someone special, but someone I could trust with my whole heart.",
      accent: "#F4A261",
      imagePlaceholder: "🌙",
      image: "assets/images/month3.jpg"
    },
    {
      month: "Month 4 • August",
      tag: "Comfort & Peace",
      date: "August 2024",
      title: "Feeling Like Home",
      caption: "Even doing nothing together became the best part of my week. You became my comfort person.",
      accent: "#D96B75",
      imagePlaceholder: "☕",
      image: "assets/images/month4.jpg"
    },
    {
      month: "Month 5 • September",
      tag: "Everyday Magic",
      date: "September 2024",
      title: "The Little Things",
      caption: "Shared playlists, secret glances, and inside jokes that only you and I understand.",
      accent: "#7A9A8B",
      imagePlaceholder: "✨",
      image: "assets/images/month5.jpg"
    },
    {
      month: "Month 6 • October & November",
      tag: "Half a Year Milestone",
      date: "November 14, 2024",
      title: "Still Choosing You",
      caption: "Six months of holding your hand, and I still fall for you a little more every single day.",
      accent: "#D96B75",
      imagePlaceholder: "💖",
      image: "assets/images/month6.jpg"
    }
  ],

  // Chapter 2: Polaroid Memory Wall (Tap to Flip 3D)
  polaroids: [
    {
      id: "p1",
      rotation: "-2deg",
      washiColor: "washi-rose",
      caption: "That smile I fell for",
      date: "May 2024",
      location: "Where we first met",
      backNote: "You looked so radiant. I remember thinking how lucky I was that you said yes.",
      image: "assets/images/photo1.jpg",
      symbol: "📸"
    },
    {
      id: "p2",
      rotation: "3deg",
      washiColor: "washi-sage",
      caption: "Our favorite coffee date",
      date: "July 2024",
      location: "Our cozy spot",
      backNote: "You stole my drink halfway through and gave me that cheeky grin.",
      image: "assets/images/photo2.jpg",
      symbol: "☕"
    },
    {
      id: "p3",
      rotation: "-3deg",
      washiColor: "washi-gold",
      caption: "Golden hour with you",
      date: "August 2024",
      location: "Sunset stroll",
      backNote: "The sunset was gorgeous, but honestly, I couldn't stop looking at you.",
      image: "assets/images/photo3.jpg",
      symbol: "🌅"
    },
    {
      id: "p4",
      rotation: "2.5deg",
      washiColor: "washi-rose",
      caption: "The big adventure day",
      date: "September 2024",
      location: "Weekend getaway",
      backNote: "We got slightly lost, but with you by my side, every wrong turn was perfect.",
      image: "assets/images/photo4.jpg",
      symbol: "🚗"
    },
    {
      id: "p5",
      rotation: "-1.5deg",
      washiColor: "washi-sage",
      caption: "Lazy cozy Sunday",
      date: "October 2024",
      location: "Warm blankets & you",
      backNote: "Wrapped up, watching movies, and listening to you softly breathing asleep.",
      image: "assets/images/photo5.jpg",
      symbol: "🧸"
    },
    {
      id: "p6",
      rotation: "1.8deg",
      washiColor: "washi-gold",
      caption: "Here's to us, always",
      date: "November 2024",
      location: "6 Months Milestone",
      backNote: "The best 6 months of my life. And this is only the beginning.",
      image: "assets/images/photo6.jpg",
      symbol: "💫"
    }
  ],

  // Chapter 3: "Open When..." Interactive Letters
  openWhenLetters: [
    {
      id: "miss-me",
      label: "Open When...",
      title: "You Miss Me",
      stamp: "💌",
      colorClass: "env-rose",
      teaser: "For when distance or a busy day feels a little too heavy.",
      letter: `My favorite person,\n\nIf you're reading this, I'm probably missing you just as much right now. Remember that no matter how many miles, busy hours, or quiet spaces are between us, you are always in my thoughts.\n\nClose your eyes for three seconds, take a deep breath, and remember the way my arms wrap around you. You are loved, you are mine, and I'll see you so soon.\n\nText me right now with a "❤️" so I know you opened this!`
    },
    {
      id: "sad",
      label: "Open When...",
      title: "You're Having a Sad Day",
      stamp: "🌧️",
      colorClass: "env-sage",
      teaser: "A gentle hug in words for when things feel overwhelming.",
      letter: `Hey love,\n\nI wish I could be right there to wrap a blanket around your shoulders and make everything softer for you. It's okay to feel tired, heavy, or down sometimes.\n\nYou don't have to be strong all the time. Your feelings are valid, and whatever is weighing on you right now will pass. You are one of the most resilient, beautiful souls I have ever known.\n\nLet me carry some of the weight today. I'm here, I'm listening, and I'm not going anywhere.`
    },
    {
      id: "cant-sleep",
      label: "Open When...",
      title: "You Can't Sleep",
      stamp: "🌙",
      colorClass: "env-twilight",
      teaser: "Soft thoughts and gentle reassurance for late quiet nights.",
      letter: `Sweetheart,\n\nLate nights have a way of making thoughts feel louder than they are. Put your phone down after this, turn off the lights, and let your mind rest.\n\nThink about our happiest memories: the laughs we couldn't stop, the quiet warmth of your hand in mine, and all the sunny mornings we have waiting for us ahead.\n\nSleep peacefully, knowing you are deeply cherished. Sweet dreams, my angel.`
    },
    {
      id: "reassurance",
      label: "Open When...",
      title: "You Need Reassurance",
      stamp: "🤍",
      colorClass: "env-cream",
      teaser: "A reminder of how certain and whole my love for you is.",
      letter: `My dearest,\n\nIf your mind is overthinking or doubts are creeping in, let me say this loud and clear: I choose you. Today, tomorrow, and every day that follows.\n\nYou are not hard to love. Loving you is the easiest, most natural thing I have ever done. You bring so much peace and light into my life, and I am proud beyond words to be your partner.\n\nNever doubt your place in my heart—it belongs entirely to you.`
    },
    {
      id: "want-to-smile",
      label: "Open When...",
      title: "You Want to Smile",
      stamp: "☀️",
      colorClass: "env-gold",
      teaser: "A little pocket of sunshine and our favorite silly moments.",
      letter: `Hello beautiful!\n\nDid you know that whenever you smile, my heart does that stupid happy flutter? Seriously, you have the cutest laugh on the entire planet.\n\nRemember when we couldn't stop laughing at that ridiculous thing? Just wanted to remind you that you are ridiculously cute, utterly wonderful, and you make this world 1,000% brighter just by existing.\n\nNow give the screen a big smile for me right now! 😊`
    }
  ],

  // Chapter 4: Interactive Claimable Vouchers
  vouchers: [
    {
      id: "vouch-cuddle",
      number: "VOUCHER #001",
      title: "Unlimited Cuddle Session",
      badge: "NON-EXPIRING",
      icon: "heart",
      description: "Redeemable for unlimited hugs, back rubs, and being held until you fall asleep or say so.",
      terms: "Valid anywhere, anytime. Blanket nest and warm tea included on request.",
      claimedText: "Cuddle pass claimed! Get ready for maximum warmth."
    },
    {
      id: "vouch-date",
      number: "VOUCHER #002",
      title: "Date Night Fully Planned By Me",
      badge: "VIP EXPERIENCE",
      icon: "sparkles",
      description: "You don't make a single decision. I plan the food, the vibe, the timing, and all the surprises.",
      terms: "You just get dressed up, look stunning as always, and enjoy.",
      claimedText: "Date planned! All you need to do is show up looking gorgeous."
    },
    {
      id: "vouch-food",
      number: "VOUCHER #003",
      title: "Your Favorite Comfort Food Treat",
      badge: "TASTY",
      icon: "utensils",
      description: "Whatever sweet treat, boba, takeout, or comfort meal you're craving right now—it's on me.",
      terms: "Zero judgment on portion size or midnight cravings.",
      claimedText: "Cravings unlocked! Prepare your appetite."
    },
    {
      id: "vouch-movie",
      number: "VOUCHER #004",
      title: "Movie Night of Your Choice",
      badge: "ENTERTAINMENT",
      icon: "film",
      description: "You pick whatever movie or show you want—even if it's cheesy or something I've watched twice.",
      terms: "Guaranteed no complaints and endless popcorn refill.",
      claimedText: "Movie choice is yours! I promise no spoilers."
    },
    {
      id: "vouch-massage",
      number: "VOUCHER #005",
      title: "One Relaxing Tension Massage",
      badge: "WELLNESS",
      icon: "feather",
      description: "A gentle shoulder, back, or foot massage to melt away all the stress of a long day.",
      terms: "Includes relaxing music and zero time limits until you relax.",
      claimedText: "Massage booked! Ultimate relaxation incoming."
    },
    {
      id: "vouch-reassure",
      number: "VOUCHER #006",
      title: "Emergency Reassurance Session",
      badge: "PRIORITY CARE",
      icon: "shield-check",
      description: "Whenever you feel anxious or low, I will drop what I'm doing and remind you how loved you are.",
      terms: "Can be redeemed 24/7/365. You are always my top priority.",
      claimedText: "Reassurance pass active! I am always in your corner."
    },
    {
      id: "vouch-wish",
      number: "VOUCHER #007",
      title: "One Free Wish (Within Reason)",
      badge: "WILDCARD",
      icon: "gift",
      description: "A golden ticket for one special request of your choosing. Big or small, it's yours.",
      terms: "Must be granted with enthusiasm and a smile.",
      claimedText: "Your wish is my command! Think of something fun."
    },
    {
      id: "vouch-win-arg",
      number: "VOUCHER #008",
      title: "The 'You Are 100% Right' Pass",
      badge: "SPECIAL PASS",
      icon: "crown",
      description: "Instantly win any playful debate or disagreement with zero counter-arguments allowed.",
      terms: "One-time use. Must be wielded responsibly!",
      claimedText: "Crown claimed! You win automatically, no questions asked."
    }
  ],

  // Chapter 5: Affection Jar Notes
  jarNotes: [
    "The way your nose scrunches up when you laugh really hard.",
    "How safe and peaceful the whole world feels whenever I'm holding your hand.",
    "Your kindness and empathy toward animals and the people you care about.",
    "How you look in the morning with messy hair and soft sleepy eyes.",
    "The cute voice you make when you're excited about something small.",
    "How supportive you are whenever I have a tough day.",
    "The fact that my favorite place in the universe is simply wherever you are.",
    "How effortlessly you make ordinary errands feel like a fun date.",
    "Your taste in music and all the songs you've introduced to my life.",
    "The way you remember tiny details about things I mentioned weeks ago.",
    "Your warm hugs that instantly cure whatever bad mood I was in.",
    "The gentle way you look at me across a crowded room.",
    "How proud I feel every time I get to introduce you as my girlfriend.",
    "The little happy dances you do when your food arrives.",
    "Just being you. That's more than enough reason to love you forever."
  ],

  // Golden Scratch Ticket Hidden Message
  scratchSecret: {
    title: "✨ A Secret Anniversary Promise ✨",
    message: "You hold my whole heart. Thank you for 6 unforgettable months. My promise to you: I will love you louder on hard days, celebrate you on good days, and stand beside you through every day in between. Happy 6 Months, baby!",
    reward: "Redeem this for a special anniversary surprise date this weekend!"
  },

  // Chapter 6: Personal Handwritten Anniversary Letter
  letter: {
    salutation: "To My Dearest Girlfriend,",
    date: "November 14, 2024",
    paragraphs: [
      "Six months ago, we decided to take a chance on us, and looking back, it was the single best decision I have ever made. Time with you moves in the strangest, most beautiful way—six months feels like a warm blink, yet I already can't imagine my world without you in it.",
      "Thank you for your warmth, your patience, and your endless laughter. Thank you for the quiet moments on the couch just as much as the big adventures. You have made me a calmer, happier, and better version of myself simply by loving me the way you do.",
      "I love how we can talk about the deepest things in life or dissolve into giggles over something completely silly. You are my safe harbor, my favorite notification, and the sweetest part of my everyday life.",
      "Six months is just our first milestone. I cannot wait for all the seasons, trips, lazy mornings, and milestones that are still waiting for us in our story.",
      "Happy 6-Month Anniversary, my love."
    ],
    closing: "Forever and always yours,",
    signature: "With all my love ❤️"
  }
};
