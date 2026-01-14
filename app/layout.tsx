import "./globals.css";
import { MapProvider } from "./context/MapContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-hidden m-0 p-0">
        <MapProvider>{children}</MapProvider>
      </body>
    </html>
  );
}
