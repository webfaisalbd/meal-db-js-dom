const searchField=document.getElementById('search-field');
const searchButton=document.getElementById('search-button');
const searchResult=document.getElementById('search-result');

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
    //  const searchResult=document.getElementById('search-result');
     if(meals.length==0){
      Swal.fire(
        'Not Found?',
        'Search another meal',
        'error'
      )
     }
     else{
      searchResult.textContent='';
       if(meals.length<10){
        meals.forEach(meal=> {
          //  console.log(meal);
          const div=document.createElement('div');
          div.classList.add('col');
          div.innerHTML=`<div class="card shadow">
          <img src="${meal.strMealThumb}" class="card-img-top w-50 mx-auto p-2 rounded-circle" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <button onClick="loadDetails(${meal.idMeal})" class="btn-success rounded">Meal Details</button>
          </div>
        </div>`;
        searchResult.appendChild(div);
       })
       }
       else{
        meals.slice(0,10).forEach(meal=> {
          //  console.log(meal);
          const div=document.createElement('div');
          div.classList.add('col');
          div.innerHTML=`<div class="card shadow">
          <img src="${meal.strMealThumb}" class="card-img-top w-50 mx-auto p-2 rounded-circle" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <button onClick="loadDetails(${meal.idMeal})" class="btn-success rounded">Meal Details</button>
          </div>
        </div>`;
        searchResult.appendChild(div);
       })
       }
     }
}


// load details meal 
const loadDetails=(mealId)=>{
// console.log(meal);
const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
fetch(url)
.then(res=>res.json())
.then(data=>showLoadDetails(data.meals[0]))
}


// show details meal 
const showLoadDetails= mealDetail => {
    console.log(mealDetail);
    const singleLoadDetails=document.getElementById('singleLoadDetails');
    singleLoadDetails.textContent='';
    const div=document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`<div class="card shadow">
        <img src="${mealDetail.strMealThumb}" class="card-img-top w-25 mx-auto p-2 rounded-circle" alt="...">
        <div class="card-body">
          <h5 class="card-title">${mealDetail.strMeal}</h5>
          <p>${mealDetail.strCategory}</p>
          <p>${mealDetail.strArea ?  mealDetail.strArea : "area not found" }</p>
          <p>${mealDetail.strInstructions.slice(0,150)}</p>

        </div>
      </div>`;
    singleLoadDetails.appendChild(div);
    // remove child 
    searchResult.remove();         
}