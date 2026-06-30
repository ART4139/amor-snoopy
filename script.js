const cartas = [

{
titulo:"💌 Carta 1",
texto:
"Desde que você apareceu, meus dias ficaram mais felizes. Obrigado por existir ❤️"
},


{
titulo:"🌹 Carta 2",
texto:
"Eu amo seu sorriso, seu jeito e todas as nossas conversas."
},


{
titulo:"✨ Carta 3",
texto:
"Vou continuar te ajudando o quanto eu puder, e cuidando de você com muito amor."
},


{
titulo:"❤️ Carta Final",
texto:
"Minha maior sorte é ter você. Eu escolheria você sempre. Para sempre ❤️"
}

];


let atual = 0;



function abrirCarta(numero){


atual = numero;


const carta =
document.getElementById("carta");


carta.style.display="block";


carta.innerHTML = `

<h2>${cartas[numero-1].titulo}</h2>

<p>
${cartas[numero-1].texto}
</p>

`;



const botoes =
document.getElementById("botoes");



if(numero < cartas.length){


botoes.innerHTML = `

<button onclick="abrirCarta(${numero+1})">

Próxima carta ❤️

</button>

`;

}


else{


botoes.innerHTML="";


document.getElementById("surpresa")
.style.display="block";


}
function criarCoracao(){


const area =
document.getElementById("coracoes");


const coracao =
document.createElement("div");


coracao.className="coracao";


coracao.innerHTML="❤️";



coracao.style.left =
Math.random()*100+"vw";


coracao.style.animationDuration =
(4 + Math.random()*5)+"s";



coracao.style.fontSize =
(15 + Math.random()*35)+"px";



area.appendChild(coracao);



setTimeout(()=>{

coracao.remove();

},9000);


}



setInterval(criarCoracao,300);

}