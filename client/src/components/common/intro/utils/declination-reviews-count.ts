import pluralize from 'pluralize';

export const declinationReviewsCount = (reviews: number): string =>
    pluralize('Review', reviews, true);
