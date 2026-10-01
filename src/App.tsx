import { useEffect, useState } from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import { spaces } from './styles/theme';
import { getThemeConfig, loadThemeAssets, resolveThemeId } from './themes';
import { ThemeConfigProvider } from './themes/ThemeContext';
import { ThemeAssets, ThemeConfig } from './themes/types';

const themeConfig = getThemeConfig(resolveThemeId(window.location.hostname));

function applyDocumentMetadata(config: ThemeConfig) {
  document.title = config.siteTitle;

  let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!description) {
    description = document.createElement('meta');
    description.name = 'description';
    document.head.appendChild(description);
  }
  description.content = config.metaDescription;

  let favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
  favicon.href = config.favicon;
}

function App() {
  const [assets, setAssets] = useState<ThemeAssets | null>(null);

  useEffect(() => {
    applyDocumentMetadata(themeConfig);
  }, []);

  useEffect(() => {
    let active = true;
    loadThemeAssets(themeConfig.id).then(loaded => {
      if (active) {
        setAssets(loaded);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <ThemeConfigProvider config={themeConfig}>
      {assets ? (
        <Stack
          style={{
            padding: `${spaces.standard * 2}rem`,
            backgroundImage: `url(${assets.background})`,
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
          spacing={`${spaces.standard * 2}rem`}
        >
          <Header />
          {assets.data.map(section => <Section section={section} myKey={`${section.id}`} key={`${section.id}`} />)}
          <Footer />
        </Stack>
      ) : (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <CircularProgress style={{ color: themeConfig.colors.title }} />
        </Box>
      )}
      <Analytics />
      <SpeedInsights />
    </ThemeConfigProvider>
  );
}

export default App;
