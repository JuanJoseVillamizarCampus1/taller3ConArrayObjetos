// /*1. Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"
// */
// alert("Programa para calificar almuno segun sus notas de 0 a 5")   

// let nota1 = parseFloat(prompt("Ingrese la nota 1"));
// let nota2 = parseFloat(prompt("Ingrese la nota 2"));
// let nota3 = parseFloat(prompt("Ingrese la nota 3"));

// let promedio = (nota1+ nota2 + nota3)/3;

// if (promedio <= 3.9 ){
//     alert("Estudie")
// }
// else if (promedio > 3.9 && promedio<=5){
//     alert("Becado mijo siga asi")
// }
// else{
//     alert("Ingrese valores de notas entre 0 y 5")
// }

// /*2. Dado un número indicar si es par o impar y si es mayor de 10.*/

// let number = 75;

// if (number%2==0){
//     console.log("El numero es par");
//     console.log(number);

// }
// else {
//     console.log("El numero es impar")
// }


 /*
 3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. 

*/

// let i = 0.58;
// let r = 330;
// let v;
// v = i*r

// console.log(`EL VOLTAJE ES ${v.toFixed(2)}`);

 /*
 4. Construir el algoritmo que solicite el nombre y edad de 3
 personas y determine el nombre de la persona con mayor edad.
*/
// name1 = prompt("Indique el nombre de la primer persona")
// edad1 = parseInt(prompt("Indique la EDAD de la primera persona"))
// name2 = prompt("Indique el nombre de la segunda persona")
// edad2 = parseInt(prompt("Indique la EDAD de la segunda persona"))
// name3 = prompt("Indique el nombre de la tercera persona")
// edad3 = parseInt(prompt("Indique la EDAD de la tercera persona"))

// if (edad1>edad2&&edad1>edad3){
//     alert(`La persona de mayor edad es: ${name1}`)
// }

// else if (edad2>edad3&&edad2>edad1){
//     alert(`La persona de mayor edad es: ${name2}`)
// }
// else{
//     alert(`La persona de mayor edad es: ${name3}`)
// }
 /*
 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
 diferencia, en caso contrario, informar el producto y la
 división del primero respecto al segundo.*/

// let numero1 = Number(prompt("Ingrese un numero: "));
// let numero2 = Number(prompt("Ingrese otro numero: "));
// let suma;

// if (numero1>numero2){
//     suma = numero2+numero2;
//     resta = numero1-numero2;
//     alert(`La suma de los dos numeros es ${suma}, y la diferencia es ${resta}`)
// }
// else {
//     multi= numero1*numero2;
//     division =numero1/2;
//     alert(`La MUltiplicacion de los dos numeros es ${multi}, y la diferencia es ${division}`)
// }

/*
6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.
*/

// let cantidadDeEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
// let mujeres=0;
// let hombres=0;
// let notaMasAlta = -1;
// let notaMasBaja= 101;
// let nombreMax="";
// let nombreMin="";

// for (let i = 1 ; i <= cantidadDeEstudiantes; i++){
//     let name = prompt("Digite el nombre del estudiante").toUpperCase();
//     let sexo = prompt("Para registrar una mujer digite la letra M y para un hombre digite la letra H ").toUpperCase();
//     let notas = parseFloat(prompt("Digite la nota definitiva del estudiante"));
    


//     if (sexo === "M"){
//         mujeres++;
//     }
//     else if(sexo === "H"){
//         hombres++;
//     }
//     else{
//         alert("Digite un valor correcto para hombre o mujer");
//     }
    
    
//     if (notas > notaMasAlta){
//         notaMasAlta = notas;
//         name=nombreMax;
//     }
      
        
//     if (notas < notaMasBaja){
//             notaMasBaja = notas};
//             name=nombreMin;
        
//     }
    


// console.log(`el total de hombres es ${hombres}`);
// console.log(`el total de mujeres es ${mujeres}`);
// console.log(`La nota mas alta fue de ${nombreMax} con  ${notaMasAlta}`)
// console.log(`La nota mas baja fue de ${nombreMin} con ${notaMasBaja}`)


/*
7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.*/


// let nombreProducto =prompt("Ingrese el nombre del producto");
// let cantidad = parseInt(prompt(`Ingrese la cantide de ${nombreProducto} que desea llevar`));
// let precio = parseFloat(prompt("Ingrese el precio del producto"))

// let total = cantidad*precio;

// console.log(`El total a pagar por llevar ${cantidad} ${nombreProducto} es : ${total}`);

/*8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/

// ladoCuadrado=parseFloat(prompt("Ingrese el valor del lado de un cuadrado"));
// perimetroCuadrado= ladoCuadrado*4;

// baseTriangulo=parseFloat(prompt("Ingrese el valor de la base del triangulo:"));
// altura=parseFloat(prompt("Ingrese la altura del triangulo"));

// areaTriangulo = (baseTriangulo*altura)/2;

// console.log(`El perimetro de cuadrado es ${perimetroCuadrado} y el area del triangulo es ${areaTriangulo}`);


/*
9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.*/

// let nAtletas = parseInt(prompt("DIgite la cantidad de atletas en finales"));
// let record=15.50;
// let marcaMax=-1;
// let marcaMin=20;
// let nuevoRecord;
// let nameAtletaMax="";


// for(let z =1 ;z<=nAtletas;z++){
//    let nameAtleta=prompt("Digite el nombre de la atleta")
//    let marca=parseFloat(prompt("Digite la marca registrada por la atleta"))

//     if(marca>marcaMax){
//         marcaMax=marca;
//         nameAtletaMax = nameAtleta;
//     }
//     if(marcaMax>15.50){
//           nuevoRecord = marcaMax;
//           console.log(`La atleta ${nameAtletaMax} rompio el record con ${nuevoRecord} y gano los 500 millones`);
//         }
//         else if (marcaMax<15.50&&marcaMax>marca){
//             marcaMin= marcaMax;
//             console.log(`La atleta campeona es ${nameAtletaMax} y no rompio el record`)
//         }
//     }
 
 /*
 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.
*/


// let numeros=1;
// let contador=0;
// let suma=0;
// let mayor = 0;
// let menor=0;
// let promedio
// while(numeros!=0){
//     numeros++;
//     numeros = parseFloat(prompt("Digite un numero"));
//     if(numeros!=0){
//         suma += numeros;
//         contador++;
//     }
//     if(numeros>mayor){
//         mayor = numeros;
//     }
//     if(numeros<menor){
//         menor = numeros;
//     }
//     console.log(numeros);
// }
//  if(contador>0){
//  promedio=suma/contador;
// console.log(`La suma es ${suma} y el promedio es: ${promedio} el mayor es ${mayor} el menor es ${menor}`);
//  }

// console.log("----------------------------------Arrrays------------------------------------");

/*1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
*/

// const notas=[];

// for(let i=1;i<=3;i++){
//     let nota=parseFloat(prompt(`Ingrese la nota n°${i}`));
//     notas.push(nota)
// }

// const [nota1]=notas;
// const [ , nota2]=notas;
// const [ , ,nota3]=notas;
// let div=notas.length;
// let promedio = (nota1+nota2+nota3)/div
// console.log(`Sus notas son nota1:${nota1}  nota2:${nota2}  nota3:${nota3}`);
// console.log(`Su promedio es: ${promedio.toFixed(2)}`);
// if(promedio>3.9){
//     console.log("Becado mijo siga asi");
// }
// else{
//     console.log("Estudie Vago");
// }

 /*
 4. Construir el algoritmo que solicite el nombre y edad de 3
 personas y determine el nombre de la persona con mayor edad.
*/
// const contacto={};
// let edadMax=-1;
// let nameMax="";

// for(let j=1;j<=3;j++){
//     let nombre=prompt(`Ingrese el NOMBRE de la persona${j}`);
//     let edad=parseInt(prompt(`Ingrese la EDAD de la persona n°${j}`));
//     contacto[nombre]=edad;
//     //Forma normal de agregar propiedades objeto.propiedad = valor;
//     //Agregando con los corchetes le asignamos a la propiedad el nombre de la variable y no una cadena de texto
//     if (edad>edadMax){
//         edadMax=edad;
//         nameMax=nombre;
//     };
// }

// console.log(`La persona con mayor edad es: ${nameMax} con ${edadMax}años`);
// console.log(contacto);

 /*
 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
 diferencia, en caso contrario, informar el producto y la
 división del primero respecto al segundo.*/
// numeros=[];
//  for(let i=1;i<=2;i++){
//  let num=Number(prompt(`Ingrese el numero ${i}`));
// numeros.push(num)
// };
// let[num1,num2]=numeros;
// if(num1>num2){
//     let suma= num1+num2;
//     let resta =num1-num2;
//     console.log(`la suma de los dos numeros es: ${suma} y la resta es ${resta}`);
// }
// else if(num1<num2){
//     let multi = num1*num2;
//     let div = num2/num1;
//     console.log(`la multiplicacion de los dos numeros es: ${multi} y la division es ${div.toFixed(2)}`);
// }
// else{
//     console.log("Los numeros son iguales toncs no voa hacer nah");
// }

// console.log(numeros);

/*
6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.
*/

// cantidadEstudiantes = Number(prompt(`¿Cuantos estudiantes desea ingresar?`))
// notaMax=-1;
// nameMax="";
// notaMin=100;
// nameMin="";
// hombres=0;
// mujeres=0;
// datos=[]
// for(let i = 1;i<=cantidadEstudiantes;i++){
//     nombre=prompt(`Ingrese el nombre de la persona ${i}`);
//     sexo=prompt(`Ingrese el sexo de ${nombre} M para mujer y H para hombre`).toUpperCase();
//     nota=parseFloat(prompt(`Ingrese la nota definitiva de ${nombre}`));
   
//     estudiantes={
//         name:nombre,
//         sexo:sexo,
//         notas:nota
//     }
//     console.log(estudiantes.notas);
//     if(estudiantes.notas>notaMax){
//         notaMax=nota;
//         nameMax=nombre;
//     }
//     if(estudiantes.notas<notaMin){
//         notaMin=nota;
//         nameMin=nombre;
//     };

//     if(estudiantes.sexo==="M"){
//         mujeres++;
//     }
//     else if (estudiantes.sexo==="H"){
//         hombres++;
//     }
//     datos.push(estudiantes)
// }

// console.log(`La persona con la mayor nota fue ${nameMax} con:${notaMax}  y la persona con la menor nota fue ${nameMin} con: ${notaMin}
// en total hay ${mujeres} mujeres y ${hombres} hombres`);
// console.log(datos);

/*
9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.*/


// let cantidadDeatletas=Number(prompt(`Ingrese la cantidad de altetas que pasaron a las finales`));
// let campeona =0;
// let nuevoRecord=15.51;
// const atletas=[];
// let nameCampeona="";
// let campeonaSinRecord=0;

// for (let i = 0; i < cantidadDeatletas; i++) {
//     let nombre=prompt(`Ingrese el nombe de la atleta n°${i+1}`);
//     let marca =parseFloat(prompt(`Ingrese la marca regitrada para la atleta ${nombre}`));
//     const atleta={
//         name:nombre,
//         registro:marca
//     }
//     if (atleta.registro>campeona){
//         campeona=marca;
//         nameCampeona=nombre;
//     }
    
//     atletas.push(atleta);
    
// }

// console.log(atletas);
// console.log(`La atleta campeona es ${nameCampeona} con ${campeona}metros y recibe su medalla de oro`);
// if(campeona>=nuevoRecord){
//     console.log(`La atleta ${nameCampeona} rompio el record con ${campeona}metros gano medalla de oro y ademas se lleva 500 milones por romper el record`);
// }

/*
 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.
*/
numero=1;
numeros=[];
let suma=0;

while (numero!=0) {
    numero =Number(prompt(`Digite 0 para salir, ingrese un numero a registrar:`));
    numeros.push(numero);
    console.log(numero);
    suma += numero; 
}
console.log(numeros);
corte= numeros.slice(0,-1);
console.log(corte);

let promedio=(suma/corte.length).toFixed(2);
const orden =corte.sort(function(a,b){return a-b})
console.log(`En total hay ${corte.length} valores .La suma de los numeros es ${suma}. el promedio es ${promedio} el numero menor es ${orden[0]} y el mayor es ${[orden[orden.length -1]]} `);
