const iconModules = import.meta.glob<string>('../images/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const blankKey = '../images/icons/blank.svg';

export function getIconUrl(filename: string): string {
  if (!filename) {
    return iconModules[blankKey] ?? '';
  }

  const key = `../images/icons/${filename}`;
  return iconModules[key] ?? iconModules[blankKey] ?? '';
}
