import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "RIQOPOINT | Solve What Matters",
  description: "Independent industrial R&D, engineering and technical problem-solving.",
  metadataBase: new URL("https://riqopoint-website.vercel.app")
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
