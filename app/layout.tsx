import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased shadow-none border-none outline-none overflow-hidden">
        {children}
      </body>
    </html>
  );
}
