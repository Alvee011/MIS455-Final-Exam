function connect() {
    var search = document.getElementById("userInput").value;
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));

}

function display(data) {
    var allArrayData = data.meals;
    var oldContent = document.getElementById("displayArea");
    oldContent.textContent = "";

    for (var i = 1; i <= allArrayData.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Meal Title: <b> ${allArrayData[i - 1].strMeal} </b><br>
                           <img src="${allArrayData[i - 1].strMealThumb}">  <br> 
                           Meal Country: ${allArrayData[i - 1].strCountry}  <br>
                           Meal Category: ${allArrayData[i - 1].strCategory}`;

        newDiv.classList.add("innerStyle");
        oldContent.appendChild(newDiv);

    }




}