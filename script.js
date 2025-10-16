
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("response").textContent = `شكرًا لك ${name}, تم استلام رسالتك!`;
    
    document.getElementById("contactForm").reset();
});
