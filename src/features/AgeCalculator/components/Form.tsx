import { Input } from "@/components/Input";
import { Box, Button } from "@mui/material";
import SubmitIcon from "@/assets/icon-arrow.svg";
import { z } from "zod";

const formSchema = z.object({
    day: z.number({ required_error: "Required" }).min(1).max(31),
    month: z.number({ required_error: "Required" }).min(1).max(12),
    year: z
        .number({ required_error: "Required" })
        .positive()
        .max(new Date().getFullYear()),
});

export const Form = () => {
    return (
        <Box component="form" autoComplete="off" sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                <Input inputlabel="day" placeholder="DD" />
                <Input inputlabel="month" placeholder="MM" />
                <Input inputlabel="year" placeholder="YYYY" />
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
                    sx={{
                        padding: 2,
                        borderRadius: "50%",
                        ":hover": { bgcolor: "black" },
                    }}
                >
                    <img src={SubmitIcon} alt="submit icon" />
                </Button>
            </Box>
        </Box>
    );
};
