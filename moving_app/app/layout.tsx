import { Geist } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Market Website",
  description: "",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   let isUserLoggedIn = true;
  //   let page = isUserLoggedIn ? <App /> : <Login />;

  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
