var game = {
  zdobyte : 0,
  zycia : 1,
}
var elem = document.getElementById("panstwa");
var country = data[getRandomInt(0,data.length)]['country'];
elem.innerHTML = country;
var countryArray= [...country];
var alreadyUseLetter = [];
var actualStatus = [];
var indexTemp = [];
var liter;

for(var i=0;i<countryArray.length;i++)
{
  //alert(countryArray[i]);
  if(countryArray[i]== "," || countryArray[i]== "." || countryArray[i]== "-")
    {
      actualStatus.push(countryArray[i]);
    }
    else if(countryArray[i]== " ")
    {
      actualStatus.push("&nbsp");
    }
    else{
        actualStatus.push("_");
    }
    //alert(actualStatus[i]);
}

//alert(data.length);
//alert(data[0]['country'][2]);

 //for (var i = 0; i < data[0]['country'].length; i += 1) {
    //alert(data[0]['country'][i]);  
  //}



//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery);
document.getElementById("author").addEventListener("click", author);

//alert(game.zycia);

addElement("execute");

//Author
function author()
{
  alert("Autor: Adam Goliński, 224806");
}
//FUNKCJE
function Sprawdz_Litery()
{
  liter = document.getElementById("wpisz_litere").value;
  if(liter.length == 1)
  {
    if(alreadyUseLetter.includes(liter))
      {
        alert("Tej litery już użyto, spróbuj innej");
      }
      else
      {
        alreadyUseLetter.push(liter);
        //alert(alreadyUseLetter);
        gameCheck();
      }
    }
  else
  {
    alert("Źle, wpisz jedną literę");
  }
}
function gameCheck()
{
  //alert(liter);
  //indexTemp = countryArray.indexOf(liter);
  //if(countryArray.indexOf(liter) != -1)
    //{
      //alert("ok");
    //}
    //else
    //{
      //alert("Nie ma takiej litery");
    //}
    for(var i=0;i<countryArray.length;i++)
      {
        if(countryArray[i] == liter)
        {
            actualStatus[i] = countryArray[i];
            //alert(actualStatus[i]);
        
        }
    }
    clearBox("execute");
    addElement("execute");
}

function clearBox(mydiv)
{
    document.getElementById(mydiv).innerHTML = "";
}

function addElement(mydiv)
{
  //newDiv.innerHTML = "";
  //newDiv = document.createElement("span");
  //newDiv.innerHTML = actualStatus.join(" ");
  document.getElementById(mydiv).innerHTML = actualStatus.join(" ");

  //my_div = document.getElementById(mydiv);
  //document.body.insertBefore(newDiv, my_div);

/*
  newDiv2 = document.createElement("span");
  newDiv2.innerHTML = "jasiokotek2";
  document.body.insertBefore(newDiv2, my_div.nextSibling);

  newDiv.classList.add("mystyle"); 
  */
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
