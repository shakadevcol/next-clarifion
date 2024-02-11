module.exports = {
    plugins: {
        "tailwindcss/nesting": {}, // Add support for nesting
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
        "postcss-pxtorem": {
            //rootValue: 16, // Set root element font size
            propList: ["*"],
        },
    },
};
