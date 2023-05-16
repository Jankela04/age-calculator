import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { TDate } from "../formSchema";

type Props = { age: null | TDate };

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    row: {
        fontSize: { xs: "3.5rem", sm: "5rem" },
        fontStyle: "italic",
        fontWeight: "bold",
    },
    value: {
        color: "primary.main",
        fontSize: { xs: "4rem", sm: "6rem" },
        fontStyle: "italic",
        fontWeight: "bold",
    },
};

export const AgeDisplay: FC<Props> = ({ age }) => {
    return (
        <Box sx={styles.container}>
            <Row value={!age ? "--" : age.year} type="years" />
            <Row value={!age ? "--" : age.month} type="months" />
            <Row value={!age ? "--" : age.day} type="days" />
        </Box>
    );
};

const Row: FC<{ value: string | number; type: "years" | "months" | "days" }> = (
    props
) => {
    return (
        <Box>
            <DisplayValue value={props.value} />
            <Typography sx={styles.row} component="span">
                {" "}
                {props.type}
            </Typography>
        </Box>
    );
};

const DisplayValue: FC<{ value: string | number }> = ({ value }) => {
    return (
        <Typography sx={styles.value} component="span">
            {value}
        </Typography>
    );
};
