// Visibilidade

const backgroundImage = true; // só mexer aqui se vc não quiser que o fundo seja carregado pelo HTML
const game1visible = true;
const game2visible = true;
const game3visible = true;
const game4visible = true;
const semi1visible = true;
const semi2visible = true;
const finalVisible = false;
const championVisible = false;

// Jogo 1 (Esquerda Superior)

const game1team1 = "Super Loud"
const game1score1 = 0
const game1team2 = "Pentagram"
const game1score2 = 1

// Jogo 2 (Esquerda Inferior)

const game2team1 = "Time Lixo"
const game2score1 = 1
const game2team2 = "Team Gala"
const game2score2 = 0

// Jogo 3 (Direita Superior)

const game3team1 = "ATS Esports"
const game3score1 = 1
const game3team2 = "New Generation"
const game3score2 = 0

// Jogo 4 (Direita Inferior)

const game4team1 = "Drop e Amigos"
const game4score1 = 1
const game4team2 = "Lobinhos"
const game4score2 = 0

// Semi 1 (Esquerda Centro)

const semi1team1 = "Pentagram"
const semi1score1 = 0
const semi1team2 = "Time Lixo"
const semi1score2 = 0

// Semi 2 (Direita Centro)

const semi2team1 = "ATS Esports"
const semi2score1 = 0
const semi2team2 = "Drope e Amigos"
const semi2score2 = 0

// FINAL (Centro)

const finalTeam1 = ""
const finalScore1 = 0
const finalTeam2 = ""
const finalScore2 = 0

// CHAMPION

const champion = "-----------"

// não mexe daqui pra baixo

backgroundImage ? document.body.style.backgroundImage = "url('brackets.png')" : document.body.style.backgroundImage = null

game1visible ? document.getElementById("game1").style.visibility = "visible" : document.getElementById("game1").style.visibility = "hidden";
game2visible ? document.getElementById("game2").style.visibility = "visible" : document.getElementById("game2").style.visibility = "hidden";
game3visible ? document.getElementById("game3").style.visibility = "visible" : document.getElementById("game3").style.visibility = "hidden";
game4visible ? document.getElementById("game4").style.visibility = "visible" : document.getElementById("game4").style.visibility = "hidden";

semi1visible ? document.getElementById("semi1").style.visibility = "visible" : document.getElementById("semi1").style.visibility = "hidden";
semi2visible ? document.getElementById("semi2").style.visibility = "visible" : document.getElementById("semi2").style.visibility = "hidden";

finalVisible ? document.getElementById("final").style.visibility = "visible" : document.getElementById("final").style.visibility = "hidden";

championVisible ? document.getElementById("champion").style.visibility = "visible" : document.getElementById("champion").style.visibility = "hidden";

// manipula os textos

// jogo 1
document.getElementById("game1team1").innerText = game1team1;
document.getElementById("game1score1").innerText = game1score1;
document.getElementById("game1team2").innerText = game1team2;
document.getElementById("game1score2").innerText = game1score2;

// jogo 2
document.getElementById("game2team1").innerText = game2team1;
document.getElementById("game2score1").innerText = game2score1;
document.getElementById("game2team2").innerText = game2team2;
document.getElementById("game2score2").innerText = game2score2;

// jogo 3
document.getElementById("game3team1").innerText = game3team1;
document.getElementById("game3score1").innerText = game3score1;
document.getElementById("game3team2").innerText = game3team2;
document.getElementById("game3score2").innerText = game3score2;

// jogo 4
document.getElementById("game4team1").innerText = game4team1;
document.getElementById("game4score1").innerText = game4score1;
document.getElementById("game4team2").innerText = game4team2;
document.getElementById("game4score2").innerText = game4score2;

// semi 1
document.getElementById("semi1team1").innerText = semi1team1;
document.getElementById("semi1score1").innerText = semi1score1;
document.getElementById("semi1team2").innerText = semi1team2;
document.getElementById("semi1score2").innerText = semi1score2;

// semi 2
document.getElementById("semi2team1").innerText = semi2team1;
document.getElementById("semi2score1").innerText = semi2score1;
document.getElementById("semi2team2").innerText = semi2team2;
document.getElementById("semi2score2").innerText = semi2score2;

// final
document.getElementById("finalTeam1").innerText = finalTeam1;
document.getElementById("finalScore1").innerText = finalScore1;
document.getElementById("finalTeam2").innerText = finalTeam2;
document.getElementById("finalScore2").innerText = finalScore2;

// champion
document.getElementById("champion").innerText = champion;



