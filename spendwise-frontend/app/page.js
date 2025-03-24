export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to SpendWise</h1>
      <p className="text-gray-600 text-lg mb-6">Track your expenses, set budgets, and achieve your financial goals.</p>
      
      <div className="space-x-4">
        <a href="auth/login" className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </a>
        <a href="auth/signup" className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Sign Up
        </a>
      </div>
    </main>
  );
}
