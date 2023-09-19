import dayjs from 'dayjs';

const data = {
    day: 'today',
    lessMonth: 'less than a month',
    month: 'month ago',
    threeMonths: '3 months ago',
    sixMonths: '6 months ago',
    year: 'more than a year',
};

export const getOrderDate = (date: string): string => {
    if (date === dayjs().format('YYYY-MM-DD')) return data.day;

    const difference = dayjs().diff(date, 'months');

    if (difference === 0) return data.lessMonth;
    if (difference < 3) return data.month;
    if (difference < 6) return data.threeMonths;
    if (difference < 12) return data.sixMonths;

    return data.year;
};
