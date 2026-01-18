import './globals.css';
import MainNav from '@/components/MainNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <MainNav />

        {/* Page content offset for fixed nav */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
