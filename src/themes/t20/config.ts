import { ThemeConfig } from '../types';
import links from './links.json';

export const t20Config: ThemeConfig = {
  id: 't20',
  siteTitle: 'Referência Rápida T20',
  metaDescription: 'Este site é um guia para mestres e jogadores de Tormenta20 e tem o objetivo de apresentar de forma resumida e intuitiva regras básicas desse sistema de RPG.',
  favicon: '/favicon.ico',
  header: {
    title: 'Referência Rápida T20',
    description: 'Este guia reúne as regras básicas de Tormenta20 em formato de consulta rápida e objetiva, para que jogadores e mestres relembrem o essencial durante a sessão.',
  },
  colors: {
    backround: '#FFFFFFF3',
    title: '#CF2A29',
    subtitle: '#F9D97A',
    subsubtitle: '#B72A2B',
    border: '#CF2A29',
    anotation: '#FFFFFF',
    transparent: '#FFFFFF00',
    modalBackground: '#F5F5F5',
    modalBackdroop: '#000000DD',
    tableBorder: '#B72A2B',
    tableLine: {
      odd: '#FFFFFF00',
      even: '#DFD7D4',
    },
    reference: '#833421',
    link: '#F9D97A',
  },
  links,
};
