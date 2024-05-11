import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "MKS Sistemas",
  description: "MKS Sistemas Challenge created in React next JS by developer Genilson do Carmo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
