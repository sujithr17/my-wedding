const weddingDate = new Date("2026-12-23T07:56:00+05:30").getTime();
function tick(){let d=Math.max(0,weddingDate-Date.now());const v={days:Math.floor(d/86400000),hours:Math.floor(d%86400000/3600000),minutes:Math.floor(d%3600000/60000),seconds:Math.floor(d%60000/1000)};for(const [k,n] of Object.entries(v))document.getElementById(k).textContent=String(n).padStart(2,"0")}
tick();setInterval(tick,1000);
document.getElementById("shareButton").addEventListener("click",()=>{const msg=`We warmly invite you to celebrate the wedding of Swathy T & Sujith R on Wednesday, 23 December 2026.

Thalikettu: 7:56–8:20 AM — Sri Ramapuram Vishnu Temple, Vadakkanthara.
Wedding function: 10:30–11:30 AM — Aswathy Kalyana Mandapam, Vadakkanthara.
Reception: 4:30–8:00 PM — Gowri Sankar Kalyanamandapam, Vadavannur.

Join us: ${location.href}`;window.open("https://wa.me/?text="+encodeURIComponent(msg),"_blank","noopener")});
document.getElementById("calendarButton").addEventListener("click",()=>{const events=[
["20261223T022600Z","20261223T025000Z","Thalikettu — Swathy & Sujith","Sri Ramapuram Vishnu Temple, Vadakkanthara, Palakkad","https://maps.app.goo.gl/6zCLAsy8S4JncHFW9"],
["20261223T050000Z","20261223T060000Z","Wedding function — Swathy & Sujith","Aswathy Kalyana Mandapam, Vadakkanthara, Palakkad","https://maps.app.goo.gl/wThRHEP8HTyiFEzS6"],
["20261223T110000Z","20261223T143000Z","Wedding reception — Swathy & Sujith","Gowri Sankar Kalyanamandapam, Vadavannur, Palakkad","https://maps.app.goo.gl/HLoKAC3BK25oyogK7"]];
const body=events.map((e,i)=>`BEGIN:VEVENT\r\nUID:swathy-sujith-${i}@wedding\r\nDTSTART:${e[0]}\r\nDTEND:${e[1]}\r\nSUMMARY:${e[2]}\r\nLOCATION:${e[3]}\r\nDESCRIPTION:Directions: ${e[4]}\r\nEND:VEVENT`).join("\r\n");
const ics=`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Swathy and Sujith//Wedding//EN\r\nCALSCALE:GREGORIAN\r\n${body}\r\nEND:VCALENDAR`;
const blob=new Blob([ics],{type:"text/calendar;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="swathy-sujith-wedding-events.ics";a.click();URL.revokeObjectURL(url)});