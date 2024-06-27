//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con 
//la suma de los elementos uno a uno.
let lista1 = [9, -1, 8, 21, 3];
let lista2 = [1, 0, 6, 4, 5];
let listaSuma = [];
function sumaDeListas(){
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
     }
    return console.log(listaSuma);
}
sumaDeListas();

//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [];
let sizeLista = parseInt(prompt('Ingrese tamaño de la lista'));

//funcion que llena la lista por datos del ususario
function llenarLista(){ 
    for(let i = 0; i < sizeLista; i++){
        listaNumeros.push(parseInt(prompt(`Ingrese valor ${i+1}`)));   
    }
    console.log(listaNumeros);
}
llenarLista();

//funcion que calcula el promedio de la lista
function promedioLista (){
    let sumaLista = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        sumaLista += listaNumeros[i];
    }
    return console.log(`El promedio de la lista es ${sumaLista/sizeLista}`);
}

promedioLista();

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoDeLista(array){
    let listaCuadrados = [];
    for (let i = 0; i < listaNumeros.length; i++) {
        listaCuadrados.push(listaNumeros[i] * listaNumeros[i]);
    }
    return console.log(listaCuadrados);
}
cuadradoDeLista(listaNumeros);