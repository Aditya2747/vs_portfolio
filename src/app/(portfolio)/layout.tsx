import { VSCodeShell } from "@/components/vscode/VSCodeShell";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <VSCodeShell>{children}</VSCodeShell>;
}

