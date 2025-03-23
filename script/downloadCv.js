document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = ""; // সঠিক URL দিন
    link.setAttribute("download", "Imran_CV.pdf"); // ফাইল নাম সেট করুন
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
