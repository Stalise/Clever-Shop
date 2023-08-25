export const subtractPercentages = (
    value: number,
    percentages: number,
): number => {
    return value - value * (percentages / 100);
};
