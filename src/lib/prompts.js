const roasts = {
  sassy: [
    "I'm not saying you're lazy, but if there was a competition for laziness, you'd probably send someone else to pick up the trophy for you.",
    "You have your entire life to be a jerk. Why not take today off?",
    "Your secrets are always safe with me. I never even listen when you tell me them.",
    "You're the reason the gene pool needs a lifeguard.",
    "If I had a face like yours, I'd sue my parents.",
  ],
  cute: [
    "You're so cute, it's distracting. Stop it.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a vegetable, you’d be a cute-cumber.",
    "I bet you sweat glitter.",
    "You're not a snack, you're the whole picnic.",
  ],
  "roast-hard": [
    "Your selfie game is strong, but your chin game is stronger. You have more chins than a Chinese phonebook.",
    "Is your name Wi-Fi? Because I'm feeling a connection, but it's probably just my low standards.",
    "I'd agree with you but then we’d both be wrong.",
    "You're not stupid; you just have bad luck when thinking.",
    "I was going to give you a nasty look, but I see you’ve already got one.",
  ],
  playful: [
    "You're like a human-sized participation trophy.",
    "If you were a spice, you'd be flour.",
    "I bet your favorite flavor of ice cream is 'vanilla'.",
    "You're the 'I' in 'team'. And probably the 'L' too.",
    "I'm jealous of people that don't know you.",
  ],
  hinglish: [
    "Your fashion sense is so bad, even a blind person would say 'dekh ke chalo bhai'.",
    "Tu itna single hai ki tere phone me bhi 'dual sim' ki jagah 'no sim' likha aata hai.",
    "Are you a parking ticket? 'Cause you've got 'fine' written all over you, but nobody wants you.",
    "Bhai, confidence ho toh tere jaisa, shakal jaise bhi ho, selfie lene se nahi darta.",
    "Tere jokes itne purane hai ki Harappa wale bhi sunke 'lol' bolte the.",
  ],
};

export const getMockRoast = (mood, name) => {
  const selectedMood = roasts[mood] || roasts.playful;
  const roast = selectedMood[Math.floor(Math.random() * selectedMood.length)];
  const personalizedRoast = name ? `${name}, ${roast.charAt(0).toLowerCase() + roast.slice(1)}` : roast;
  return personalizedRoast;
};