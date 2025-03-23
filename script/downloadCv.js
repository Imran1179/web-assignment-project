document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = ""; 
    link.setAttribute("download", "Imran_CV.pdf"); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
