import { extendTheme, theme as base} from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: `Chakra Petch, ${base.fonts.body}`,
        body: `Chakra Petch, ${base.fonts.body}`,
    },
    colorScheme: {
        project: "#fffc00",
    },
    colors: {
        design: {
            bg: "#1E272F",
            primary: "#194D83",
            secondary: "#02213F",
            tertiary: "#E21818",
            project: "#fffc00",
            pink: "#ff0490",
            green: "#21fc0d",
        }
    },
    components: {
        Button: {
            baseStyle: {
                _focus: {
                    boxShadow: "none"
                }
            }
        }
    }
});

