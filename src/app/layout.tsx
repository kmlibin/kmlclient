//components
import Footer from "@/components/Footer";
//css
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-blackTextFont">
        <div className="w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
