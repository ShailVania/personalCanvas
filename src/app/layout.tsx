import type {Metadata} from 'next';
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { MainLayout } from '@/components/layout/main-layout';
import { ThemeProvider } from '@/components/theme-provider';
import { AudioProvider } from '@/hooks/use-audio';

export const metadata: Metadata = {
  title: 'Shail Vania',
  description: 'A personal portfolio website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qrx6ywy.css" />
      </head>
      <body className={cn("font-body font-normal antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AudioProvider>
            <MainLayout>
              {children}
            </MainLayout>
            <Toaster />
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
