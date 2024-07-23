

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Portada from "./components/Portada";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoTask",
  description: "toDO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Header></Header>
        <Portada></Portada>
        <AddTask></AddTask>  
        <TaskList></TaskList>
        <Footer></Footer>
      </body>
    </html>
  );
}
