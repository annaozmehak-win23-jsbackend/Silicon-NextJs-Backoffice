import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from "./components/header/Header";
import Aside from "./components/aside/Aside";

export const metadata: Metadata = {
  title: "Silicon Backoffice",
  description: "Backoffice to Silicon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <head>
        <link rel="stylesheet" href="https://kit.fontawesome.com/81af572429.css" crossOrigin="anonymous" />
      </head>
      <body>
        <div className="wrapper">
          <Header />
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
