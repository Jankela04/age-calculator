import * as Yup from "yup";

export const formSchema = Yup.object().shape({
    day: Yup.number()
        .required("Required")
        .typeError("Must be valid day")
        .test(
            "is-valid-day",
            "Must be valid day",
            (value) => value >= 1 && value <= 31
        )
        .test("is-valid-day", "Must be valid date", function (value) {
            const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (
                (this.parent.year % 4 == 0 && this.parent.year % 100 != 0) ||
                this.parent.year % 400 == 0
            ) {
                months[1] = 29;
            }
            if (value > months[this.parent.month - 1]) {
                return false;
            }
            return true;
        }),
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
        .max(new Date().getFullYear(), "Must be in the past"),
});

export type TDate = Yup.InferType<typeof formSchema>;
