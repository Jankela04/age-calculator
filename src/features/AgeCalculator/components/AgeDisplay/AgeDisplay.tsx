import { Box, Typography } from "@mui/material";

import { FC } from "react";

const DAYS_VALUE = "--";
const MONTHS_VALUE = "--";
const YEARS_VALUE = "--";

export const AgeDisplay = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
            }}
        >
            <Row value={YEARS_VALUE} type="years" />
            <Row value={MONTHS_VALUE} type="months" />
            <Row value={DAYS_VALUE} type="days" />
        </Box>
    );
};

const Row: FC<{ value: string; type: "years" | "months" | "days" }> = (
    props
) => {
    return (
        <Box>
            <DisplayValue value={props.value} />
            <Typography
                sx={{
                    fontSize: { xs: "3.5rem", sm: "5rem" },
                    fontStyle: "italic",
                    fontWeight: "bold",
                }}
                component="span"
            >
                {" "}
                {props.type}
            </Typography>
        </Box>
    );
};

const DisplayValue: FC<{ value: string }> = ({ value }) => {
    return (
        <Typography
            sx={{
                color: "primary.main",
                fontSize: { xs: "4rem", sm: "6rem" },
                fontStyle: "italic",
                fontWeight: "bold",
            }}
            component="span"
        >
            {value}
        </Typography>
    );
};
