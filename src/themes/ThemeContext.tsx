import { createContext, useContext, ReactNode } from 'react';
import { ThemeConfig } from './types';

const ThemeConfigContext = createContext<ThemeConfig | null>(null);

interface ThemeConfigProviderProps {
  config: ThemeConfig;
  children: ReactNode;
}

export function ThemeConfigProvider({ config, children }: ThemeConfigProviderProps) {
  return (
    <ThemeConfigContext.Provider value={config}>
      {children}
    </ThemeConfigContext.Provider>
  );
}

export function useThemeConfig(): ThemeConfig {
  const config = useContext(ThemeConfigContext);
  if (!config) {
    throw new Error('useThemeConfig deve ser usado dentro de ThemeConfigProvider');
  }
  return config;
}
