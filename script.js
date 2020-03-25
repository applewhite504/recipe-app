'use strict'

let appKey = '56dc91c65105b03d1c0b7071bb00e762';
let appId = 'b8a5a5c3';
let recipeFinder =  'https://api.edamam.com/search';


function formatQueryParams(params) {
    const queryItems = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
//`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
     return queryItems.join('&');
}


function getRecipe(query, maxResults=10) {
    const params = {
        q: query,
        app_id: appId,
        app_key: appKey,
    };

    let queryString = formatQueryParams(params)
    let url = recipeFinder + '?' + queryString;

    console.log(url);

    fetch(url)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => {
        $('.displayError').html(`Something went wrong. Try again later:
        ${error.message}`)   
    })
    //console.log(responseJson)
}

function displayResults(responseJson) {
    //console.log(responseJson);
    //$('#results-list').empty();

    for (let i = 0; i < responseJson.hits.length; i++){
        //console.log(responseJson.hits[i]);
        $('.displayRecipeFinder').append(`
        <h2>${responseJson.hits[i].recipe}  ,name</h2>
        <a href="#">${responseJson.hits[i].recipe.label}</
            a></h3>
            <p>${responseJson.recipes[i].description}</p>`
        )};
    $('#results').removeClass('hidden');
};



function watchForm() {
    $('#getDisplay').submit(event => {
        event.preventDefault();
        $('.displayRecipeFinder').empty();
        const ingredient = $('#js-search-term').val();
        const maxResults = $('#js-max-results').val();
        getRecipe(ingredient, maxResults);
});
}

$(watchForm);

//$(function() {
  //  console.log('App loaded! Waiting for submit!');
   // watchForm();
//});




//format the function for the parameters for the api call
/*function formatParams(params){
    const queryItems = Object.keys(params)
    .map(key =>
    )
        return queryItems.join('&');
}

//api fetch
function apiData(recipes) {
    const paramsRecipes = {
        api_key: apiKey,
        ingredient:
        from:
        to: 
        diet:
        cuisineType:
        mealType:
        dishType:
        time:
        excluded:
        ingr:
    }
    
    let queryString = formatParams(paramsRecipes);
    //let

    fetch()
    .then(response => response.json())
    .then(responseJson => displayApiData(responseJson))
    .catch(error => {
        $('.displayError').html(`There has been an error. Please try again:
        ${error.message}`)
    })
}

//This function handles the form and button clicks in the html
function formHandle () {
    $('enter-food').click(event => {
        event.preventDefault();


    })
}*/