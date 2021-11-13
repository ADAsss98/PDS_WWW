var game = {
  zdobyte : 0,
  zycia : 3,
}
var elem = document.getElementById("panstwa");
var country;
randomCountry;
//country = data[getRandomInt(0,data.length)]['country'];
//country = country.toUpperCase();
//alert(country);
//elem.innerHTML = country;
var countryArray = [];
var alreadyUseLetter = [];
var actualStatus = [];
var indexTemp = [];
var liter;
var length;

newGame();

//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery);
document.getElementById("author").addEventListener("click", author);
document.getElementById("newgame").addEventListener("click", newGame);

//alert(game.zycia);

addElement("execute");

//Author
function author()
{
  alert("Autor: Adam Goliński, 224806");
}
//FUNKCJE
function clearVars()
{
    countryArray = [];
    alreadyUseLetter = [];
    actualStatus = [];
    indexTemp = [];
    length = actualStatus.length;
}
function newGame()
{
  clearVars();
  randomCountry();
  lives();
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
  }
  clearBox("execute");
  addElement("execute");
}

function randomCountry()
{
  country = data[getRandomInt(0,data.length)]['country'];
  country = country.toUpperCase();
  countryArray = [...country];
  //alert(country);
}
function allCountry()
{
  for(var i=0; i<actualStatus.length; i++)
  {
    //alert(countryArray[i]);
    if(actualStatus[i]!= "_")
      {
        length--;
      }
      //else
      //{
        //length=actualStatus.length;
      //}
  }
  if(length==0)
  winGame();
  //alert(length);
}
function Sprawdz_Litery()
{
  liter = document.getElementById("wpisz_litere").value;
  liter = liter.toUpperCase();
  //alert(liter);
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
function lives()
{
  document.getElementById('lives').innerHTML = "";
  document.getElementById('lives').innerHTML = "Życia: " + game.zycia + "<br>" + "Punkty: " + game.zdobyte;

}
function gameCheck()
{
  if(countryArray.indexOf(liter) != -1)
    {
      game.zdobyte++;
    }
    else
    {
      alert("Nie ma takiej litery");
      game.zycia--;
      if(game.zycia==0)
      {
        endGame();
      }

    }
    for(var i=0;i<countryArray.length;i++)
      {
        if(countryArray[i] == liter)
        {
            actualStatus[i] = countryArray[i];
            //alert(actualStatus[i]);
        
        }
    }
    length=actualStatus.length;
    allCountry();
    lives();
    clearBox("execute");
    addElement("execute");
}

function clearBox(mydiv)
{
    document.getElementById(mydiv).innerHTML = "";
}

function addElement(mydiv)
{
  document.getElementById(mydiv).innerHTML = actualStatus.join(" ");
}
function endGame()
{
  alert("Przegrałeś, zdobyłeś "+game.zdobyte+" pkt");
  alert(country);
  game.zdobyte = 0;
  game.zycia = 3;
}
function winGame()
{
  alert("Wygrałeś, zdobyłeś "+game.zdobyte+" pkt, GRATULACJE");
  game.zdobyte = 0;
  game.zycia = 3;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
