import RootStyleRegistry from './emotion'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
