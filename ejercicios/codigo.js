/* I
    Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
    Mostrar por pantalla los doce nombres utilizando la función console.log().
*/
const meses = ["enero", "febrero", "marzo", "abril", "etc"];
for (i = 0; i <= meses.length - 1; i++) console.log(meses[i]);

/* II
    A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
    1- Determinar cual de los dos elementos de texto es mayor
    2- Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios
    para obtener un resultado true y otro resultado false
    3- Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
*/
const valores = [true, 5, false, "hola", "adios", 2];
//Valor de texto mas largo
if (valores[3].length < valores[4].length) {
  console.log(valores[4]);
} else {
  console.log(valores[3]);
}

// resultados true y false de los booleanos
console.log(valores[0] == valores[1]);
console.log(valores[0] == valores[1] || valores[1] == valores[1]);

//Operaciones matematicas de los valores numericos
console.log(`\n SUMA: ${valores[1] + valores[5]}\n RESTA: ${
  valores[1] - valores[5]
}\n MULTIPLICACION: 
${valores[1] * valores[5]}\n DIVISION: ${valores[1] / valores[5]}`);

/*  III
    El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que 
    se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto 
    de la división, se obtiene la letra seleccionándola dentro de un array de letras.

    El array de letras es:

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
    'H', 'L', 'C', 'K', 'E', 'T'];
    Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. 
    Con estos datos, elaborar un pequeño script que:

    1- Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI
     que se ha indicado.
    2- En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor 
    que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado 
    no es válido y el programa no muestra más mensajes.
    3- Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
    4- Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden,
    se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso,
    se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/
const letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

//Almancenando las variables
let numeroIngresado = parseInt(prompt("ingrese un numero", ""));
let letraIndicada1 = letras[numeroIngresado];

//Comprobacion
let letraIndicada2;
if (numeroIngresado < 0 || numeroIngresado > 99999) {
  alert("El numero no es valido");
}
//Calculo con el metodo DNI
else {
  letraIndicada2 = letras[numeroIngresado % 23];
}
console.log(
  `La letra original indicada es ${letraIndicada1} pero despues del metodo DNI es ${letraIndicada2}`
);
//Comprobamos si la letra indicada es igual a la letra resultante del DNI
if (letraIndicada1 == letraIndicada2) {
  console.log("si es correcto");
} else {
  console.log("no es correcto");
}

/* IV
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.
 */
function operacion(cadena) {
  let cadenaFinal;
  if (cadena == cadena.toUpperCase()) {
    cadenaFinal = "todo esta en mayusculas";
  } else if (cadena == cadena.toLowerCase()) {
    cadenaFinal = "todo esta en minuscula";
  } else {
    cadenaFinal = "Tiene tanto minusculas como mayusculas";
  }
  return cadenaFinal;
}

let cadenaDeTexto = prompt("Ingrese una frase", "");
console.log(operacion(cadenaDeTexto));

/* V
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como 
resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado 
devuelto por la función.
*/
function operacion2(numero) {
  if (numero % 2 == 0) {
    console.log("es par");
  } else {
    console.log("es inpar");
  }
}
let numeroEntero = parseInt(prompt("Ingrese un numero entero", ""));
operacion2(numeroEntero);

/* VI
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
"La ruta nos aporto otro paso natural".
*/
polindrono = (pTexto) => {
  let nuevoTexto = ""; // si no le ponemos esto su valor sera undelfined. ej: supongamos que texto = "hola", entonces en la op. final nuevoTexto sera ='undelfinedaloh"
  for (i = pTexto.length - 1; i >= 0; i--)
    nuevoTexto = nuevoTexto + pTexto.charAt(i);
  nuevoTexto == pTexto
    ? console.log("es un polindrono")
    : console.log("no es un polindrono");
};

let texto = prompt("ingrese una frase para saber si es un polindrono", "");
texto.toLowerCase();
texto.replaceAll(" ", ""); //aun falta editar esta parte
polindrono(texto);

/* VII
Crear una array que tome como valores los numeros del 1 al 100 en la cual:
1- mostrar los numeros pares
2- mostrar los numeros inpares
3- mostrar los numeros de 3 en 3
4- mostrar los numeros de 4 en 4
5- mostrar los numeros de 5 en 5
*/
// Definicion de la Array de 100 números:
const miArray = [];
for (i = 0; i <= 99; i++) miArray.push(i + 1);

//Elementos pares de la Array :(OJO -> puedo hacerlo también como una secuencia de 2 en 2 para ahorrar código)
miArray.forEach((numero) => {
  if (numero % 2 == 0) console.log(numero);
});

//Elementos impares de la Array &  Secuencia de 3 en 3 : (OJO->  como el punto 2 y 3 es prácticamente lo mismo decidí mostrar lo que dije antes de la secuencia para los pares)
for (i = 2; i <= miArray.length; i += 3) console.log(miArray[i]);

//de 4 en 4:
for (i = 3; i <= miArray.length; i += 4) console.log(miArray[i]);

//de 5 en 5:
for (i = 4; i <= miArray.length; i += 5) console.log(miArray[i]);

/* VIII
Crear un prototipo padre el cual herede sus caracteristicas a prototipos hijos y que funciones como una
"calculadora" OJO-> lo invente yo asi que no hace exactamente eso pero x, es un ejemplo de POO  
*/

function Padre(op) {
  this.op = op;
}

Hijo.prototype = new Padre();
function Hijo(op, n1, n2, ...n) {
  this.super = Padre;
  this.super(op);
  this.n1 = n1;
  this.n2 = n2;
  this.nExtra = n;
}

Hijo.prototype.ejecucion = function () {
  let resultado;
  if (this.op === "+") {
    resultado = this.n1 + this.n2;
    this.nExtra.forEach((numero) => (resultado = resultado + numero));
  } else if (this.op === "-") {
    resultado = this.n1 - this.n2;
    this.nExtra.forEach((numero) => (resultado = resultado - numero));
  } else if (this.op === "*") {
    resultado = this.n1 * this.n2;
    this.nExtra.forEach((numero) => (resultado = resultado * numero));
  } else {
    resultado = this.n1 / this.n2;
    this.nExtra.forEach((numero) => (resultado = resultado / numero));
  }
  console.log(resultado);
};

const multi = new Hijo("*", 6, 7, 9, 2, 3, 3, 5, 8, 9, 2, 3, 5);
multi.ejecucion();

/* IX
Crear un algoritmo que permita ingresar una fecha de nacimiento (como formulario de html) para mostrar en
consola la edad que tiene esa persona OJO-> Aun no esta listo
*/

let boton = document.getElementById("boton");
boton.addEventListener((type = "click"), () => {
  console.log(tiempoRelativo());
});

function tiempoRelativo() {
  let nacimiento = Date.parse(document.getElementById("tiempoIngresado").value);
  let resul = Date.now() - nacimiento;
  return resul; //Aun no se transformar de "time stamp" a una fecha normal :c
}

console.log(Date.now());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* JONMIRCHA 1
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe.
miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. 
miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
iFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo 
Hola Mundo Hola Mundo.
*/

//1 -> no cree la funcion al ser tan sencilla (esta en el manejo de errores)
//2
const recorte = (c, caracteres) => c.slice(0, caracteres);
//3
const separa = (c, divideEn) => c.split(divideEn);
//4
const repetir = (c, nImpresiones) => {
  for (i = 1; i <= nImpresiones; i++) console.log(c);
};
//Manejo de Errores
do {
  var a = true;
  (cadena = prompt("Ingrese una frase")),
    (val1 = prompt("Ingrese el numero de caracteres a mostrar")),
    (val2 = prompt(
      "Ingrese un caracter perteneciente a la cadena por la cual la dividiremos"
    )),
    (val3 = prompt("Ingrese el numero de veces que desea imprimir la cadena"));
  !cadena ||
  isNaN(val1) ||
  val1 > cadena.length ||
  val1 <= 0 ||
  cadena.includes(val2) === false ||
  isNaN(val3) ||
  val3 <= 0
    ? alert(
        "Uno de los valores que ingresaste no era el que se esperaba \n Intentalo nuevamente..."
      )
    : (a = false);
} while (a === true);

//impresion de datos
console.log(
  `La frase que ingresaste contiene ${
    cadena.length
  } caracteres, de los cuales "${recorte(
    cadena,
    val1
  )}" son los primeros ${val1}`
);
console.log(`Partiremos la cadena a partir de "${val2}" :`);
console.log(separa(cadena, val2));
console.log(`Finalmente nos pediste que repitieramos esa frase ${val3} veces:`);
repetir(cadena, val3);

/* JONMIRCHA 2
    5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 
        "odnuM aloH".
    6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
    miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que 
    en otro), pe. mifuncion("Salas") devolverá true.
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2,
    xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
/////////////////////////////////////PRIMERA FORMA//////////////////////////////////////
// 5
const reviertelo = (c = undefined) => {
  let newC = "";
  for (i = c.length; i >= 0; i--) newC = newC + c.charAt(i);
  return newC;
};

//6
const repetido = (c = undefined, ref = undefined) =>
  c.match(new RegExp(ref, "ig")).length;

//7
const polindrono = (c = undefined) => {
  let newC = "",
    cadena = c;
  cadena = cadena.toLowerCase().replaceAll(" ", "").trim();
  for (i = c.length - 1; i >= 0; i--) newC = newC + cadena.charAt(i);
  newC === cadena
    ? console.log("Si es un Polindrono")
    : console.log("No es un Polindrono");
};
//8
const eliminalo = (c = undefined, pa = undefined) => c.replaceAll(pa, "");

//Manejo de errores
do {
  var a = true,
    cadena = prompt("Ingrese una cadena"),
    referencia = prompt("Ingrese la palabra/caracter que desea evaluar"),
    cAEliminar = prompt("Ingrese una palabra/caracter a eliminar"),
    polin = prompt("Finalmente ingrese un polindrono");
  !cadena ||
  !referencia ||
  !polin ||
  cadena.includes(referencia) === false ||
  cadena.includes(cAEliminar) === false
    ? alert("Ingresaste mal un valor, intentalo otra ves...")
    : (a = false);
} while (a === true);

//impresion
console.log(`La cadena revertida es:${reviertelo(cadena)}`);
console.log(`"${referencia}" se repite ${repetido(cadena, referencia)} veces`);
console.log(
  `Sin "${cAEliminar}" la frase queda asi : ${eliminalo(cadena, cAEliminar)}`
);
polindrono(polin);

////////////////////////////////////////SEGUNDA FORMA/////////////////////////////////////////
//5
const reviertelo1 = (c = undefined) =>
  !c
    ? console.error("Lo sentimos pero la cadena esta vacia")
    : console.log(c.split("").reverse().join(""));
reviertelo1("holaaaa dddd");

//6
const repetido1 = (c = undefined, ref = undefined) => {
  if (!c || typeof c !== Number) return console.warn("Esa cadena no es valida");
  if (!ref || c.includes(ref) === false)
    return console.error("La referencia esta mal");
  console.log(c.match(new RegExp(ref, "ig")).length);
};
repetido1("hola mundo Mundo mundo", "mundo");

//7
const polindrono1 = (c = "") => {
  if (!c || typeof c === Number)
    return console.error("Esa cadena no es valida");
  let cade = c.toLowerCase().trim(),
    newC = cade.split("").reverse().join("");
  newC === cade ? console.log(true) : console.log(false);
};
polindrono1("Hannah");

//8
const eliminalo1 = (c = undefined, pa = undefined) => {
  if (!c || typeof c === Number)
    return console.warn("Esta cadena no es valida");
  if (!pa || c.includes(pa) === false)
    return console.error("La referencia esta mal");
  console.log(c.replaceAll(pa, ""));
};
eliminalo1("xyz1, xyz2, xyz3", "xyz");

/* JONMIRCHA 3
    9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
    10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un 
    sentido que en otro), pe. miFuncion(2002) devolverá true.
    11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
    se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5)
    devolverá 120.
*/
//9
const nRandom = () =>
  console.log(Math.round(Math.random() * (600 - 501 + 1) + 501));

//10
const capicua = (n = undefined) => {
  if (isNaN(n)) return console.error("No ingresaste un numero");
  let nn = String(n).split("").reverse().join("");
  nn == n
    ? console.log(`${nn} si es un capicua`)
    : console.log(`${nn} no es un capicua`);
};

//11
const factorial = (n = undefined) => {
  if (!n) return console.warn("No ingresaste ningun valor");
  if (n <= 0)
    return console.error("Solo se permiten numeros enteros positivos");
  let valor = 1;
  for (i = 1; i <= Math.abs(n); i++) valor *= i;
  console.log(`${n}! = ${valor}.`);
};

//impresion
nRandom();
capicua(2002);
factorial(5);

/* JONMIRCHA 4
    12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí 
    mismo y 1) o no, pe. miFuncion(7) devolverá true.
    13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar
    14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C")
    devolverá 32°F.
*/
//12
const nPrimp = (n = undefined) => {
  if (!n || isNaN(n)) return console.error("Ese numero no es valido");
  if (n == 0 || n == 1 || n == 4) return false;
  for (i = 2; i <= n / 2; i++) if (n % i == 0) return false;
  return true;
};

//13
const parOImp = (n = undefined) =>
  !n
    ? console.warn("No ingresaste ningun numero")
    : isNaN(n)
    ? console.error("Eso no es un numero")
    : n % 2 == 0
    ? console.log("Es Par")
    : console.log("Es Impar");

//14
const grados = (n = 0, t = undefined) => {
  if (isNaN(n) || !t) return console.warn("No ingresaste valores admitidos");
  t = String(t).toUpperCase();
  if (t !== `C` && t !== `F`)
    return console.error(`Solo se permite ingresar "C" o "F"`);
  t === `C`
    ? console.log(`${n}°${t} = ${Math.abs((n * 9) / 5 + 32)}°F`)
    : console.log(`${n}°${t} = ${Math.abs(((n - 32) * 5) / 9)}°C`);
};

console.log(nPrimp(7));
parOImp(8);
grados(3.4, "c");

//OBSERVACIÓN ->  Para saber si un numero "X" es primo debemos dividir dicho numero entre 2 Obteniendo como resultado un numero "Y", luego cada numero comprendido entre 2 y "Y" (menos el 4) vamos a dividirlo entre "X" si el modulo de alguna división es 0 "X" ya no es un primo, pero si en todas el resultado es mayor a 0 "X"  si es primo.  (0, 1 y 4 no los dividiremos porque su división siempre es igual a 0  así "X" sea realmente un primo; son "casos especiales").

/* JONMIRCHA 5
    15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. 
    miFuncion(100,2) devolverá 4 base 10.
    16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad 
    dada, pe. miFuncion(1000, 20) devolverá 800.
    17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de
    hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
//15
const conver = (n = undefined, b = undefined) => {
  if (isNaN(n) || isNaN(b)) return console.error("Por favor ingresar numeros");
  if (b !== 10 && b !== 2) return console.error("Esa base no es valida");
  let eR = /[2-9]/;
  eR.test(n) === false && b === 2
    ? console.log(
        `El numero binario ingresado en decimal es: ${parseInt(n, 2)}`
      )
    : console.log(
        `El numero decimal ingresado en binario es: ${n.toString(2)}`
      );
};
conver(100, 2);

//16
const descuento = (montoI = undefined, d = 0) =>
  isNaN(montoI) || isNaN(d)
    ? console.error("No es valido")
    : montoI <= 0 || d <= -1
    ? console.warn("Ingresar solo numeros positivos")
    : (montoI -= montoI * (d / 100));

console.log(descuento(1000, 20));

//17
const fecha = (fe = undefined) => {
  if (!(fe instanceof Date))
    return console.error("La fecha ingresada no es valida");
  let feHu = Math.floor(
    (new Date().getTime() - fe.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
  Math.sign(feHu) === 1
    ? console.log(`Han pasado  ${feHu} años`)
    : Math.sign(feHu) === 0
    ? console.warn(`Eh! estamos en el mismo año, no puedes tener 0 años`)
    : console.log(`Faltan ${Math.abs(feHu)} años para el ${fe.getFullYear()}`);
};

fecha(new Date(2003, 6, 21));

/* JONMIRCHA 6
    18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
    devuelva Vocales: 4, Consonantes: 5.
    19) Programa una función que valide que un texto sea un nombre válido, pe.miFuncion("Jonathan MirCha") devolverá verdadero.
    20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
let eRVocal = /[aeiou]/gi,
  eRConson = /[bcdfghjklmnñpqrstvwxyz]/gi,
  eRNombre = /^[a-zÁÉÍÓÚÄËÏÖÜÑ\s]+$/,
  eRCorreo = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

//18
const contador = (c = undefined) =>
  !c || typeof c === "number"
    ? console.error(`Eh no son datos validos! ingresa letras`)
    : !eRVocal.test(c) || !eRConson.test(c)
    ? console.warn(`La cadena debe tener al menos 1 vocal y 1 consonante`)
    : console.log(
        `Vocales: ${c.match(eRVocal).length}\nConsonantes: ${
          c.match(eRConson).length
        }`
      );

//19
const validaN = (name = undefined) =>
  !name || !isNaN(name)
    ? console.error("Valor invalido")
    : !eRNombre.test(name)
    ? console.info(`Lo sentimos pero ${name} no es un nombre valido`)
    : console.log(`${name} si es un nombre valido`);

//20
const validaC = (correo = undefined) =>
  !correo || !isNaN(correo)
    ? console.error("Valor invalido")
    : !eRCorreo.test(correo)
    ? console.info(`${correo} no es un correo valido`)
    : console.log(`${correo} si es un correo valido`);

contador("Hola mundo");
validaN("David Escalante");
validaC("davides11.11@gmail.com");

//19-20 Juntos
const validaNYC = (name = undefined, correo = undefined) =>
  !name || !correo || !isNaN(name) || !isNaN(correo)
    ? console.error("Dato ingresado invalido")
    : !eRNombre.test(name) || !eRCorreo.test(correo)
    ? console.info(`Lo sentimos pero uno de los datos no era correcto`)
    : console.log(`"${name}" y '${correo}' si son validos`);

validaNYC("David Escalante", "davidesc11.11@yandex.org");

/* JONMIRCHA 7
    21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe.
    mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
    22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe.
    miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
    23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números
    pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
//21
const arreAlCua = (a = undefined) => {
  if (!a || !(a instanceof Array)) return console.error("El dato no existe");
  if (a.length === 0) return console.warn("El arreglo no puede estar vacio");
  for (i = 0; i <= a.length - 1; i++)
    if (isNaN(a[i]))
      return console.warn("El arreglo solo puede contener numeros");
  console.log(a.map((x) => x * x));
};

//22
const mayorMenor = (a = undefined) => {
  if (!a || !(a instanceof Array)) return console.error("El dato no es valido");
  if (a.length === 0) return console.warn("El arreglo no puede estar vacio");
  a.forEach((num) => {
    if (isNaN(num))
      return console.warn("El arreglo solo puede contener numeros");
  });
  return console.log(
    `El numero mayor es ${Math.max(...a)} y el numero menor es ${Math.min(
      ...a
    )}`
  );
};

//23
const arreAObj = (a = undefined) => {
  if (!a || !(a instanceof Array)) return console.error("El dato no es valido");
  if (a.length === 0) return console.warn("El arreglo no puede estar vacio");
  const objetoConArr = { nPares: [], nImpares: [] };
  a.forEach((num) =>
    isNaN(num)
      ? console.warn("El arreglo solo puede contener numeros")
      : num % 2 === 0
      ? objetoConArr.nPares.push(num)
      : objetoConArr.nImpares.push(num)
  );
  console.log(objetoConArr);
};

arreAlCua([4, 6, 5]);
mayorMenor([4, 6, 78, 5, 1, 3]);
arreAObj([23, 45, 66, 78, 3, 2, 99]);

/* JONMIRCHA 8
    24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
    el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
    pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
    25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
    pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
    26) Programa una función que dado un arreglo de números obtenga el promedio, 
    pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
//24
const arrOrdenado = (a) => {
  if (!a || !(a instanceof Array)) return console.error("El dato no es valido");
  if (a.length === 0) return console.info("El arreglo no puede estar vacio");
  for (i = 0; i <= a.length - 1; i++)
    if (isNaN(a[i])) return console.error("Solo puede contener numeros");
  console.log({
    ascendente: a
      .map((el) => el)
      .sort(function (a, b) {
        return a - b;
      }),
    descendente: a
      .map((el) => el)
      .sort(function (a, b) {
        return b - a;
      }),
  });
};

//25
const arrSinDuplicados = (a = undefined) =>
  !a || !(a instanceof Array)
    ? console.error("El dato no es valido")
    : a.length === 0
    ? console.warn("El arreglo no puede estar vacio")
    : console.log(Array.from(new Set(a)));

//26
const promedioDelArr = (a = undefined) => {
  if (!a || !(a instanceof Array)) return console.error("El dato no es valido");
  if (a.length === 0) return console.warn("El arreglo no puede estar vacio");
  for (i = 0; i <= a.length - 1; i++)
    if (isNaN(a[i])) return console.error("Solo puede contener numeros");
  console.log(a.reduce((total, num) => total + num) / a.length);
};

arrOrdenado([4, 7, 10, 6, 1]);
arrSinDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
promedioDelArr([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

// JONMIRCHA 9
class Pelicula {
  constructor(id, titulo, director, estreno, pais, generos, calificacion) {
    this.id = this.validaId(id);
    this.titulo = this.validaTitulo(titulo);
    this.director = this.validaDirec(director);
    this.estreno = this.validaAnio(estreno);
    this.pais = this.validaPais(pais);
    this.generos = this.validaGene(generos);
    this.calificacion = this.validaCalifi(calificacion);
  }

  static generAceptados() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  validaId(id = undefined) {
    return !/^([a-z]{2,2})+([0-9]{7,7})$/i.test(id)
      ? (id = "Aun no registrado")
      : id;
  }
  validaTitulo(titulo = undefined) {
    return !titulo || titulo.length > 100 || !isNaN(titulo)
      ? (titulo = "Untitled")
      : (titulo = titulo);
  }
  validaDirec(director = undefined) {
    return !director ||
      !/^[a-zÁÉÍÓÚÄËÏÖÜÑ\s]+$/i.test(director) ||
      director.length > 50
      ? (director = "Anonimo")
      : (director = director);
  }
  validaAnio(anio = undefined) {
    return isNaN(anio) || anio <= 1888 || anio > new Date().getFullYear()
      ? (anio = "No incluido")
      : (anio = anio);
  }
  validaPais(pais = undefined) {
    if (!pais || !Array.isArray(pais)) return "No especificado";
    for (const pa of pais)
      if (!/^[a-zÁÉÍÓÚÄËÏÖÜÑ\s]+$/i.test(pa)) return "Pais no encontrado";
    return pais.join(", ");
  }
  validaGene(generos = undefined) {
    if (!Array.isArray(generos)) return "Aun no tipado";
    let gValidados = generos.filter((gener) =>
      Pelicula.generAceptados().includes(gener)
    );
    return gValidados.length === 0
      ? (gValidados = "Indefinido")
      : (gValidados = gValidados.join(", "));
  }
  validaCalifi(calificacion = undefined) {
    return isNaN(calificacion) || calificacion > 10 || calificacion < 1
      ? (calificacion = "Aun no calificada")
      : (calificacion = calificacion);
  }

  fichaTecnica() {
    console.log(
      `Pelicula: "${this.titulo}" \nId: ${this.id}. \nDirector: ${this.director}. \nAño: ${this.estreno}.\nPais: ${this.pais}. \nGenero: ${this.generos}. \nCalificacion: ${this.calificacion}`
    );
  }
}

const peli1 = new Pelicula(
    "df3456778",
    "The Dark Knigth",
    "Christopher Nolan",
    2008,
    ["Reino Unido", "Estados Unidos"],
    ["Action"],
    9.4
  ),
  peli2 = new Pelicula(
    "Kf3556459",
    "Chronicles",
    "Josh Trank",
    2012,
    ["Irlanda"],
    ["Drama", "Sci-Fi", "Thriller", 564, "PapasFritas"],
    7.1
  ),
  peli3 = new Pelicula("565hj66gghfd4", 345, "", 1153, "Holoo", [], 200),
  informacionDePeliculas = [peli1, peli2, peli3];

informacionDePeliculas.forEach((peli) => peli.fichaTecnica());

/* POO 1
    Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
    El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.
    Crea sus métodos get, set y toString.
    Tendrá dos métodos especiales:
    ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
    retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa,
    la cantidad de la cuenta pasa a ser 0.
*/

class Cuenta {
  constructor(titular = undefined, cantidad = undefined) {
    this.titular = this.validaTitu(titular);
    this.cantidad = this.validaCan(cantidad);
  }
  validaTitu(t) {
    return !isNaN(t) ? console.error("El titular no pueden ser numeros") : t;
  }
  validaCan(c) {
    return isNaN(c) ? 0 : c;
  }
  ingresar(can) {
    return isNaN(can) || can < 0
      ? console.error("No tramitado")
      : (this.cantidad += can);
  }
  retirar(can) {
    return isNaN(can) || can > this.cantidad
      ? console.log("No tramitado")
      : (this.cantidad -= can);
  }
  mostrar() {
    console.log(
      `Hola ${this.titular}. \nla cuenta tiene un saldo de: ${this.cantidad}$`
    );
  }
}

const propietario1 = new Cuenta("David Escalante", 1000);
const propietario2 = new Cuenta("Maria Lopez");
const propietario3 = new Cuenta("Marcos Perez", "marcos");

propietario1.mostrar();
propietario1.retirar(899);
propietario1.mostrar();
propietario3.ingresar(500);
propietario3.mostrar();

/* POO 2
    Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. No queremos que se 
    accedan directamente a ellos. Piensa que modificador de acceso es el más adecuado, también su tipo. Si 
    quieres añadir algún atributo puedes hacerlo.
    Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena
    vacía para String, etc.). Sexo sera hombre por defecto, usa una constante para ello.
    Se implantaran varios constructores:
    Un constructor por defecto.
    Un constructor con el nombre, edad y sexo, el resto por defecto.
    Un constructor con todos los atributos como parámetro.
    Los métodos que se implementaran son:
    calcularIMC(): calculara si la persona esta en su peso ideal (peso en kg/(altura^2  en m)), si esta 
    fórmula devuelve un valor menor que 20, la función devuelve un -1, si devuelve un número entre 20 y 25 
    (incluidos), significa que esta por debajo de su peso ideal la función devuelve un 0  y si devuelve un 
    valor mayor que 25 significa que tiene sobrepeso, la función devuelve un 1. Te recomiendo que uses 
    constantes para devolver estos valores.
    esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
    comprobarSexo(char sexo): comprueba que el sexo introducido es correcto. Si no es correcto, sera H. 
    No sera visible al exterior.
    toString(): devuelve toda la información del objeto.
    generaDNI(): genera un número aleatorio de 8 cifras, genera a partir de este su número su letra 
    correspondiente. Este método sera invocado cuando se construya el objeto. Puedes dividir el método 
    para que te sea más fácil. No será visible al exterior.
    Métodos set de cada parámetro, excepto de DNI.
    Ahora, crea una clase ejecutable que haga lo siguiente:

    Pide por teclado el nombre, la edad, sexo, peso y altura.
    Crea 3 objetos de la clase anterior, el primer objeto obtendrá las anteriores variables pedidas
    por teclado, el segundo objeto obtendrá todos los anteriores menos el peso y la altura y el último 
    por defecto, para este último utiliza los métodos set para darle a los atributos un valor.
    Para cada objeto, deberá comprobar si esta en su peso ideal, tiene sobrepeso o por debajo de su peso 
    ideal con un mensaje.
    Indicar para cada objeto si es mayor de edad.
    Por último, mostrar la información de cada objeto.
    Puedes usar métodos en la clase ejecutable, para que os sea mas fácil.
 */

//callback Hell
/*const padre = (n, callback) =>
    (!n || isNaN(n))
        ? console.error('Error perron')
        : setTimeout(() =>
            callback(n + n)
            , 1000);

padre(2, (op) => {
    console.log(op)
    padre(op, (op) => {
        console.log(op)
        padre(op, (op) => {
            console.log(op)
            padre("gt", (op) => {
                console.log(op)
            })
        });
    });
});


//promesa

const padreP = (n) =>
    (!n || isNaN(n))
        ? Promise.reject(`Ups error gatuno`)
        : new Promise(resolve =>
            setTimeout(() =>
                resolve({ op: n + n, }), 1000));

padreP(102).then(obj =>{
    console.log(`:::${obj.op}:::`)
    return padreP(obj.op)
})
.then(obj =>{
    console.log(`:::${obj.op}:::`)
    return padreP(obj.op)
})
.then(obj =>{
    console.log(`:::${obj.op}:::`)
    return padreP("OUYTG")
})
.then(obj => console.log(`:::${obj.op}:::`))
.catch(error => console.error(error));*/

//Async-Await
const padreP = (n) =>
  !n || isNaN(n)
    ? Promise.reject(`Ups error gatuno`)
    : new Promise((resolve) => setTimeout(() => resolve({ op: n + n }), 1000));

const fAsincrona = async () => {
  try {
    let peticion = await padreP(2);
    console.log(`${peticion.op}`);

    peticion = await padreP(peticion.op);
    console.log(`${peticion.op}`);

    peticion = await padreP("EXESDE");
    console.log(`${peticion.op}`);
  } catch (error) {
    console.error(error);
  }
};

//Ejemplo de un Proxy (usando la misma logica del ejercicio JONMIRCHA 9 )
const fun = () => [
  "Action",
  "Adult",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game-Show",
  "History",
  "Horror",
  "Musical",
  "Music",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];

const pelicula = {
  id: "",
  titulo: "",
  director: "",
  estreno: 0,
  pais: [],
  generos: [],
  calificacion: 0,
};

const manejador = {
  set(obj, prop, val) {
    if (Object.keys(obj).indexOf(prop) === -1)
      return console.error("No existe ese atributo");
    if (prop == "id" && !/^([a-z]{2,2})+([0-9]{7,7})$/i.test(val))
      return console.error("La id no es correcta");
    if (
      (prop == "titulo" || prop == "director") &&
      !/^[a-zÁÉÍÓÚÄËÏÖÜÑ\s]+$/i.test(val)
    )
      return console.error("Los nombres propios no llevan numeros");
    if (
      prop == "estreno" &&
      (isNaN(val) || val < 1888 || val > new Date().getFullYear() + 2)
    )
      return console.error("Año invalido");
    if (prop == "calificacion" && (isNaN(val) || val > 10 || val < 0))
      return console.warn(
        "La calificacion solo puede estar en el rango permitido"
      );
    if (prop == "pais") {
      if (!Array.isArray(val))
        return console.warn("Ingresa los paises en forma de arreglo");
      for (p of val)
        if (!/^[a-zÁÉÍÓÚÄËÏÖÜÑ\s]+$/i.test(val))
          return console.error("Eso no es un pais");
    }
    if (prop == "generos") {
      if (!Array.isArray(val))
        return console.warn("Ingresa los generos en forma de arreglo");
      val = val.filter((gen) => fun().includes(gen));
      if (val.length === 0) return console.warn("Ingresa generos validos");
    }
    obj[prop] = val;
  },
};

const pelicula1 = new Proxy(pelicula, manejador);
pelicula1.id = "rffdef34";
pelicula1.generos = ["Action", "Adult", 45];
pelicula1.calificacion = 9.9;
pelicula1.titulo = "Enemigos en el tren";
pelicula1.director = "James perex";
pelicula1.estreno = 2023;
pelicula1.pais = ["Venezuela"];
console.log(pelicula1);

//Ejemplo de una propiedad dinamica
const ob = {},
  pro = () =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            random: Math.round(Math.random() * 100),
          }),
        1000
      )
    ),
  eje = async () => {
    try {
      let arr = [];
      for (i = 1; i <= 10; i++) arr.push((await pro()).random);
      arr.forEach((val, index) => (ob[`valor${index + 1}`] = val));
      console.log(ob);
    } catch (error) {
      console.error(error);
    }
  };

eje();

//EJEMPLO DE LAS VARIABLES CSS O CUSTOM PROPERTYS

const actualiza = () => getComputedStyle($todo).getPropertyValue("--variable");

//Tomamos el valor de varias etiquetas del DOM
const $todo = document.documentElement,
  $link = document.querySelector("a"),
  $link1 = document.querySelector(".hol"),
  $parr = document.querySelector("p");

//Hacemos que el valor de la CUSTOM PROPERTY pertenesca a una variable en JS
let variableCSS = actualiza();
console.log(variableCSS);

//Le aplicamos el valor de la CUSTOM PROPERTY a una propiedad ya existente de la etiqueta style de un "a"
$link.style.color = variableCSS;

//Le modificamos el valor a la CUSTOM PROPERTY
$todo.style.setProperty("--variable", "green");

//Le volvemos a aplicar el nuevo valor a la variable donde se encontraba el antiguo valor
variableCSS = actualiza();
console.log(variableCSS);

// Le aplicamos el nuevo valor dentro de la variable a una propiedad nueva de la etiqueta "p"
$link1.style.setProperty("background", variableCSS);
$parr.style.setProperty("color", variableCSS);

//volvemos a cambiar el calor de la custom property
$todo.style.setProperty("--variable", "30px");
//actualizamos el valor a la variable
variableCSS = actualiza();
//le aplicamos el nuevo valor a una propiedad
$parr.style.setProperty("font-size", variableCSS);

/* EJEMPLO DE LOS TEMPLATES HTML
    <template class="lista">
        <li></li>
    </template>
    <template class="figure">
        <figure>
            <img>
            <figcaption></figcaption>
        </figure>
    </template>
*/
const muestraListaYFiguras = () => {
  const $papaLista = document.createElement("ul");

  for (i = 1; i <= 7; i++) {
    $tFigura.querySelector("img").setAttribute("src", "#");
    $tFigura.querySelector("figcaption").textContent = `soy${i}`;

    $tFiguraClon = document.importNode($tFigura, true);
    $fragmento.append($tFiguraClon);
  }
  //OJO-> Aqui tuve un problema perron con ".textContent" pero al final no era el metodo, sino que no clone la template; RECORDEMOS QUE SI LA USAMOS 1VES YA NO PODEMOS VOLVERLA A USARR!!!
  for (i = 1; i <= 5; i++) {
    $tLista.querySelector("li").textContent = `Pertenesco a la iteracion ${i}`;
    $tListaClon = document.importNode($tLista, true);
    $papaLista.appendChild($tListaClon);
    $fragmento.prepend($papaLista);
  }
  document.body.append($fragmento);
};

const $boton = document.querySelector(".boton"),
  $tLista = document.querySelector(".lista").content,
  $tFigura = document.querySelector(".figure").content,
  $fragmento = document.createDocumentFragment();

$boton.onclick = muestraListaYFiguras;
$tLista.querySelector("li").textContent = "holaa";
