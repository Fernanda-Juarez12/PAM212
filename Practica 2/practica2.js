const persona = {
    nombre: "Fernanda Juarez",
    edad: 19,
    direccion:"Blvd del emperador",
    ciudad: "Qro",
    pais:"MX"
};

const{nombre, edad, ciudad} = persona;

 console.log(`Me llamo ${nombre} tengo ${edad} años y vivo en ${ciudad}`);

 //EJERCICIO B

 const productos = [
    { nombre: "Laptop", precio: 12000},
    { nombre: "Mouse", precio: 250},
    { nombre: "Teclado", precio: 750},
    { nombre: "Monitor", precio:3000}
 ];

 let filtrados = productos.filter(producto => producto.precio > 1000);
 console.log(filtrados);

 let arraynew = filtrados.map(filtrado => filtrado.nombre);
 console.log(arraynew);


 //EJERCICIO C

 //1. Usa .find() para buscar a la persona con nombre "Luis".
 const personas = [
    { nombre: "Ana", edad:22},
    { nombre: "Luis", edad:35},
    { nombre: "Maria", edad:28}
 ];

 let arrayLuis = personas.find(persona => persona.nombre == "Luis");
 console.log(arrayLuis);

//2. Usa .forEach() para imprimir el nombre de cada persona con su edad.
personas.forEach(function(persona){
console.log(persona.nombre, persona.edad);
});

//3. Usa reduce() para sumar todas las edades y obtener un total.
let sumarEdades = personas.reduce((sumaTotal, persona) => sumaTotal + persona.edad, 0);
console.log(sumarEdades);