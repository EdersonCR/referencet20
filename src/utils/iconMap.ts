const iconModules = import.meta.glob<string>('../images/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function getIconUrl(filename: string): string {
  const key = `../images/icons/${filename}`;
  return iconModules[key] ?? '';
}
