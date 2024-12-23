import fs from 'fs';
import path from 'path';

async function carregarFrases() {
  const frasesPath = path.resolve(process.cwd(), 'frases.json');
  try {
    if (fs.existsSync(frasesPath)) {
      const data = fs.readFileSync(frasesPath, 'utf-8');
      return JSON.parse(data);
    } else {
      console.error('Arquivo frases.json não encontrado.');
      return [];
    }
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    return [];
  }
}

function escolherFrase(frases) {
  const indice = Math.floor(Math.random() * frases.length);
  return frases[indice];
}

// Manipulador para a API
export async function GET() {
  const frases = await carregarFrases();

  if (frases.length === 0) {
    return new Response(JSON.stringify({ message: 'Não há frases disponíveis.' }), { status: 404 });
  }

  const frase = escolherFrase(frases);
  return new Response(JSON.stringify(frase), { status: 200 });
}
