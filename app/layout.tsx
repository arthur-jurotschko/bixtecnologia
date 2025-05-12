export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body suppressHydrationWarning={true}>
        <main>{children}</main>
      </body>
    </html>
  );
}
