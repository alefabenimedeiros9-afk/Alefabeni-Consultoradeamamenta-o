import type { Metadata } from 'next';
import './site.css';

export const metadata: Metadata = {
  title: 'Amor que Nutre | Consultoria em Amamentação',
  description: 'Consultoria em amamentação com acolhimento, orientação individualizada e cursos para famílias.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
