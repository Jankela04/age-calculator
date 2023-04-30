import { TextField, InputLabel, Box, TextFieldProps } from "@mui/material";
import { FC } from "react";

type InputProps = {
    inputlabel: string;
    placeholder: string;
} & TextFieldProps;

export const Input: FC<InputProps> = (props) => {
    return (
        <Box>
            <InputLabel
                sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    letterSpacing: "0.2rem",
                    pb: 1,
                }}
            >
                {props.inputlabel}
            </InputLabel>
            <TextField
                {...props}
                InputProps={{
                    sx: {
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        px: { sm: ".5rem" },
                    },
                }}
                sx={{
                    width: { xs: "6rem", sm: "9em", md: "9em" },
                    "& .MuiFormHelperText-root": {
                        m: 0,
                        my: 1,
                        fontStyle: "italic",
                    },
                }}
                variant="outlined"
                placeholder={props.placeholder}
            />
        </Box>
    );
};
