import type { Metadata } from "next";
import "./globals.css";
import { ClientShell } from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "SFC Estate Coaching - Creating Legacies One Family at a Time",
  description:
    "We help non-profit foundations educate donors on planned giving and guide individuals through a personalized estate planning process.",
  icons: {
    icon: "/assets/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}

