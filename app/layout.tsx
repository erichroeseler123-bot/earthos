import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black antialiased overflow-hidden m-0 p-0">
        {children}
      </body>
    </html>
  );
}
