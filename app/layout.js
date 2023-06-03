import "./globals.css";

export const metadata = {
  title: "Attendance Bot",
  description: "New generation attendance system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-ftRegular">{children}</body>
    </html>
  );
}
