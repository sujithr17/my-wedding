# Swathy & Sujith wedding website

Static mobile-friendly wedding invitation for 23 December 2026.

## Confirmed event details currently entered
- Thalikettu: 7:56–8:20 AM, Sri Ramapuram Vishnu Temple, Vadakkanthara, Palakkad.
- Bride-side wedding function: 10:30–11:30 AM, Aswathy Kalyana Mandapam, Vadakkanthara, Palakkad.
- Groom-side reception: 4:30–8:00 PM, Gowri Sankar Kalyanamandapam, Vadavannur, Palakkad.

Map links are the exact Google Maps links supplied by the couple. The calendar download includes all three events. The countdown counts down to the thalikettu start time (7:56 AM IST).

## Free publishing: Cloudflare Pages
1. Sign in/create an account at https://dash.cloudflare.com/
2. Open Workers & Pages → Create → Pages → Upload assets.
3. Upload the contents of this folder (not the ZIP itself, if the dashboard asks for files/folders).
4. Cloudflare publishes a free `*.pages.dev` URL with HTTPS.

You can also upload the folder to a GitHub repository and connect it to Cloudflare Pages for future automatic deployments.

## Background music
Place a licensed/owned MP3 file at `assets/wedding-music.mp3`. Visitors must tap Play because browsers block autoplay by default.

## Update details
Edit `index.html` for wording and `script.js` for event date/time or calendar details. The three map links are in `index.html` and calendar entries in `script.js`.
