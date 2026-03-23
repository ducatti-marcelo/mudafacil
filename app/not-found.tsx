import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-secondary-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary-700 mb-4">Página não encontrada</h2>
        <p className="text-secondary-500 mb-8">A página que você está procurando não existe.</p>
        <Link 
          href="/" 
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
