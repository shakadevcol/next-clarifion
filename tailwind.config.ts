import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#fe696a",
                grayText: "#4D5254",
            },
            fontFamily: {
                body: ["Manrope"],
            },
            spacing: {
                15: "3.75rem",
            },
        },
        container: {
            padding: {
                DEFAULT: "1.25rem",
                sm: "1.25rem",
                lg: "1.25rem",
                xl: "1.25rem",
                "2xl": "0",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1245px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    plugins: [],
};
export default config;
