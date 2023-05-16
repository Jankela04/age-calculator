import { TextField, InputLabel, Box, TextFieldProps } from "@mui/material";
import { FC } from "react";

type InputProps = {
    inputlabel: string;
    placeholder: string;
} & TextFieldProps;

const styles = {
    inputLabel: {
        textTransform: "uppercase",
        fontWeight: "bold",
        letterSpacing: "0.2rem",
        pb: 1,
    },
    input: {
        color: "black",
        fontWeight: "bold",
        fontSize: "1.5rem",
        px: { sm: ".5rem" },
    },
    main: {
        width: { xs: "6rem", sm: "9em", md: "9em" },
        "& .MuiFormHelperText-root": {
            m: 0,
            my: 1,
            fontStyle: "italic",
        },
    },
};

export const Input: FC<InputProps> = (props) => {
    return (
        <Box>
            <InputLabel sx={styles.inputLabel}>{props.inputlabel}</InputLabel>
            <TextField
                {...props}
                InputProps={{
                    sx: styles.input,
                }}
                sx={styles.main}
                variant="outlined"
                placeholder={props.placeholder}
            />
        </Box>
    );
};
