import { Form } from "./components/Form";
import { Container } from "@mui/material";

export const AgeCalculator = () => {
    return (
        <Container
            maxWidth={"md"}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Form />
        </Container>
    );
};
