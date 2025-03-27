export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Kache Affiliate Marketing AI</h1>
      <p className="text-xl text-center mb-8">Your AI-powered affiliate marketing dashboard</p>
      <a 
        href="/dashboard" 
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#671791] to-[#4a1666] text-[#f2ebf2] font-medium hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        Go to Dashboard
      </a>
    </div>
  );
}
