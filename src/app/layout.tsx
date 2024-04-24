import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartProvider } from "./providers/cart";
import { ThemeProvider } from "./_components/ThemProvider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OG Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>E-Commerce App</title>

        <style>
          {`
          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          main {
            flex: 1;
          }
          footer {
            flex-shrink: 0;
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 1rem 0;
          }
          `}
        </style>

        {/* <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        /> */}
      </head>
      <ThemeProvider>
        <body>
          <ShoppingCartProvider>
            <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
            <footer
              className="bg-dark text-white text-center py-4"
              style={{ height: "10px" }}
            >
              <Container>
                <p>&copy; {new Date().getFullYear()} Your Company</p>
              </Container>
            </footer>
          </ShoppingCartProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
