import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['600'] });

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description:
    'MKS Sistemas Challenge created in React next JS by developer Genilson do Carmo.',
};

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
