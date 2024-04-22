export const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const monthDifference = today.getMonth() - birth.getMonth();
    const dayDifference = today.getDate() - birth.getDate();

    // Si la diferencia de meses es negativa o si es 0 pero la diferencia de días es negativa,
    // significa que el cumpleaños de la persona todavía no ha llegado este año.
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
};

export const parseDate = (dateStr: string) => {
    const parts = dateStr.split('-');
    // Cambiamos el orden de los elementos para que se ajusten al formato esperado
    const year = `${parts[2]}`;
    return year;
};
