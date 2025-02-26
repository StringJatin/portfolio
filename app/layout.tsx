import './globals.css'

export const metadata = {
  title: 'Jatin Chouhan - Software Engineer',
  description: 'Portfolio of Jatin Chouhan, a skilled Software Engineer with expertise in React.js, Next.js, Node.js, and TypeScript',
}

export default function RootLayout({ children } : any) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
}