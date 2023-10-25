// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "~/assets/config.css",
    ],
    modules: ["@bg-dev/nuxt-naiveui"],
    naiveui: {
        colorModePreference: "dark",
        // https://paletton.com/#uid=33e0u0kn7TVbEYohXWbs7QDBXLe
        themeConfig: {
            shared: {
                common: {
                    primaryColor: "#41EAD3",
                    primaryColorHover: "#6AF1DE",
                    primaryColorPressed: "#1BE0C5",
                    primaryColorSuppl: "#00D0B4",
                }
            },
        },
    },
    typescript: {
        shim: false,
    },
});
