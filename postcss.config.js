module.exports = {
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {}, // Add support for nesting
        tailwindcss: {},
        autoprefixer: {},
        "postcss-pxtorem": {
            //rootValue: 16, // Set root element font size
            propList: ["*"],
        },
    },
};
