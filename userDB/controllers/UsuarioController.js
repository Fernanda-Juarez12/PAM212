// importamoa el modelo y el servicio de usuario, después de crea la clase y el
// constructor del controlador y se inicializa el servicio de la BD

import { Usuario } from "../models/usuario";
import DatabaseService from "../database/DatabaseService";

export class UsuarioController {
    constructor() {
        this.listeners = [];
    }

    // Inicializar el controlador con el Service
    async initialize() {
        await DatabaseService.initialize();
    }

    //  preparamos el controlador para invoque al servicio de consulta cuando se le indiquen
    async obtenerUsuarios() {
        try {
            const data = await DatabaseService.getAll();
            return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw new Error('No se pudieron cargar los usuarios', error);  
        }
    }

    // Después preparamos la función de crear usuario la cual primero valida en el modelo 
    // que se cumplan las reglas ya
    // cumplido inserta usando el servicio, notifica a los observadores y retorna

    async crearUsuario(nombre) {
        try {
            // 1. Validar datos
            Usuario.validar(nombre);

            // 2. Insertar en BD
            const nuevoUsuario = await DatabaseService.add(nombre.trim());

            // 3. Notificar a los observadores
            this.notifyListeners();

            // 4. Retornar usuario creado
            return new Usuario(
                nuevoUsuario.id,
                nuevoUsuario.nombre,
                nuevoUsuario.fecha_creacion
            );
        } catch (error) {
            console.error('Error al crear usuario:', error);
            throw error;
        }
    }

    // creamos el sistema de observadores que son los
    // encargados de llevar el seguimiento y la actualización de la vista automática

    //Sistema deobservadores para actualizar la vista  automaticamente
    addListener(callBack) {
        this.listeners.push(callBack);
    }

    removeListener(callBack) {
        this.listeners = this.listeners.filter(l => l == callback)
    } 
    
    notifyListeners() {
        this.listeners.forEach(callBack => callBack());
    }
}

export default new UsuarioController();