var app = function() {
  addCat("Name: Dog", "Favourite food: Cravendale");
};

var addCat = function( name, food ) {
  var ul = createUl();
  var liCatName = createLi( name );
  var liFavouriteFood = createLi( food );
  var cats = document.querySelector("#cats");
  var catImg = createImg( "catDog.jpg" );
  appendElements(cats, ul, liCatName, liFavouriteFood, catImg);
};

var createUl = function() {
  var ul = document.createElement("ul");
  ul.classList.add( "cat" );
  return ul;
};

var createLi = function( text ) {
  var li = document.createElement("li");
  li.innerText = text;
  return li;
};

var createImg = function( imgPath ) {
  var img = document.createElement("img");
  img.src = imgPath;
  return img;
};

var appendElements = function(cats, ul, liName, liFood, imgCat) {
  ul.appendChild( liName );
  ul.appendChild( liFood );
  ul.appendChild( imgCat );
  cats.appendChild( ul );
};

window.onload = app