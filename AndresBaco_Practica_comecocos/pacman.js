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
var posicioJugador= [0, 0]
var  posicionsFantasmes= [[0, 0],[0, 0],[0, 0]] //array on aniran les posicions dels 3 fantasmes

function posicioInicialFantasmes(f1, f2, f3){ //funció on es declara la posició inicial dels fantasmes
	var fantasma=f1
	for (i=0; i<3; i++) //aquest bucle s'executa 3 vegades, de 3 fantasmes que hi ha
	{
		while(true)
		{
			var numFiles= tauler.length //calculem el numero de files del tauler
			var numColumnes= tauler[0].length //numero de columnes del tauler
			var fila= Math.floor(Math.random()*numFiles) //escollim valor aleatori per col·locar el fantasma a una fila
			var columna= Math.floor(Math.random()*numColumnes) //escollim valor aleatori per col·locar el fantasma a una columna
			if (tauler[fila][columna] == 0 || tauler[fila][columna] == "X") 
			//Si a la posició escollida hi ha una paret o un altre fantasma, repeteix el bucle
			{
				continue
			}
			else
			//si la posició és vàlida, col·loca el fantasma al tauler
			{
				tauler[fila][columna]=fantasma
				posicionsFantasmes[i][0]= fila //Y
				posicionsFantasmes[i][1]= columna //X
				break
			}
		}
		if (fantasma ==f1) //canviem la variable inicial per col·locar el nou fantasma
		{
			fantasma=f2
		}
		else
		{
			fantasma = f3
		}
		
	}
	
}

function posicioInicialJugador(j){ //Funció on calculem on sortirà el jugador
	while(true)
		{
			var numFiles= tauler.length
			var numColumnes= tauler[0].length
			var fila= Math.floor(Math.random()*numFiles)//escollim valor aleatori per col·locar el jugador a una fila
			var columna= Math.floor(Math.random()*numColumnes)//escollim valor aleatori per col·locar el jugador a una columna
			if (tauler[fila][columna] == 0 || tauler[fila][columna] == "X")
			//Si a la posició escollida hi ha una paret o un altre fantasma, repeteix el bucle				
			{
				continue
			}
			else
			//si la posició és vàlida, col·loca el jugador al tauler
			{
				tauler[fila][columna]=j
				posicioJugador[0]=fila
				posicioJugador[1]=columna
				break
			}
		}
}


function mostrarTaulell(){ //funció que imprimeix el taulell per pantalla
	document.write("<div>")
	for(y=0;y<30;y++)
	{	
		for(x=0;x<28;x++)
		{
			if (tauler[y][x] != 0 && tauler[y][x] != 1)
			{
				document.write("<strong>"+tauler[y][x]+"</strong>")
				document.write(" ")
			}
			else
			{
			document.write(tauler[y][x])
			document.write(" ")
			}
			
		}
		document.write("<br>")
	}
	document.write("</div>")
}


function moureFantasma(){ //funcio per moure els fantasmes
	for (i=0;i<3;i++){
		while (true){
			var moviment = Math.floor(Math.random() * 4); //calculem un numero entre 0 i 3, cada numero representa una direcció
			if (moviment == 0){ //dreta
				if (tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1] + 1] == 0){ 
				//Si es vol moure cap a la dreta, pero hi ha una paret, buscarà una altra direcció
					continue
				}
				else{
				//si es vol moure cap a la dreta, i hi ha camí lliure, reemplaza la posició del fantasma per un 1 y posa una X a la dreta de la posició inicial
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1
					posicionsFantasmes[i][1] += 1
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X"
					break
				}
			}
		
			else if (moviment == 1){ //esquerra
				if (tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1] - 1] == 0){
					continue
				}
				else {
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1
					 posicionsFantasmes[i][1] -= 1
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X"
					break
				}
			}
			else if (moviment == 2){ //amunt
				if (tauler[ posicionsFantasmes[i][0] - 1][( posicionsFantasmes[i][1])] == 0){
							continue
					}
				else {
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1
					 posicionsFantasmes[i][0] -= 1
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X"
					break
				}
			}
			else{ //abaix
				if (tauler[ posicionsFantasmes[i][0] + 1][( posicionsFantasmes[i][1])] == 0){
						continue
					}
				else {
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = 1
					 posicionsFantasmes[i][0] += 1
					tauler[ posicionsFantasmes[i][0]][ posicionsFantasmes[i][1]] = "X"
					break
				}
			}
		}
	}

	
}

function movimentInicial(){ 
	var primerMoviment = Math.floor(Math.random() * 4) 
	while (inici==true){ 
		if (primerMoviment == 0){ //dreta
			if (tauler[posicioJugador[0]][ posicioJugador[1] + 1] == 0){ 
				//Si es vol moure cap a la dreta, pero hi ha una paret, buscarà una altra direcció
				var primerMoviment = Math.floor(Math.random() * 4) 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1
				posicioJugador[1] +=1
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador
				movimentFixe = 0
				inici=false
			}
		}
		else if (primerMoviment == 1){ //esquerra
			if (tauler[posicioJugador[0]][ posicioJugador[1] - 1] == 0){ 
				var primerMoviment = Math.floor(Math.random() * 4) 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1
				posicioJugador[1] -=1
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador
				movimentFixe = 1
				inici=false
			}
		}
		else if (primerMoviment == 2){ //amunt
			if (tauler[ posicioJugador[0] - 1][ posicioJugador[1]] == 0){ 
				var primerMoviment = Math.floor(Math.random() * 4) 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1
				posicioJugador[0] -=1
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador
				movimentFixe = 2
				inici=false
			}
		}
		else{ //abaix
			if (tauler[posicioJugador[0] + 1][ posicioJugador[1]] == 0){ 
				var primerMoviment = Math.floor(Math.random() * 4) 
				continue
			}
			else{
				tauler[posicioJugador[0]][posicioJugador[1]] = 1
				posicioJugador[0] +=1
				tauler[posicioJugador[0]][posicioJugador[1]] = jugador
				movimentFixe = 3
				inici=false
			}
		}
	}
}

function movimentJugador(event){ //Funció per a la següent entrega
		if (movimentFixe == 0){ //dreta
			if (tauler[posicioJugador[0]][ posicioJugador[1] + 1] == 0){ 
			}
			else{
			tauler[posicioJugador[0]][posicioJugador[1]] = 1
			posicioJugador[1] +=1
			tauler[posicioJugador[0]][posicioJugador[1]] = jugador
			}
		}
		else if (movimentFixe == 1){ //esquerra
			if (tauler[posicioJugador[0]][ posicioJugador[1] - 1] == 0){ 
			}
			else{
			tauler[posicioJugador[0]][posicioJugador[1]] = 1
			posicioJugador[1] -=1
			tauler[posicioJugador[0]][posicioJugador[1]] = jugador
			}
		}
		else if (movimentFixe == 2){ //amunt
			if (tauler[posicioJugador[0] - 1][ posicioJugador[1]] == 0){  
			}
			else{
			tauler[posicioJugador[0]][posicioJugador[1]] = 1
			posicioJugador[0] -=1
			tauler[posicioJugador[0]][posicioJugador[1]] = jugador
			}
		}
		else if (movimentFixe == 3){ //abaix
			if (tauler[posicioJugador[0] + 1][ posicioJugador[1]] == 0){ 
			}
			else{
			tauler[posicioJugador[0]][posicioJugador[1]] = 1
			posicioJugador[0] +=1
			tauler[posicioJugador[0]][posicioJugador[1]] = jugador
			}
		}
		else
		{
			if ( event.code =="ArrowRight"){
				var movimentFixe = 0
			}
			else if (event.code =="ArrowLeft"){
				var movimentFixe = 1
			}
			else if (event.code =="ArrowUp"){
				var movimentFixe = 2
			}	
			else if (event.code =="ArrowDown"){
				var movimentFixe = 3
			}
			
		}

}

function Joc(){ //funcio que anira dins de l'interval
	moureFantasma()
	movimentInicial()
	//movimentJugador(event) //Funció per a la següent entrega
	//document.onkeyup = movimentJugador(event) //Funció per a la següent entrega
	document.body.innerHTML = "" 
	mostrarTaulell()
	
}

var inici=true //variable per l'inici del jugador
var movimentFixe = null //variable per el moviment del jugador
posicioInicialFantasmes(Fantasma1, Fantasma2, Fantasma3)
posicioInicialJugador(jugador)                                         
mostrarTaulell();
setInterval(Joc, 1000)





