import ThemeRegistry from "@/theme/ThemeRegistry";
import Header from "@/widjets/header";
import { Container} from "@mui/material";
import type { Metadata } from "next";
import '@/public/favicon.ico'
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Next Sneakers",
  description: "Pet project site on Next.js. Created by Vlashex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeRegistry>
      <html lang="en">
        <body style={{background: '#E7F6FF'}}>
          <StoreProvider>
            <Container maxWidth='xl' sx={{p: '85px 0'}}>
              {/* <Cart/> */}
              <Container maxWidth='lg' sx={{background: '#fff', borderRadius: '20px', p: '40px 0'}}>
                <Container maxWidth='lg' sx={{borderBottom: '1px solid #EAEAEA', pb: '44px'}}>
                  <Header/>
                </Container>
                {children}
              </Container>
            </Container>
          </StoreProvider>
        </body>
      </html>
    </ThemeRegistry>
  );
}
