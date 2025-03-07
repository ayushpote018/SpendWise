import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Welcome to SpendWise</h1>
        
        <Image
          className="rounded-lg shadow-md"
          src="/spendwise.webp"  // Replace with your own image
          alt="SpendWise logo"
          width={200}
          height={50}
          priority
        />
        
        <p className="text-lg max-w-md text-center sm:text-left">
          Your personal finance tracker that helps you manage expenses and save money.
        </p>
        
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Get Started
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </main>
      
      <footer className="row-start-3 text-sm text-gray-500">
        © 2025 SpendWise. All rights reserved.
      </footer>
    </div>
  );
}
