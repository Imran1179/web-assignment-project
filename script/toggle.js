
// smoothly browse the website ... click the nav buttons

function openPortfolio() {
    const faqSection = document.getElementById("faqHolder");
    if (faqHolder) {
        faqHolder.scrollIntoView({ behavior: "smooth" });
    }
}


function openExperience() {
    const experience = document.getElementById("experiences");
    if (experience) {
        experience.scrollIntoView({ behavior: "smooth" });
    }
}
function openHire() {
    const hire = document.getElementById("hire");
    if (hire) {
        hire.scrollIntoView({ behavior: "smooth" });
    }
}

