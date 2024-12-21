
import "./globals.css";

export const metadata = {
  title: "Capital Cars",
  description: "Capital Cars LTD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-raleway"
      >
        {children}
      </body>
    </html>
  );
}
