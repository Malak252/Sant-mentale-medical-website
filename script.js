document.getElementById("startButton").addEventListener("click", function() {
    alert("Welcome to your free trial! Let's get started.");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Logged in successfully! View your reports and schedule.");
});

document.getElementById("listTests").addEventListener("click", function() {
    alert("Displaying list of available tests.");
});

document.getElementById("makeSchedule").addEventListener("click", function() {
    alert("Redirecting to scheduling page.");
});
