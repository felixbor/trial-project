
var ingredient = ""
$(".search").on("click", function (event) {
    event.preventDefault()
    var ingredient = $("select").val()
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
                displayDrinks(data)
            })
    }
})

function displayDrinks(data) {
    var cocklic1 = data.drinks[0].strDrink
    var cocklic2 = data.drinks[1].strDrink
    var cocklic3 = data.drinks[2].strDrink
    var cocklic4 = data.drinks[3].strDrink
    var cocklic5 = data.drinks[4].strDrink
    var cocklic6 = data.drinks[5].strDrink
    var cocklic7 = data.drinks[6].strDrink
    var cocklic8 = data.drinks[7].strDrink
    var cocklic9 = data.drinks[8].strDrink
    var cocklic10 = data.drinks[9].strDrink

    console.log(cocklic1)
    console.log(cocklic2)
    console.log(cocklic3)
    console.log(cocklic4)
    console.log(cocklic5)
    $(".result").append(`<button>${cocklic1}</button>`);
    $(".result").append(`<button>${cocklic2}</button>`);
    $(".result").append(`<button>${cocklic3}</button>`);
    $(".result").append(`<button>${cocklic4}</button>`);
    $(".result").append(`<button>${cocklic5}</button>`);
    $(".result").append(`<button>${cocklic6}</button>`);
    $(".result").append(`<button>${cocklic7}</button>`);
    $(".result").append(`<button>${cocklic8}</button>`);
    $(".result").append(`<button>${cocklic9}</button>`);
    $(".result").append(`<button>${cocklic10}</button>`);
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

        })

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