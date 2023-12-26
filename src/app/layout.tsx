import "@/global.css"
import { Inter as FontSans } from "next/font/google"
import { PropsWithChildren } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/Navbar"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          themes={['danny', 'light', 'dark']}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex relative h-full font-sans min-h-screen">
            <div className="flex-grow flex-1 ">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
