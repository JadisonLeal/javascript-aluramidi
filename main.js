// function tocaSom(idElementoAudio) {
// 	document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// while(contador < listaDeTeclas.length) {

// 	const tecla = listaDeTeclas[contador];
// 	const instrumento = tecla.classList[1];

// 	const idAudio = `#som_${instrumento}`;

// 	tecla.onclick = function() {
// 		tocaSom(idAudio);
// 	}

// 	contador++;
// }

// function tocaSom(idElementoAudio) {
// 	document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');

// for(let i = 0; i < listaDeTeclas.length; i++) {
	// const tecla = listaDeTeclas[i];
	// const instrumento = tecla.classList[1]; // tecla.classList[1] é por que a classList é um metodo que acessa as classes como tem duas classes que é do indice 0 e 1 a classe indice 0 é tecla e indice 1 é a outra classe que ta sendo usada 
	// console.log(instrumento); //tecla_pom, tecla_clap e etc.
	// const idAudio = `#som_${instrumento}`; // esta concatenando atraves do template string a string '#som_'+ o retorno de instrumento que é a classe do indice 1 buscado pelo classList ou seja formando um id  exemplo #som_tecla_pom
	// console.log(idAudio); // retorno #som_tecla_pom, #som_tecla_tim e etc. 

// 	tecla.onclick = function() {
// 		tocaSom(idAudio); // a function ta sendo usado na forma de anonima pra nao ser chamada a funcao logo que inicia a pagina e dar error. desse modo consegue acionar a funcao sem chamar ela.
// 	}
// }

function tocaSom(seletorAudio) {
	const elemento = document.querySelector(seletorAudio);

	if(elemento && elemento.localName === 'audio') {
			elemento.play();
	} else {
		console.log('Elemento não encontrado ou seletor inválido!');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let i = 0; i < listaDeTeclas.length; i++) {
	const tecla = listaDeTeclas[i];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`;

	tecla.onclick = function() {
		tocaSom(idAudio);
	}

	tecla.onkeydown = function(evento) {
		if(evento.code === 'Space' || evento.code === 'Enter') {
			tecla.classList.add('ativa');
		}
		
	}

	tecla.onkeyup = function() {
		tecla.classList.remove('ativa');
	}

}
