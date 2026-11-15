import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {title:"ASHA TRADERS POS",description:"Grocery billing and inventory",manifest:"/manifest.json",appleWebApp:{capable:true,title:"ASHA POS",statusBarStyle:"default"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
