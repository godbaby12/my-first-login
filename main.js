function buttonClick(age, lastname){
    console.log(`My age is ${age}`);
    console.warn(`My last name is ${lastname}`);
    //  alert ('Hello World');
}
function validatelogin() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value 
    const errorMessage = document.getElementById("error-message")

    // Simple validattion
    if (username === "user" && password === "pass") {
        errorMessage.style.color = "grean";
        errorMessage.textContent = "Login successful!";
    } else {
        errorMessage.style.color = "red";
        errorMessage.textContent = 
        "Invalid username or password. Please try again!!!"
    }
}