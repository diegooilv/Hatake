// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minha Página Inicial</title>
        <meta name="description" content="Bem-vindo ao meu site criado com Next.js!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <h1>API Hatake</h1>
      </main>

      <footer>
        <p>Feito com Next.js!</p>
      </footer>
    </div>
  );
}
