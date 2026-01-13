import './globals.css';
import DCCSidebar from '@/components/DCCSidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="flex flex-col md:flex-row min-h-screen bg-black text-white p-0 m-0 overflow-hidden">
        
        {/* Persistent Intelligence Sidebar */}
        <DCCSidebar />
        
        {/* Main Feed: Internal scrolling enabled to keep sidebar static */}
        <main className="flex-1 h-screen relative overflow-y-auto border-t md:border-t-0 md:border-l border-slate-800/30 bg-black">
          {children}
        </main>

      </body>
    </html>
  );
}
