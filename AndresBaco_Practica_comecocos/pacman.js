//Array bidimensional que representa el tauler
var tauler = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
			   [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
			   [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
			   [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
			   [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0],
			   [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
			   [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
			   [0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
			   [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
			   [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			   [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			   [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
			   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
			   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
			   [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
			   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

//Variables on es declaren els fantasmes i el jugador
var Fantasma1= "X";
var Fantasma2= "X";
var Fantasma3= "X";
var jugador= "Q";
				   //Y, X
var posicioJugador= [0, 0]; //array de les posicions del jugador
var  posicionsFantasmes= [ //Y, X
							[0, 0], //fantasma1
							[0, 0], //fantasma2
							[0, 0]  //fantasma3
						]; //array on aniran les posicions dels 3 fantasmes
						

function posicioInicialFantasmes(f1, f2, f3){ //funció on es declara la posició inicial dels fantasmes
	var fantasma=f1;
	for (i=0; i<3; i++) //aquest bucle s'executa 3 vegades, de 3 fantasmes que hi ha
	{
		while(true)
		{
			var numFiles= tauler.length; //calculem el numero de files del tauler
			var numColumnes= tauler[0].length; //numero de columnes del tauler
			var fila= Math.floor(Math.random()*numFiles); //escollim valor aleatori per col·locar el fantasma a una fila
			var columna= Math.floor(Math.random()*numColumnes); //escollim valor aleatori per col·locar el fantasma a una columna
			if (tauler[fila][columna] == 0 || tauler[fila][columna] == "X") 
			//Si a la posició escollida hi ha una paret o un altre fantasma, repeteix el bucle
			{
				continue
			}
			else
			//si la posició és vàlida, col·loca el fantasma al tauler
			{
				tauler[fila][columna]=fantasma;
				posicionsFantasmes[i ][0]= fila; //Y
				posicionsFantasmes[i][1]= columna; //X
				break
			}
		}
		if (fantasma ==f1) //canviem la variable inicial per col·locar el nou fantasma
		{
			fantasma=f2;
		}
		else
		{
			fantasma = f3;
		}
		
	}
	
}

function posicioInicialJugador(j){ //Funció on calculem on sortirà el jugador
	while(true)
		{
			var numFiles= tauler.length;
			var numColumnes= tauler[0].length;
			var fila= Math.floor(Math.random()*numFiles);//escollim valor aleatori per col·locar el jugador a una fila
			var columna= Math.floor(Math.random()*numColumnes);//escollim valor aleatori per col·locar el jugador a una columna
			if (tauler[fila][columna] == 0 || tauler[fila][columna] == "X")
			//Si a la posició escollida hi ha una paret o un altre fantasma, repeteix el bucle				
			{
				continue
			}
			else
			//si la posició és vàlida, col·loca el jugador al tauler
			{
				tauler[fila][columna]=j;
				posicioJugador[0]=fila;
				posicioJugador[1]=columna;
				break
			}
		}
}

function mostrarTaulell(){ //funció que imprimeix el taulell per pantalla
	var canvas = document.getElementById("tauler");
	document.getElementById("timer").innerHTML =""; //neteja el temps d'abans per posar el temps actualitzat
	document.getElementById("puntuacio").innerHTML ="";  //neteja la puntuació d'abans per posar el temps actualitzat
	document.getElementById("timer").innerHTML = "TEMPS: "+timer; //imprimeix el timer per pantalla
	document.getElementById("puntuacio").innerHTML = "PUNTS: "+puntuacio; //imprimeix la puntuació per pantalla
	var img; 
	for(y=0;y<30;y++)
	{	
		for(x=0;x<28;x++)
		{
			if (tauler[y][x] == 0){
				img = document.getElementById("paret"); //si en aquesta posició hi ha una paret, dibuixarà una paret
				}
			else if (tauler[y][x] == 1){
				img = document.getElementById("cami"); //si en aquesta posició hi ha camí, dibuixarà un camí
			}
			else if (tauler[y][x] == "Q"){ //si en aquesta posició està pacman, crida la funció dibuixarPacman()
				img = dibuixarPacman(img);
			}
			else if (tauler[y][x] == "X"){ //si en aquesta posició hi ha un fantasma, dibuixa un fantasma
				img = document.getElementById("fantasma");
			}
			var ctx = canvas.getContext("2d").drawImage(img, x*20, y*20, 20, 20 ); //el ctx dibuixa els objectes i els col·loca
		}
	}
}


function dibuixarPacman(img){ //depenent de la direcció del jugador, Pacman es dibuixarà de diferents maneres
	if (pacman==0 && movimentFixe == 0){ //quan la variable pacman està a 0, pacman es dibuixarà amb la boca oberta
		img = document.getElementById("pacmanDreta");
		pacman +=1;
	}
	else if (pacman ==1 && movimentFixe ==0){//quan la variable pacman està a 1, pacman es dibuixarà amb la boca tancada
		img = document.getElementById("pacman2Dreta");
		pacman -=1;
	}
	else if (pacman==0 && movimentFixe == 1){
		img = document.getElementById("pacmanEsquerra");
		pacman +=1;
	}
	else if (pacman ==1 && movimentFixe ==1){
		img = document.getElementById("pacman2Esquerra");
		pacman -=1;
	}
	else if (pacman==0 && movimentFixe == 2){
		img = document.getElementById("pacmanAmunt");
		pacman +=1;
	}
	else if (pacman ==1 && movimentFixe == 2){
		img = document.getElementById("pacman2Amunt");
		pacman -=1;
	}
	else if (pacman==0 && movimentFixe == 3){
		img = document.getElementById("pacmanAbaix");
		pacman +=1;
	}
	else if (pacman ==1 && movimentFixe ==3){
		img = document.getElementById("pacman2Abaix");
		pacman -=1;
	}
	return img;
}

function direccioFantasmes(){ //funció que calcula de manera aleatoria la direcció dels fantasmes
	for (i=0;i<3;i++){
		movimentFantasmes[i] = Math.floor(Math.random() * 4);
	}
}
function redireccio(i){ //funció que s'utilitza quan un fantasma detecta colisions
	movimentFantasmes[i] = Math.floor(Math.random() * 4);
}

function moureFantasma(){ //funcio per moure els fantasmes
	for (i=0;i<3;i++){
		if (movimentFantasmes[i] == 0){ //dreta
			colisio()//comprovem les colisions amb pacman
			if (tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1] + 1] == 0){ 
			//Si es vol moure cap a la dreta, pero hi ha una paret, buscarà una altra direcció
				redireccio(i) //
				while(movimentFantasmes[i] == 1){ //amb aquest while fem que el fantasma no vagi en direcció contrària
					redireccio(i)
				}
			}
			else{
			//si es vol moure cap a la dreta, i hi ha camí lliure, reemplaza la posició del fantasma per un 1 y posa una X a la dreta de la posició inicial
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1;
				posicionsFantasmes[i][1] += 1;
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X";
			}
		}	
		else if (movimentFantasmes[i] == 1){ //esquerra
			colisio()
			if (tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1] - 1] == 0){
				redireccio(i)
				while(movimentFantasmes[i] == 0){
					redireccio(i)
				}
			}
			else {
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1;
				 posicionsFantasmes[i][1] -= 1;
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X";	
			}
		}
		else if (movimentFantasmes[i] == 2){ //amunt
			colisio()
			if (tauler[ posicionsFantasmes[i][0] - 1][( posicionsFantasmes[i][1])] == 0 && movimentFantasmes[i] == 2){
				redireccio(i)
				while(movimentFantasmes[i] == 3){
					redireccio(i)
				}
			}
			else {
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1;
				 posicionsFantasmes[i][0] -= 1;
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X";
			}
		}
		else{ //abaix
			colisio()
			if (tauler[ posicionsFantasmes[i][0] + 1][( posicionsFantasmes[i][1])] == 0){
				redireccio(i);
				while(movimentFantasmes[i] == 2){
					redireccio(i);
				}
			}
			else {
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1;
				 posicionsFantasmes[i][0] += 1;
				tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X";
			}
		}
	}
}

function movimentInicial(){ //funció mou al jugador automàticament al sortir
	//només és cridada una vegada
	var primerMoviment = Math.floor(Math.random() * 4); 
	while (inici==true){ 
		if (primerMoviment == 0){ //dreta
			if (tauler[posicioJugador[0]][ posicioJugador[1] + 1] == 0){ 
				//Si es vol moure cap a la dreta, pero hi ha una paret, buscarà una altra direcció
				var primerMoviment = Math.floor(Math.random() * 4);
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1;
				posicioJugador[1] +=1;
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
				movimentFixe = 0;
				inici=false;
			}
		}
		else if (primerMoviment == 1){ //esquerra
			if (tauler[posicioJugador[0]][ posicioJugador[1] - 1] == 0){ 
				var primerMoviment = Math.floor(Math.random() * 4); 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1;
				posicioJugador[1] -=1;
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
				movimentFixe = 1;
				inici=false;
			}
		}
		else if (primerMoviment == 2){ //amunt
			if (tauler[ posicioJugador[0] - 1][ posicioJugador[1]] == 0){ 
				var primerMoviment = Math.floor(Math.random() * 4); 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1;
				posicioJugador[0] -=1;
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
				movimentFixe = 2;
				inici=false;
			}
		}
		else{ //abaix
			if (tauler[posicioJugador[0] + 1][ posicioJugador[1]] == 0){ 
				var primerMoviment = Math.floor(Math.random() * 4); 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1;
				posicioJugador[0] +=1;
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
				movimentFixe = 3;
				inici=false;
			}
		}
	}
}

function movimentJugador(){ //Funció per moure a Pacman
	if (movimentFixe == 0){ //dreta
		if (tauler[posicioJugador[0]][ posicioJugador[1] + 1] == 0){  //si detecta colisions, Pacman es quedarà quiet
		}
		else{ 
		tauler[posicioJugador[0]][posicioJugador[1]] = 1;
		posicioJugador[1] +=1;
		tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
		}
	}
	else if (movimentFixe == 1){ //esquerra
		if (tauler[posicioJugador[0]][ posicioJugador[1] - 1] == 0){ 
		}
		else{
		tauler[posicioJugador[0]][posicioJugador[1]] = 1;
		posicioJugador[1] -=1;
		tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
		}
	}
	else if (movimentFixe == 2){ //amunt
		if (tauler[posicioJugador[0] - 1][ posicioJugador[1]] == 0){  
		}
		else{
		tauler[posicioJugador[0]][posicioJugador[1]] = 1;
		posicioJugador[0] -=1;
		tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
		}
	}
	else if (movimentFixe == 3){ //abaix
		if (tauler[posicioJugador[0] + 1][ posicioJugador[1]] == 0){ 
		}
		else{
		tauler[posicioJugador[0]][posicioJugador[1]] = 1;
		posicioJugador[0] +=1;
		tauler[posicioJugador[0]][posicioJugador[1]] = jugador;
		}
	}
}
function colisio(){//Funció que finalitza el joc
	if (tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1] + 1] == "Q" ||  //si en qualsevol direcció està pacman, finalitza el joc
		tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1] - 1] == "Q" || 
		tauler[ posicionsFantasmes[i][0] - 1][ posicionsFantasmes[i][1]] == "Q" || 
		tauler[ posicionsFantasmes[i][0] + 1][ posicionsFantasmes[i][1]] == "Q"){
				document.getElementById("victoria").innerHTML = "HAS PERDUT!";
				clearInterval(a);
		}

}
function teclat(e){ //funció que interpreta el teclat del jugador
	var key = document.all ? e.which : e.key;
	if (key == "ArrowRight"){ //depenent de quina fletxa s'ha pulsat, s'assignarà una direcció
		movimentFixe = 0; //dreta
	}
	else if (key == "ArrowLeft"){
		movimentFixe = 1; //esquerra
	}
	else if (key=="ArrowUp"){
		movimentFixe = 2; //Amunt
	}	
	else if (key =="ArrowDown"){
		movimentFixe = 3; //Abaix
	}
}

function Joc(){ //funcio que anira dins de l'interval
if (timer == 300) //Quan el jugador arriba a 5 minuts, el joc s'atura
	{
		document.getElementById("victoria").innerHTML = "HAS GUANYAT!";
		clearInterval(a);
	}
	moureFantasma();
	movimentInicial();
	var element = document.getElementById("all");  
	document.onkeydown = teclat;
	movimentJugador();
	mostrarTaulell();
	timer += 0.25; //el temps puja després de cada interval
	puntuacio += 20; //La puntuació augmenta cada interval
}

var inici=true; //variable per l'inici del jugador
var movimentFixe = 0; //variable per el moviment del jugador
var movimentFantasmes=[0,0,0]; //array on aniran les direccions dels fantasmes
var timer = 0; //cronómetre
var puntuacio = 0; //puntuació del jugador
var pacman = 0; //variable que serveix per dibuixar a pacman
posicioInicialFantasmes(Fantasma1, Fantasma2, Fantasma3);
direccioFantasmes();
posicioInicialJugador(jugador);                                         
mostrarTaulell();
var a = setInterval(Joc, 250);