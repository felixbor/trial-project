
var ingredient = ""
$(".search").on("click", function (event) {
    event.preventDefault()
    var ingredient = $("#selectD").val()
    console.log(ingredient)
    $(".result").empty();

    fetchDrink()



    function fetchDrink() {

        console.log(ingredient)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                displayDrinks(data.drinks)
            })
    }
})

function displayDrinks(data) {
    if (data.length >10){
        data.length=10
    }
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        $(".result").append(`<button>${element.strDrink}</button>`);
        
    }
   

  
    
}
$(".result").on("click", selectDrink)
function selectDrink(event) {
    var name = event.target.textContent
    fetchRecipe(name)


}

function fetchRecipe(name) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
   
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayRecipe(data)
        })

}
function displayRecipe(data) {
    $(".result").remove("p");
    $(".result").remove("p");
    var recipe = data.drinks[0].strInstructions
    var DrinkImage = data.drinks[0].strDrinkThumb
    for (const [key, value] of Object.entries(data.drinks[0])) {
      if(key.includes('strIngredient')){
        if (value!=null){$(".result").append(`<p>${value}</p>`)
    }
         console.log(value)
 }
    }
    for (const [key, value] of Object.entries(data.drinks[0])) {
        if(key.includes('strMeasure')){
          if (value!=null){$(".result").append(`<p>${value}</p>`)
      }
           console.log(value)
   }
      }

    console.log(DrinkImage)
   var picture ="https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg"
    $(".result").append(`<p>${recipe}</p>`+`<img src=${DrinkImage}>`);
 /*
    $(".result").append(`<button>${cocklic2}</button>`);
    $(".result").append(`<button>${cocklic3}</button>`);
    $(".result").append(`<button>${cocklic4}</button>`);
    $(".result").append(`<button>${cocklic5}</button>`);
    $(".result").append(`<button>${cocklic6}</button>`);
    $(".result").append(`<button>${cocklic7}</button>`);
    $(".result").append(`<button>${cocklic8}</button>`);
    $(".result").append(`<button>${cocklic9}</button>`);
    $(".result").append(`<button>${cocklic10}</button>`);
*/
}
/* document.getElementById("city").innerText = name;
 document.getElementById("temperature").innerText = temp + "°C";
 document.getElementById("humidity").innerText = humidity + "%"
 document.getElementById("wind").innerText = speed + "km/h";
 document.getElementById("condition").innerText = description;
 document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

*/
/*let codes = {
    "action": 28,
    "adventure": 12,
    "animation": 16,
    "comedy": 35,
    "crime": 80,
    "documentary": 99,
    "drama": 18,
    "family": 10751,
    "fantasy": 14,
    "history": 36,
    "horror": 27,
    "music": 10402,
    "mystery": 9648,
    "romance": 10749,
    "science": 878,
    "tv": 10770,
    "thriller": 53,
    "war": 10752,
    "western": 37
};

fetchDrink()
function fetchDrink() {

    var ingredient = "Gin"
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}


fetchMovie()
function fetchMovie() {
    
    
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=85bb4e2df2ca0ae4497039fe74f9a9ba&with_genres=${28}&page_1&sort_by=popularity.desc`)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}*/