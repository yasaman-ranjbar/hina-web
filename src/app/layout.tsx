
import './globals.css';
import { Figtree } from 'next/font/google'
import localFont from 'next/font/local'

// before web font is downloaded application use default fonts whit swap property
const figtree = Figtree({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-figtree" 
})

const yekanbakh = localFont({
  src: [
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/yekanbakh/YekanBakhFaNum-ExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: '--font-yekanbakh'
});


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html dir='rtl' className={`${figtree.variable} ${yekanbakh.variable}`}>
      <body className='flex flex-col min-h-screen font-bold uppercase'>
        <header className="bg-gray-200 flex items-center justify-center">
          دوره معماری ریکت
        </header>
        <div className="flex-1 flex">{children}</div>

        <footer className="bg-gray-200 flex items-center justify-center">
          footer
        </footer>
      </body>
    </html>
  );
}
