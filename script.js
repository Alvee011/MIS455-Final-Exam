function start() {
    var search = document.getElementById("userInput").value;
    var api = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(api)
        .then(res => res.json())
        .then(data => console.log(data));

}