import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'João Omar',
  description: 'Portifolio de João Omar',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col justify-between h-screen`}>
        <header className="flex items-center justify-between p-6 border-b">
          <h1 className="font-bold text-2xl">
            <a href="#start">Omar</a>
          </h1>
          <div className="flex font-semibold gap-6">
            <a href="#about" className="transition hover:text-blue-700">
              Sobre
            </a>
            <a href="#projects" className="transition hover:text-blue-700">
              Projetos
            </a>
            <a href="#contact" className="transition hover:text-blue-700">
              Contato
            </a>
          </div>
        </header>
        {children}
        <footer className="flex items-center justify-center p-3">
          <h3 className="flex gap-2">
            Desenvolvidor por
            <a
              href="http://github.com/zdeicidaz"
              target="_blank"
              rel="github of creator"
              title="Omar's Github"
              className="underline transition hover:text-blue-700"
            >
              Omar
            </a>
          </h3>
        </footer>
      </body>
    </html>
  );
}
