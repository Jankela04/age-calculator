import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    day: Yup.number()
        .required("Required")
        .typeError("Must be valid day")
        .test(
            "is-valid-day",
            "Must be valid day",
            (value) => value >= 1 && value <= 31
        ),
    month: Yup.number()
        .required("Required")
        .typeError("Must be valid month")
        .test(
            "is-valid-day",
            "Must be valid month",
            (value) => value >= 1 && value <= 12
        ),
    year: Yup.number()
        .required("Required")
        .typeError("Must be valid year")
        .positive("Must be valid year")
        .max(new Date().getFullYear(), "Year cannot be in the future"),
});

export type TForm = Yup.InferType<typeof formSchema>;
