
import './globals.css'


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir='rtl'>
      <body className='flex flex-col min-h-screen font-bold uppercase'>
        <header className="bg-gray-200 flex items-center justify-center">
          header
        </header>
        <div className="flex-1 flex">{children}</div>

        <footer className="bg-gray-200 flex items-center justify-center">
          footer
        </footer>
      </body>
    </html>
  );
}
