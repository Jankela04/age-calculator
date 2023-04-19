import { TextField, InputLabel, Box, TextFieldProps } from "@mui/material";
import { FC } from "react";

type InputProps = {
    inputlabel: string;
    erorr?: boolean;
    errortext: string;
    placeholder: string;
} & TextFieldProps;

export const Input: FC<InputProps> = (props) => {
    return (
        <Box>
            <InputLabel
                error={props.error}
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
                        px: ".5rem",
                    },
                }}
                sx={{
                    width: "9rem",
                }}
                helperText={props.error && props.errortext}
                error={props.error}
                variant="outlined"
                placeholder={props.placeholder}
            />
        </Box>
    );
};
