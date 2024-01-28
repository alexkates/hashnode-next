import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "./theme-provider";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      {children}
      <Analytics />
    </ThemeProvider>
  );
}

export default Providers;
