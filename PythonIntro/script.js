
document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(card => {
        const code = card.querySelector("pre");
        if (code) code.style.display = "none";
        card.addEventListener("click", () => {
            if (code) {
                code.style.display = code.style.display === "none" ? "block" : "none";
            }
        });
    });
});
