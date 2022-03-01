const searchField=document.getElementById('search-field');
const searchButton=document.getElementById('search-button');

searchButton.addEventListener('click',function(){
    
    // search meals 
    let searchText=searchField.value;
    // console.log(searchText);
    searchField.value='';
    // load meals from mealdb url 
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data =>displaySearchResult(data.meals))
}) 


// display search result 
     const displaySearchResult= meals => {
     const searchResult=document.getElementById('search-result');
     meals.forEach(meal=> {
         console.log(meal);
        const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
        </div>
      </div>`;
      searchResult.appendChild(div);
     })
}