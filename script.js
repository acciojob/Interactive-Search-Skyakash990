document.getElementById("searchButton").addEventListener("click", function() {
    let searchDiv = document.querySelector(".search");
    let searchInput = document.getElementById("searchInput");

    searchDiv.classList.add("active"); // Add active class
    searchInput.focus(); 
});
