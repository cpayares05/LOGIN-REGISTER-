import React from 'react';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Shield, 
  Calendar,
  FileText,
  Users,
  Building
} from 'lucide-react';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No especificado';
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const InfoSection = ({ 
    title, 
    icon: Icon, 
    children 
  }: { 
    title: string; 
    icon: React.ElementType; 
    children: React.ReactNode;
  }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <Icon className="mr-2 text-sena-600" size={24} />
        {title}
      </h2>
      {children}
    </div>
  );

  const InfoRow = ({ 
    label, 
    value 
  }: { 
    label: string; 
    value: string | undefined | null;
  }) => (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start py-3 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-600 font-medium mb-1 sm:mb-0">{label}:</span>
      <span className="text-gray-900 sm:text-right sm:max-w-xs">{value || 'No especificado'}</span>
    </div>
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header del perfil */}
        <div className="bg-gradient-to-r from-sena-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 md:mb-0">
              <span className="text-sena-600 font-bold text-3xl">
                {user.nombres.charAt(0).toUpperCase()}{user.apellidos.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                {user.nombres} {user.apellidos}
              </h1>
              <p className="text-sena-100 text-lg mb-1">{user.programaFormacion}</p>
              <p className="text-sena-200">{user.centroPoblacional}</p>
              <div className="flex flex-wrap items-center mt-3 gap-2">
                <span className="bg-sena-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                  {user.modalidad}
                </span>
                <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                  {user.jornada}
                </span>
                <span className="bg-purple-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                  {user.situacionLaboral}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Información personal */}
          <InfoSection title="Información Personal" icon={User}>
            <div className="space-y-0">
              <InfoRow label="Nombres completos" value={user.nombres} />
              <InfoRow label="Apellidos completos" value={user.apellidos} />
              <InfoRow label="Tipo de documento" value={user.tipoDocumento} />
              <InfoRow label="Número de documento" value={user.numeroDocumento} />
              <InfoRow label="Fecha de nacimiento" value={formatDate(user.fechaNacimiento)} />
              <InfoRow label="Lugar de nacimiento" value={user.lugarNacimiento} />
              <InfoRow label="Género" value={user.genero} />
              <InfoRow label="Estado civil" value={user.estadoCivil} />
            </div>
          </InfoSection>

          {/* Información de contacto */}
          <InfoSection title="Información de Contacto" icon={Mail}>
            <div className="space-y-0">
              <InfoRow label="Correo electrónico" value={user.email} />
              <InfoRow label="Teléfono fijo" value={user.telefono} />
              <InfoRow label="Celular" value={user.celular} />
              <InfoRow label="Dirección" value={user.direccion} />
              <InfoRow label="Barrio" value={user.barrio} />
              <InfoRow label="Ciudad" value={user.ciudad} />
              <InfoRow label="Departamento" value={user.departamento} />
              <InfoRow label="Código postal" value={user.codigoPostal} />
            </div>
          </InfoSection>

          {/* Información SENA */}
          <InfoSection title="Información SENA" icon={GraduationCap}>
            <div className="space-y-0">
              <InfoRow label="Programa de formación" value={user.programaFormacion} />
              <InfoRow label="Código del programa" value={user.codigoPrograma} />
              <InfoRow label="Modalidad" value={user.modalidad} />
              <InfoRow label="Jornada" value={user.jornada} />
              <InfoRow label="Centro poblacional" value={user.centroPoblacional} />
              <InfoRow label="Fecha de inicio" value={formatDate(user.fechaInicio)} />
              <InfoRow label="Fecha de finalización" value={formatDate(user.fechaFinalizacion)} />
              <InfoRow label="Instructor" value={user.instructor} />
            </div>
          </InfoSection>

          {/* Información académica */}
          <InfoSection title="Información Académica" icon={FileText}>
            <div className="space-y-0">
              <InfoRow label="Nivel educativo" value={user.nivelEducativo} />
              <InfoRow label="Institución educativa" value={user.institucionEducativa} />
              <InfoRow label="Título obtenido" value={user.tituloObtenido} />
            </div>
          </InfoSection>

          {/* Información laboral */}
          <InfoSection title="Información Laboral" icon={Briefcase}>
            <div className="space-y-0">
              <InfoRow label="Situación laboral" value={user.situacionLaboral} />
              <InfoRow label="Empresa" value={user.empresa} />
              <InfoRow label="Cargo" value={user.cargo} />
              <InfoRow label="Experiencia laboral" value={user.experienciaLaboral} />
            </div>
          </InfoSection>

          {/* Información de salud */}
          <InfoSection title="Información de Salud" icon={Heart}>
            <div className="space-y-0">
              <InfoRow label="¿Tiene discapacidad?" value={user.discapacidad} />
              <InfoRow label="Tipo de discapacidad" value={user.tipoDiscapacidad} />
              <InfoRow label="EPS" value={user.eps} />
              <InfoRow label="Grupo sanguíneo" value={user.grupoSanguineo} />
            </div>
          </InfoSection>
        </div>

        {/* Contacto de emergencia */}
        <InfoSection title="Contacto de Emergencia" icon={Shield}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoRow label="Nombre completo" value={user.contactoEmergencia} />
            <InfoRow label="Teléfono" value={user.telefonoEmergencia} />
            <InfoRow label="Parentesco" value={user.parentescoEmergencia} />
          </div>
        </InfoSection>

        {/* Información del sistema */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Calendar className="mr-2 text-gray-600" size={20} />
            Información del Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">Fecha de registro:</span> {formatDate(user.createdAt)}
            </div>
            <div>
              <span className="font-medium">Última actualización:</span> {formatDate(user.updatedAt)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;