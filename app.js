const searchField=document.getElementById('search-field');
const searchButton=document.getElementById('search-button');

searchButton.addEventListener('click',function(){
    
    // search meals 
    let searchText=searchField.value;
    // console.log(searchText);
    searchField.value='';
    // load meals from mealdb url 
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data =>console.log(data.meals))
}) 