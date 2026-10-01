import { SectionData } from '../interfaces/Interfaces';
import { ThemeAssets, ThemeConfig, ThemeId } from './types';
import { t20Config } from './t20/config';
import { ghanorConfig } from './ghanor/config';

export const DEFAULT_THEME_ID: ThemeId = 't20';

const configs: Record<ThemeId, ThemeConfig> = {
  t20: t20Config,
  ghanor: ghanorConfig,
};

const hostThemes: Record<string, ThemeId> = {
  'referencet20.vercel.app': 't20',
  'referenceghanor.vercel.app': 'ghanor',
};

function isThemeId(value: unknown): value is ThemeId {
  return typeof value === 'string' && value in configs;
}

/**
 * Define o tema pelo hostname de acesso. Fora dos hosts de produção
 * (localhost, previews da Vercel) usa VITE_DEFAULT_THEME e, por fim, o T20.
 */
export function resolveThemeId(hostname: string): ThemeId {
  const host = hostname.toLowerCase().replace(/^www\./, '');
  const byHost = hostThemes[host];
  if (byHost) {
    return byHost;
  }
  const fromEnv: unknown = import.meta.env.VITE_DEFAULT_THEME;
  return isThemeId(fromEnv) ? fromEnv : DEFAULT_THEME_ID;
}

export function getThemeConfig(id: ThemeId): ThemeConfig {
  return configs[id];
}

const assetLoaders: Record<ThemeId, () => Promise<ThemeAssets>> = {
  t20: async () => {
    const [data, background] = await Promise.all([
      import('./t20/data.json'),
      import('./t20/background.jpg'),
    ]);
    return { data: data.default as SectionData[], background: background.default };
  },
  ghanor: async () => {
    const [data, background] = await Promise.all([
      import('./ghanor/data.json'),
      import('./ghanor/background.jpg'),
    ]);
    return { data: data.default as SectionData[], background: background.default };
  },
};

/** Carrega sob demanda os dados e a imagem de fundo do tema. */
export function loadThemeAssets(id: ThemeId): Promise<ThemeAssets> {
  return assetLoaders[id]();
}
