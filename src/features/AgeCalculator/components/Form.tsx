import { Input } from "@/components/Input";
import { Box, Button } from "@mui/material";
import SubmitIcon from "@/assets/icon-arrow.svg";
import { Formik, Form as FormikForm, Field } from "formik";
import { formSchema, TForm } from "../formSchema";

const initialValues = {
    day: "",
    month: "",
    year: "",
};

const handleSubmit = (data: TForm) => {
    // todo validate if date is valid
    console.log(data);
};

export const Form = () => {
    return (
        <Formik
            validationSchema={formSchema}
            //@ts-ignore
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <FormikForm style={{ width: "100%" }} autoComplete="off">
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            justifyContent: "center",
                        }}
                    >
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
                            error={touched.month && Boolean(errors.month)}
                            helperText={touched.month && errors.month}
                        />
                        <Field
                            as={Input}
                            name="year"
                            placeholder="YYYY"
                            inputlabel="year"
                            error={touched.year && Boolean(errors.year)}
                            helperText={touched.year && errors.year}
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
                            sx={{
                                padding: 2,
                                borderRadius: "50%",
                                ":hover": { bgcolor: "black" },
                            }}
                        >
                            <img src={SubmitIcon} alt="submit icon" />
                        </Button>
                    </Box>
                </FormikForm>
            )}
        </Formik>
    );
};
