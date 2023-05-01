import { TDate } from "../formSchema";

export const calculateAge = (date: TDate): TDate => {
    const { day, month, year } = date;
    const birthDate = new Date(year, month - 1, day);
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }
    }
    return { year: years, month: months, day: days };
};
