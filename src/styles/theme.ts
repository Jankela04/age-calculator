import { createTheme } from "@mui/material";

let theme = createTheme({
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
