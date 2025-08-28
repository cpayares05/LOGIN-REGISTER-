import React from 'react';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Users, 
  Award, 
  TrendingUp,
  Activity,
  FileText,
  MessageSquare,
  Bell
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const StatCard = ({ 
    icon: Icon, 
    title, 
    value, 
    subtitle, 
    color = 'bg-blue-500' 
  }: {
    icon: React.ElementType;
    title: string;
    value: string;
    subtitle?: string;
    color?: string;
  }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <div className={`${color} rounded-lg p-3 mr-4`}>
          <Icon className="text-white" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );

  const ActivityItem = ({ 
    icon: Icon, 
    title, 
    time, 
    description,
    iconColor = 'text-blue-500'
  }: {
    icon: React.ElementType;
    title: string;
    time: string;
    description: string;
    iconColor?: string;
  }) => (
    <div className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`${iconColor} mt-0.5`}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <p className="text-xs text-gray-400 mt-2">{time}</p>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-sena-600 to-blue-600 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                ¡Bienvenido, {user.nombres}!
              </h1>
              <p className="text-sena-100 text-lg mb-1">Mi Actividad SENA</p>
              <p className="text-sena-200">
                {user.programaFormacion} - {user.centroPoblacional}
              </p>
              <div className="flex items-center mt-3 space-x-4">
                <span className="bg-sena-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                  {user.modalidad}
                </span>
                <span className="bg-blue-500 bg-opacity-30 px-3 py-1 rounded-full text-sm">
                  {user.jornada}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold">
                  {user.nombres.charAt(0)}{user.apellidos.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={BookOpen}
            title="Competencias Completadas"
            value="8/12"
            subtitle="67% progreso"
            color="bg-sena-500"
          />
          <StatCard
            icon={Clock}
            title="Horas Acumuladas"
            value="420"
            subtitle="de 720 horas totales"
            color="bg-blue-500"
          />
          <StatCard
            icon={Award}
            title="Evaluaciones"
            value="9.2"
            subtitle="Promedio general"
            color="bg-amber-500"
          />
          <StatCard
            icon={Calendar}
            title="Días Restantes"
            value="95"
            subtitle="Para finalización"
            color="bg-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Activity className="mr-2 text-sena-600" size={24} />
                    Actividad Reciente
                  </h2>
                  <button className="text-sm text-sena-600 hover:text-sena-700 font-medium">
                    Ver todo
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                <ActivityItem
                  icon={FileText}
                  title="Nueva evidencia enviada"
                  description="Evidencia de la competencia 'Desarrollo de Software'"
                  time="Hace 2 horas"
                  iconColor="text-green-500"
                />
                <ActivityItem
                  icon={MessageSquare}
                  title="Retroalimentación recibida"
                  description="El instructor ha comentado tu último proyecto"
                  time="Hace 5 horas"
                  iconColor="text-blue-500"
                />
                <ActivityItem
                  icon={Award}
                  title="Competencia aprobada"
                  description="Has completado exitosamente 'Bases de Datos'"
                  time="Hace 1 día"
                  iconColor="text-amber-500"
                />
                <ActivityItem
                  icon={Bell}
                  title="Recordatorio de evaluación"
                  description="Tienes una evaluación pendiente para el viernes"
                  time="Hace 2 días"
                  iconColor="text-red-500"
                />
                <ActivityItem
                  icon={Users}
                  title="Nueva reunión programada"
                  description="Seguimiento grupal con el instructor"
                  time="Hace 3 días"
                  iconColor="text-purple-500"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions & Progress */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-sena-50 hover:bg-sena-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="text-sena-600" size={18} />
                    <span className="text-sm font-medium text-gray-900">Subir evidencia</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-blue-600" size={18} />
                    <span className="text-sm font-medium text-gray-900">Ver cronograma</span>
                  </div>
                </button>
                <button className="w-full text-left p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="text-purple-600" size={18} />
                    <span className="text-sm font-medium text-gray-900">Contactar instructor</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-2 text-sena-600" size={20} />
                Progreso General
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Competencias</span>
                    <span className="text-sm text-gray-500">8/12</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-sena-500 h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Horas</span>
                    <span className="text-sm text-gray-500">420/720</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Evaluaciones</span>
                    <span className="text-sm text-gray-500">9.2/10.0</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;