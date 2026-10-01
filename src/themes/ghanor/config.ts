import { ThemeConfig } from '../types';
import links from './links.json';

export const ghanorConfig: ThemeConfig = {
  id: 'ghanor',
  siteTitle: 'Referência Rápida Lenda de Ghanor',
  metaDescription: 'Este site é um guia para mestres e jogadores de A Lenda de Ghanor RPG e tem o objetivo de apresentar de forma resumida e intuitiva regras básicas desse sistema de RPG.',
  favicon: '/favicon-ghanor.ico',
  header: {
    title: 'Referência Rápida Lenda de Ghanor',
    description: 'Este guia reúne as regras básicas de A Lenda de Ghanor RPG em formato de consulta rápida e objetiva, para que jogadores e mestres relembrem o essencial durante a sessão.',
  },
  colors: {
    backround: '#FFFFFFF3',
    title: '#376167',
    subtitle: '#E9E1D2',
    subsubtitle: '#AA893B',
    border: '#376167',
    anotation: '#FFFFFF',
    transparent: '#FFFFFF00',
    modalBackground: '#F5F5F5',
    modalBackdroop: '#000000DD',
    tableBorder: '#AA893B',
    tableLine: {
      odd: '#F7F3EB',
      even: '#E6DCC4',
    },
    reference: '#833421',
    link: '#CB9D37',
  },
  links,
};
