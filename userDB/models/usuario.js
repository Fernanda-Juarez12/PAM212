// Comenzamos  definiendo una clase con datos a validar que
// tendrá nuestra futura tabla de usuarios

export class Usuario {
    constructor(id, nombre, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();
    }
    
// Después definimos las validaciones del modelo para cuidar la
// longitud e integridad del campo nombre

static validar(nombre) {
    if (!nombre || nombre.trim().length === 0) {
        throw new Error('El nombre no puede estar vacio');
    }
    if  (nombre.length > 50) {
        throw new Error("El nombre no puede tener mas de 50 caracteres");  
    }
    return true;
    }
}