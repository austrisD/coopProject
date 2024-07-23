import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "myProject",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <div>test test</div>
        </nav>
        <section>
          
        </section>
        <footer>
          Copyright
        </footer>
      </body>
    </html>
  );
}
