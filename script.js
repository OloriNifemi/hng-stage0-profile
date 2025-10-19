// 🌍 Format time to match your local timezone
const readableFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Africa/Lagos',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});

const readableEl = document.getElementById('user-time-readable');
const msEl = document.getElementById('user-time-ms');

// 🕒 Function to update readable + ms time
function updateTime() {
  const nowMs = Date.now();
  msEl.textContent = nowMs; // Milliseconds
  readableEl.textContent = readableFormatter.format(nowMs); // Readable time
}

// 🪄 Run immediately + update every second
updateTime();
setInterval(updateTime, 1000);
