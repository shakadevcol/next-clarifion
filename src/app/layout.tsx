import type { Metadata } from "next";
import "@/assets/css/app.css";

import ReduxProvider from "@/providers/redux/ReduxProvider";
import NavMenu from "@/components/common/NavMenu";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
    title: "Next Clarifion",
    description: "Next clarifion description",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReduxProvider>
            <html lang="en">
                <body>
                    <NavMenu />
                    {children}
                    <Footer />
                </body>
            </html>
        </ReduxProvider>
    );
}
