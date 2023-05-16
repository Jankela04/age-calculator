import { Input } from "@/components/Input";
import { Box, Button } from "@mui/material";
import SubmitIcon from "@/assets/icon-arrow.svg";
import { Formik, Form as FormikForm, Field } from "formik";
import { formSchema, TDate } from "../formSchema";
import { calculateAge } from "../utils/calculateAge";
import { FC } from "react";

const initialValues = {
    day: "",
    month: "",
    year: "",
};

type Props = {
    setAge: React.Dispatch<
        React.SetStateAction<{
            day: number;
            month: number;
            year: number;
        } | null>
    >;
};
const styles = {
    form: {
        width: "100%",
    },
    inputContainer: {
        display: "flex",
        gap: 2,
        justifyContent: "center",
    },
    buttonContainer: {
        py: 4,
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-end" },
    },
    button: {
        padding: 2,
        borderRadius: "50%",
        ":hover": { bgcolor: "black" },
    },
};

export const Form: FC<Props> = ({ setAge }) => {
    const handleSubmit = (data: TDate) => {
        const age = calculateAge(data);
        setAge(age);
    };
    return (
        <Formik
            validationSchema={formSchema}
            //@ts-ignore
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, isValid }) => (
                <FormikForm style={styles.form} autoComplete="off">
                    <Box sx={styles.inputContainer}>
                        <Field
                            as={Input}
                            name="day"
                            placeholder="DD"
                            inputlabel="day"
                            error={touched.day && Boolean(errors.day)}
                            helperText={touched.day && errors.day}
                        />
                        <Field
                            as={Input}
                            name="month"
                            placeholder="MM"
                            inputlabel="month"
                            error={
                                touched.month &&
                                (Boolean(errors.month) ||
                                    errors.day === "Must be valid date")
                            }
                            helperText={touched.month && errors.month}
                        />
                        <Field
                            as={Input}
                            name="year"
                            placeholder="YYYY"
                            inputlabel="year"
                            error={
                                touched.year &&
                                (Boolean(errors.year) ||
                                    errors.day === "Must be valid date")
                            }
                            helperText={touched.year && errors.year}
                        />
                    </Box>
                    <Box sx={styles.buttonContainer}>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => {
                                if (!isValid) setAge(null);
                            }}
                            sx={styles.button}
                        >
                            <img src={SubmitIcon} alt="submit icon" />
                        </Button>
                    </Box>
                </FormikForm>
            )}
        </Formik>
    );
};
