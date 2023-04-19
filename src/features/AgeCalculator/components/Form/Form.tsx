import { Input } from "@/components/Input";
import { Box, Button } from "@mui/material";
import SubmitIcon from "@/assets/icon-arrow.svg";

export const Form = () => {
    return (
        <Box component="form" autoComplete="off" sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Input inputlabel="day" errortext="Required" placeholder="DD" />
                <Input
                    inputlabel="month"
                    errortext="Required"
                    placeholder="MM"
                />
                <Input
                    inputlabel="year"
                    errortext="Required"
                    placeholder="YYYY"
                />
            </Box>
            <Box
                sx={{
                    py: 4,
                    display: "flex",
                    justifyContent: { xs: "center", sm: "flex-end" },
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ padding: 2, borderRadius: "50%" }}
                >
                    <img src={SubmitIcon} alt="submit icon" />
                </Button>
            </Box>
        </Box>
    );
};
