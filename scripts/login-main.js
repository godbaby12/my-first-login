function validatelogin() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value 
    const errorMessage = document.getElementById("error-message")

    // Simple validattion
    if (username === "user" && password === "pass") {
        errorMessage.style.color = "grean";
        errorMessage.textContent = "Login successful!";

        setTimeout(()=>{
            // window.location.href =`${window.location.pathname}/about-me.html`
            console.log(window.location)
        });

    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = 
        "Invalid username or password. Please try again!!!"
    }
}
