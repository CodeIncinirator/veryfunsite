let bigData = [];
let running = true;

// Press ESC to stop
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    running = false;
    console.log("Stopped.");
  }
});

// Wait 1 second before starting
setTimeout(() => {
  console.log("Starting heavy load...");
  generate();
}, 1000);

let i = 0;

function generate() {
  if (!running) return;

  // BIG chunk size
  for (let j = 0; j < 50000; j++) {
    bigData.push({
      id: i,
      name: "file_" + i,
      // Heavy payload (adjust this to scale)
      content: "x".repeat(2000),
      meta: {
        time: Date.now(),
        random: Math.random().toString(36).repeat(5)
      }
    });
    i++;
  }

  console.log("Items:", bigData.length);

  // Keep pushing the browser hard but not instantly freezing
  setTimeout(generate, 0);
}
