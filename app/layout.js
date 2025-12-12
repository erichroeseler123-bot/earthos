export const metadata = {
  title: "EarthOS",
  description: "Planetary Navigation Engine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', color: '#0ff' }}>
        {children}
      </body>
    </html>
  );
}
