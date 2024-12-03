document.addEventListener("DOMContentLoaded", () => {
  const text = `I’ve always believed that music is more than just sound—it’s a language, a storyteller, and an emotional catalyst. As someone deeply passionate about both music and design, I wanted to create a space where these two worlds collide, a place that feels as immersive and personal as my connection to the songs and visuals I love. This website is more than just a project; it’s a reflection of the emotions, creativity, and inspiration I’ve drawn from music over the years.

Every song I’ve chosen carries a story, a memory, or a feeling that has shaped me in some way. Whether it’s the haunting melodies that helped me navigate difficult times or the upbeat tracks that made me feel alive on my best days, these songs are part of my personal journey. Through this website, I wanted to share not just the music itself but the visual and emotional experience that comes with it.

Design plays such an important role in how we experience and interpret the world, and I see this website as a way to showcase the powerful intersection of sound and visuals. I’ve carefully curated each section to reflect my creative vision—whether it’s through dynamic layouts, interactive elements, or the subtle use of colors and textures that echo the mood of the songs. My goal was to create something that feels not only beautiful but also deeply personal, inviting others to step into my world and perhaps find a connection to their own.

Ultimately, I hope this site inspires others to dive deeper into music, to listen not just with their ears but with their hearts, and to see how music and design can transform ordinary moments into something extraordinary. This is my love letter to music and creativity, a space where stories, emotions, and art come together to create something that I hope resonates with others as much as it does with me.`;

  const typedTextElement = document.getElementById("typed-text");
  let charIndex = 0;

  function typeEffect() {
    if (charIndex < text.length) {
      typedTextElement.textContent += text[charIndex];
      charIndex++;
      setTimeout(typeEffect, 40);
    }
  }

  typeEffect();
});
