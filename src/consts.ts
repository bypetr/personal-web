export const SITE = {
  name: 'Petr',
  title: 'TODO',
  description: 'TODO',
  locale: 'en',
} as const;

/** Text links under the intro. Example: { href: 'https://github.com/…', label: 'GitHub' } */
export const LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: 'https://github.com/bypetr', label: 'GitHub' },
  { href: 'https://x.com/bypetr', label: 'X' },
];
