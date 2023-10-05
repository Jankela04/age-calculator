import { useState } from "react";
import { AgeDisplay } from "./components/AgeDisplay";
import { Form } from "./components/Form";
import { Container } from "@mui/material";
import { TDate } from "./formSchema";

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const AgeCalculator = () => {
  const [age, setAge] = useState<null | TDate>(null);
  return (
    <Container maxWidth={"md"} sx={styles.main}>
      <Form setAge={setAge} />
      <AgeDisplay age={age} />
    </Container>
  );
};
