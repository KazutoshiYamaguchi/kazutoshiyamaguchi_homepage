import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "white",
                color: "gray.700"
            }
        }
    }
});

export default theme