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
var Jugador= "Q";
var  posicions= [[0, 0],[0, 0],[0, 0]] //array on aniran les posicions dels 3 fantasmes
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
				posicions[i][0]= fila //Y
				posicions[i][1]= columna //X
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
	return posicions
	
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
				pos = [fila, columna]
				return pos
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
				if (tauler[ posicions[i][0]][ posicions[i][1] + 1] == 0){ 
				//Si es vol moure cap a la dreta, pero hi ha una paret, buscarà una altra direcció
					continue
				}
				else{
				//si es vol moure cap a la dreta, i hi ha camí lliure, reemplaza la posició del fantasma per un 1 y posa una X a la dreta de la posició inicial
					tauler[ posicions[i][0]][ posicions[i][1]] = 1
					posicions[i][1] += 1
					tauler[ posicions[i][0]][ posicions[i][1]] = "X"
					break
				}
			}
		
			else if (moviment == 1){ //esquerra
				if (tauler[ posicions[i][0]][ posicions[i][1] - 1] == 0){
					continue
				}
				else {
					tauler[ posicions[i][0]][ posicions[i][1]] = 1
					 posicions[i][1] -= 1
					tauler[ posicions[i][0]][ posicions[i][1]] = "X"
					break
				}
			}
			else if (moviment == 2){ //amunt
				if (tauler[ posicions[i][0] - 1][( posicions[i][1])] == 0){
							continue
					}
				else {
					tauler[ posicions[i][0]][ posicions[i][1]] = 1
					 posicions[i][0] -= 1
					tauler[ posicions[i][0]][ posicions[i][1]] = "X"
					break
				}
			}
			else{ //abaix
				if (tauler[ posicions[i][0] + 1][( posicions[i][1])] == 0){
						continue
					}
				else {
					tauler[ posicions[i][0]][ posicions[i][1]] = 1
					 posicions[i][0] += 1
					tauler[ posicions[i][0]][ posicions[i][1]] = "X"
					break
				}
			}
		}
	}

	
}

function moureFantasmes(){ //funcio que anira dins de l'interval
	moureFantasma()
	document.body.innerHTML = "" 
	mostrarTaulell()
}


var posicionsFantasmes = posicioInicialFantasmes(Fantasma1, Fantasma2, Fantasma3)
var posicioInicial=posicioInicialJugador(Jugador)                                           
mostrarTaulell();
setInterval(moureFantasmes, 1000)





