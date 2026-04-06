import type { Metadata } from "next";
import "./globals.css";
import { ThemeRegistry } from "@/components/providers/ThemeRegistry";

export const metadata: Metadata = {
  title: "Little Rock",
  description:
    "Little Rockの公式サイトです。国際映像メディア専門学校の生徒で作られたパフォーマンスグループです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
