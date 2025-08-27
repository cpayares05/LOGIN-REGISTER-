import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  // Información básica
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: Date;
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
  fechaInicio: Date;
  fechaFinalizacion: Date;
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
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  // Información básica
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  tipoDocumento: { type: String, required: true },
  numeroDocumento: { type: String, required: true, unique: true },
  fechaNacimiento: { type: Date, required: true },
  lugarNacimiento: { type: String, required: true },
  genero: { type: String, required: true },
  estadoCivil: { type: String, required: true },
  
  // Contacto
  email: { type: String, required: true, unique: true },
  telefono: { type: String },
  celular: { type: String, required: true },
  direccion: { type: String, required: true },
  barrio: { type: String, required: true },
  ciudad: { type: String, required: true },
  departamento: { type: String, required: true },
  codigoPostal: { type: String },
  
  // Información académica
  nivelEducativo: { type: String, required: true },
  institucionEducativa: { type: String },
  tituloObtenido: { type: String },
  
  // Información SENA
  programaFormacion: { type: String, required: true },
  codigoPrograma: { type: String },
  modalidad: { type: String, required: true },
  jornada: { type: String, required: true },
  centroPoblacional: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFinalizacion: { type: Date },
  instructor: { type: String },
  
  // Información laboral
  situacionLaboral: { type: String, required: true },
  empresa: { type: String },
  cargo: { type: String },
  experienciaLaboral: { type: String },
  
  // Información adicional
  discapacidad: { type: String, required: true },
  tipoDiscapacidad: { type: String },
  eps: { type: String, required: true },
  grupoSanguineo: { type: String, required: true },
  contactoEmergencia: { type: String, required: true },
  telefonoEmergencia: { type: String, required: true },
  parentescoEmergencia: { type: String, required: true },
  
  // Sistema
  password: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);