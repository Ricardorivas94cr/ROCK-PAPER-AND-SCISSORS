
function aleatorio(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    function eleccion(jugada)
    {

    
    let resultado=""
    
    if (jugada==1)
    { 
        resultado="Piedra ✊ "
    } else if (jugada==2)
    { 
      resultado="papel 📄"
    } 
    else if(jugada==3)
    {
    resultado="Tijera ✂️"
    }
    else
    {
        resultado="Mal Elegido"
    }
    return resultado

    }

    let jugador="0"
    let min=1
    let max=3
    let pc=0

    let triunfos=0
    let perdidas=0

    while (triunfos<3 && perdidas<3)
    {

         pc=aleatorio(1,3)
        jugador=prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
        //alert("elegiste" +jugador)
        alert("pc elige: " + eleccion(pc))
        alert("Tu Eliges:" + eleccion (jugador))

        //combate
        if (pc==jugador){
            alert("Empate")
        }
        else if (jugador==1 && pc==3){
            alert("Ganaste")
            triunfos= triunfos + 1
        }
        else if (jugador==2 && pc==1){
            alert("Ganaste")
            triunfos=triunfos + 1
        }
        else if (jugador==3 && pc==2){
            alert("Ganaste")
            triunfos=triunfos + 1
        } else{
            alert("perdiste")
            perdidas=perdidas + 1
        }




    }
    alert (" ganaste " + triunfos + " veces.perdiste " + perdidas + " veces. ")
   


