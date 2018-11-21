
const title = "Making Ice Cream Sandwiches";
var parra = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque maximus dui eget varius. Integer convallis viverra pretium. Curabitur congue, diam vitae varius scelerisque, lacus eros dignissim velit, eget ullamcorper est risus eget erat. In at ullamcorper sapien. Nunc in libero efficitur, semper libero eu, ullamcorper neque. Aliquam erat volutpat. Etiam enim massa, feugiat eget ligula non, hendrerit luctus lacus. Nullam cursus ex in semper dictum. Morbi porttitor erat at leo venenatis dignissim. Etiam eget ornare odio. Mauris ullamcorper orci in venenatis congue. Vestibulum ac quam non quam eleifend vestibulum. Maecenas dui dolor, luctus sit amet pellentesque quis, aliquam ut nisi. Duis mauris risus, facilisis eget justo ac, eleifend eleifend nibh.";
var imgs = ['ice-cream.JPG', 'cookies.jpg', 'mmminis.jpg', 'pb.jpg'];
var ingredientTitle = 'Ingredients';
var ingredientsItem = ["Cookies and Cream ice Cream", "Large chocolate chip cookies","M&M's mints", "Reese's mini peanut butter cups"];
var div = document.createElement("div");
div.innerHTML  = `
 <h1 style="color: blue"> ${title} </h1>
 <p> ${parra} </p>
 <div class="ingredients-bk" style="background-color: #98ff98;">
     <h2> ${ingredientTitle} </h2>
  <ul>
    <li> ${ingredientsItem[0]}</li>
    <li> ${ingredientsItem[1]}</li>
    <li> ${ingredientsItem[2]}</li>
    <li> ${ingredientsItem[3]}</li>
   <ul>
 </div>
 <div class="gallery" style="display:flex; flex-direction: row;">
 <div>
 <img src="${imgs[0]}" alt ="ice creme" width="200" height="200" />
 </div>
 <div>
 <img src="${imgs[1]}" alt ="cookies" width="200" height="200" />
 </div>
 <div>
 <img src="${imgs[2]}" alt ="m&m" width="200" height="200" />
 </div>
 <div>
 <img src="${imgs[3]}" alt ="reese's" width="200" height="200" />
 </div>
 </div>
  <p>For more information about this recipe, pleas visit <span><a href="https://www.tasteofhome.com"> The Taste of Home website</a></span></p>
`;
document.body.appendChild(div);