const weddingDate = new Date("2026-12-23T07:56:00+05:30").getTime();
function tick() { let d = Math.max(0, weddingDate - Date.now()); const v = { days: Math.floor(d / 86400000), hours: Math.floor(d % 86400000 / 3600000), minutes: Math.floor(d % 3600000 / 60000), seconds: Math.floor(d % 60000 / 1000) }; for (const [k, n] of Object.entries(v)) document.getElementById(k).textContent = String(n).padStart(2, "0") }
tick(); setInterval(tick, 1000);
document.getElementById("shareButton").addEventListener("click", () => {
    const msg = `We warmly invite you to celebrate the wedding of Swathy T & Sujith R on Wednesday, 23 December 2026.

Thalikettu — Sri Ramapuram Vishnu Temple, Vadakkanthara.
Wedding function: 10:30–11:30 AM — Aswathy Kalyana Mandapam, Vadakkanthara.
Reception: 4:30–8:00 PM — Gowri Sankar Kalyanamandapam, Vadavannur.

Join us: ${location.href}`; window.open("https://wa.me/?text=" + encodeURIComponent(msg), "_blank", "noopener")
});
 