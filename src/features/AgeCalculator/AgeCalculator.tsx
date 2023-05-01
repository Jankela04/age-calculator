import { useState } from "react";
import { AgeDisplay } from "./components/AgeDisplay";
import { Form } from "./components/Form";
import { Container } from "@mui/material";
import { TDate } from "./formSchema";

export const AgeCalculator = () => {
    const [age, setAge] = useState<null | TDate>(null);
    return (
        <Container
            maxWidth={"md"}
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <Form setAge={setAge} />
            <AgeDisplay age={age} />
        </Container>
    );
};
