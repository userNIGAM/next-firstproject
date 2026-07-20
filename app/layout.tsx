import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  return (
    <html lang="en">
      <body>
          <Navbar/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
