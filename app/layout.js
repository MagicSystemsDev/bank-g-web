import "./globals.css";

export const metadata = {
  title: "Bank G — Gestión financiera local",
  description: "Bank G Offline 0.2.0: plataforma financiera modular con instalación, trazabilidad y recuperación integradas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
