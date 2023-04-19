import { createTheme } from "@mui/material";

let theme = createTheme({
    typography: {
        fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    },
    palette: {
        primary: {
            main: "hsl(259, 100%, 65%)",
        },
        error: {
            main: "hsl(0, 100%, 67%)",
        },
    },
});

export default theme;
