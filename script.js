var allArrayData = [];

function connect() {
    var search = document.getElementById("userInput").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));
}

function display(data) {
    allArrayData = data.meals;
    var oldContent = document.getElementById("displayArea");
    var showAllContent = document.getElementById("showAllArea");

    // clear previous results
    oldContent.textContent = "";
    showAllContent.textContent = "";

    if (allArrayData == null) {
        oldContent.innerHTML = "<h3>No meals found!</h3>";
        return;
    }

    // if more than 5 results, show only 5 first
    var limit = allArrayData.length;
    if (limit > 5) {
        limit = 5;
    }

    for (var i = 0; i < limit; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal ID: <b>${allArrayData[i].idMeal}</b> <br>
                            Meal Name: <b>${allArrayData[i].strMeal}</b> <br>
                            <img src="${allArrayData[i].strMealThumb}"> <br>
                            Meal Title: ${allArrayData[i].strCategory} <br>
                            Cooking Instructions: <p>${allArrayData[i].strInstructions}</p>`;

        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);
    }

    // Add SHOW ALL button if more than 5 results exist
    if (allArrayData.length > 5) {
        var btn = document.createElement("button");
        btn.textContent = "SHOW ALL";
        btn.onclick = showAll;
        showAllContent.appendChild(btn);
    }
}

function showAll() {
    var oldContent = document.getElementById("displayArea");
    var showAllContent = document.getElementById("showAllArea");

    for (var i = 5; i < allArrayData.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal ID: <b>${allArrayData[i].idMeal}</b> <br>
                            Meal Name: <b>${allArrayData[i].strMeal}</b> <br>
                            <img src="${allArrayData[i].strMealThumb}"> <br>
                            Meal Title: ${allArrayData[i].strCategory} <br>
                            Cooking Instructions: <p>${allArrayData[i].strInstructions}</p>`;

        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);
    }

    // remove the button after clicking
    showAllContent.textContent = "";
}