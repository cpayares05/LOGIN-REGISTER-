import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginData, RegisterData } from '../types/user';
import { authAPI } from '../services/api';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (loginData: LoginData) => Promise<void>;
  register: (registerData: RegisterData) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await authAPI.getProfile();
          setUser(response.user);
        } catch (error) {
          localStorage.removeItem('token');
          console.error('Error al obtener el perfil:', error);
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (loginData: LoginData) => {
    try {
      const response = await authAPI.login(loginData);
      localStorage.setItem('token', response.token);
      setUser(response.user);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error en el login');
    }
  };

  const register = async (registerData: RegisterData) => {
    try {
      const response = await authAPI.register(registerData);
      localStorage.setItem('token', response.token);
      setUser(response.user);
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Error en el registro');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};