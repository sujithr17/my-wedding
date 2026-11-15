
// =================================
// WEDDING COUNTDOWN
// =================================

const weddingDate = new Date("2026-12-23T16:30:00+05:30");

function updateCountdown() {
    const now = new Date();

    let diff = Math.max(0, weddingDate - now);

    const days = Math.floor(diff / 86400000);
    diff %= 86400000;

    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;

    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// =================================
// SHARE INVITATION
// =================================

const shareButton = document.getElementById("shareButton");

if (shareButton) {
    shareButton.addEventListener("click", async () => {
        const data = {
            title: "Sujith & Swathy — Wedding Reception",
            text: "Join us to celebrate the wedding reception of Sujith R & Swathy T on 23 December 2026, 4:30 PM–8:00 PM at Gowri Sankar Kalyanamandapam, Vadavannur, Palakkad.",
            url: location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(data);
            } catch (error) {
                // Sharing cancelled or unavailable
            }
        } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(
                data.text + " " + data.url
            );
            alert("Invitation details copied!");
        }
    });
}


// =================================
// CALENDAR DOWNLOAD (OPTIONAL)
// =================================

const calendarButton = document.getElementById("calendarButton");

if (calendarButton) {
    calendarButton.addEventListener("click", () => {
        const ics = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//Sujith and Swathy//Wedding Reception//EN",
            "BEGIN:VEVENT",
            "UID:sujith-swathy-reception-20261223@example.com",
            "DTSTAMP:20260101T000000Z",
            "DTSTART:20261223T110000Z",
            "DTEND:20261223T143000Z",
            "SUMMARY:Wedding Reception - Sujith R and Swathy T",
            "LOCATION:Gowri Sankar Kalyanamandapam, Vadavannur, Palakkad, Kerala",
            "DESCRIPTION:Wedding reception of Sujith R and Swathy T.",
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\r\n");

        const blob = new Blob([ics], {
            type: "text/calendar;charset=utf-8"
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");

        a.href = url;
        a.download = "Sujith-and-Swathy-Reception.ics";
        a.click();

        URL.revokeObjectURL(url);
    });
}


// =================================
// SCROLL REVEAL ANIMATIONS
// =================================

document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        "main > section"
    );

    // Add reveal class to each main section
    elements.forEach((element) => {
        element.classList.add("reveal");
    });

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => {
            element.classList.add("active");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");

                    // Animate only once
                    observer.unobserve(entry.target);
                }

            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

});
