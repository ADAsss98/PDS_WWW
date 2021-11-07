var game = {
  zdobyte : 0,
  zycia : 1,
}
//alert(data[0]['country']);
var elem = document.getElementById("panstwa");
//elem.innerHTML = data[getRandomInt(0,data.length)]['country'];
var country = data[getRandomInt(0,data.length)]/*['country']*/;
elem.innerHTML = country;
countryArray= [country];

//alert(data.length);
//alert(data[0]['country'][2]);

 for (var i = 0; i < data[0]['country'].length; i += 1) {
    //alert(data[0]['country'][i]);  
  }



//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery);
document.getElementById("author").addEventListener("click", author);

//alert(game.zycia);

addElement("execute");

//Autor
function author()
{
  alert("Autor: Adam Goliński, 224806");
}
//FUNKCJE
function Sprawdz_Litery(){
  var liter = document.getElementById("wpisz_litere").value;
  //alert(liter);
  //alert(getRandomInt(10,20));
}


function addElement(mydiv)
{
 
  //newDiv = document.createElement("span");
  //newDiv.innerHTML = "jasiokotek";
  newDiv = document.createElement("span");
  for (var i=0; i<country.length; i++)
  {
    newDiv.innerHTML = "_ ";
  }

  my_div = document.getElementById(mydiv);
  document.body.insertBefore(newDiv, my_div);

  newDiv2 = document.createElement("span");
  newDiv2.innerHTML = "jasiokotek2";
  document.body.insertBefore(newDiv2, my_div.nextSibling);

  newDiv.classList.add("mystyle");  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
