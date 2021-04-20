
// This function will execute AFTER the entire page is loaded.
window.onload = function() {

    let myHeader = document.querySelector(".home");
    

    // Listen for an event. We want to listen to clicks on the myHeader element.
    myHeader.addEventListener("click", function() {
        alert("Ouch!");
    })

}



