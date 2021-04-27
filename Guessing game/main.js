// find the right number within limited trials
// l'ordi choisi un nombre inconnu compris entre 1 à 100
// l'ordi nous impose un nombre d'essai aléatoire 3 à 6
// l'ordi nous propose de jouer
// le joueur fait une proposition
// L'ordi fait comparaison et nous indique 3 possibilité :
// bon num /
// trop grand = nb d'essai + continuer partie
// trop petit  nb d'essai + continuer partie
// si gagné = proposition de rejouer
// si perdu proposer une nouvelle partie

// affichage en HTML
/////////////////////////////////////////////////////
var tableau = [];
//lancer la partie
function computerPlay() {
  var stockCompt = compt();
  tableau.push(compt());
  console.log(tableau);
  // proposition ordi au joueur de jouer
  if (stockCompt != "") {
    document.getElementById("playerTurn").style.display = "block";
  } // si computer choice différent de rien alors changer le display du CSS

  playSound(); // apparition du message donc jouer le son

  document.getElementById("nbrAllowed").innerHTML = trialNumber(); // on va chercher où on veut l'afficher. HTML pour le voir et que veut on afficher notre fonction.

  setTimeout(() => {
    if (stockCompt != "") {
      document.getElementById("playerTurn").style.display = "none";
    } // si computer choice différent de rien alors changer le display du CSS et il le fait partir au bout de 2 seconde
  }, 7000);
}
///////////////////////////////////////////////
function compt() {
  var randomNumber = Math.floor(Math.random() * 100);
  var computerChoice = randomNumber + 1; //inclure 100 et exclure 0;
  return computerChoice;
}
//////////////////////////////////////////////////
// son en cas de click
function playSound() {
  var sound = new Audio("/sounds/crash.mp3");
  sound.play(); // sans ça il ne le joue pas
}

var trialsAllowed = [];

// afficher le nb d'essai
trialNumber = () => {
  var randomTrialNumber = Math.floor(Math.random() * 3);
  var trialChoice = randomTrialNumber + 3;
  trialsAllowed.push(trialChoice);
  return trialChoice;
};


//////////////////////////////////////
function playerChoice() {
  // $("#btn").click(function () {
  var result = $("#guess").val();
  console.log(result);
  return result;
}

// comparaison et compte des boucles
var nbrTries = [];
//////////////////////////////////
function compare() {
  nbrTries.push("nb-element");
  let player = playerChoice();
  let computer = tableau[0];

  if (player < 1 || player > 100) {
    document.getElementById("turnResult").innerHTML = "Number ot accepted";
    return false;
  }

  var trials = nbrTries.length;
  var trialsLeft = trialsAllowed[0] - trials;

  document.getElementById("left").innerHTML = trialsLeft;

  if (player == computer) {
    document.getElementById("turnResult").innerHTML = "Well done";
    newGame();
  } else if (player < computer) {
    document.getElementById("turnResult").innerHTML = "Nope : It's upper, try again";
    newTry();
  } else {
    document.getElementById("turnResult").innerHTML = "Nope : It's under, try again";
  }
  newTry();

  if (player == computer) {
    newGame();
  } else if (trialsLeft == 0) {
    newGame();
  }
}

////////////////////////////////////
function newTry() {
  document.getElementById("guess").innerHTML = "Insert your choice";
}
////////////////////////////////////
function newGame() {
  setTimeout(() => {
    var answer = confirm("Do you wanna try again ?");

    if (answer) {
      location.reload();
    } else {
      alert("oh no that sad, you can close the window see you soon");
      location.reload();
    }
  }, 2000);
}
/////////////////////////////////////////////////////
function clearInput() {
  document.getElementById("guess").value = "";
}
