 //var nome = "Pedro Lacerda,";
 //var idade = 18;
 //var idade2 = 100;
 //var frase = "Python é a melhor línguagem da programação";

 //console.log(nome);
 //console.log(idade + idade2);
 //console.log(frase.toUpperCase("Python", "JavaScript"));


//var list = ["maça", "pera", "laranja"];
//list.push("Uva", "Acerola");
//list.pop();
//console.log(list);
//console.log(list.toString());
//console.log(list.join(" . "));


//console.log(fruit);

/*var fruit = [{nome:"maça", cor:"vermelha"}, {nome:"Melão", cor:"Amarelo"}];
console.log(fruit);
console.log(fruit.nome);
console.log(fruit.cor);
*/

/*var idade = prompt("qual é a sua idade?")
if (idade >= 18){
  alert("maior de idade");
}else {
  alert("menor de idade");
}
*/

/*var count = 0;
while (count < 5){
  console.log(count);
  alert(count);
  count++;
};
*/

/*var count;
for (count=0; count <= 5; count++){
alert(count);
};
*/
/*var d = new Date();
alert(d.getDay());
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
  var validar;
  if(idade >= 18){
    validar = true
  }else{
    validar = false
  }
  return validar;
}

var idade = prompt("qual é sua idade?");
console.log(validaIdade(idade));
*/

function botao(){
  document.getElementById("grato").innerHTML = "<b>Obrigado por clicar!</b>";
  console.log(document.getElementById("grato"));
}

function redi(){
  //window.open("https://globallabs.academy/");
  window.location.href = "https://globallabs.academy/";
}

/*function troc(){
  document.getElementById("mv").innerHTML = "Obrigado por passar o mouse!";
//  alert("trocar texto");
}

function vol(){
  document.getElementById("mv").innerHTML = "Passe o mouse aqui!";
}
*/


function troc(elemento){
   elemento.innerHTML = "Obrigado por passar o mouse!";
}

function vol(elemento){
   elemento.innerHTML = "Passe o mouse aqui!";
}


function funcaoChange (elemento){
  console.log(elemento.value);
}
