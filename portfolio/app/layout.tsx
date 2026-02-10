import "./globals.css";

export const metadata = {
  title: "Your Name",
  description: "Personal academic website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
