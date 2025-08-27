export interface User {
  _id: string;
  
  // Información básica
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  genero: string;
  estadoCivil: string;
  
  // Contacto
  email: string;
  telefono: string;
  celular: string;
  direccion: string;
  barrio: string;
  ciudad: string;
  departamento: string;
  codigoPostal: string;
  
  // Información académica
  nivelEducativo: string;
  institucionEducativa: string;
  tituloObtenido: string;
  
  // Información SENA
  programaFormacion: string;
  codigoPrograma: string;
  modalidad: string;
  jornada: string;
  centroPoblacional: string;
  fechaInicio: string;
  fechaFinalizacion: string;
  instructor: string;
  
  // Información laboral
  situacionLaboral: string;
  empresa: string;
  cargo: string;
  experienciaLaboral: string;
  
  // Información adicional
  discapacidad: string;
  tipoDiscapacidad: string;
  eps: string;
  grupoSanguineo: string;
  contactoEmergencia: string;
  telefonoEmergencia: string;
  parentescoEmergencia: string;
  
  // Sistema
  createdAt: string;
  updatedAt: string;
}

export interface RegisterData extends Omit<User, '_id' | 'createdAt' | 'updatedAt'> {
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}