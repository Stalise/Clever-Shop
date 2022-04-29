export enum optionsSelectValues {
   arrivals = "isNewArrivals",
   special = "isSpecial",
   bestseller = "isBestseller",
   viewed = "isMostViewed",
   featured = "isFeatured",
}

export enum optionsSelectLabels {
   arrivals = "NEW ARRIVALS",
   special = "SPECIALS",
   bestseller = "BESTSELLERS",
   viewed = "MOST VIEWED",
   featured = "FEATURED PRODUCTS",
}

export const optionsSelectItems = {
   arrivals: {
      value: optionsSelectValues.arrivals,
      label: optionsSelectLabels.arrivals
   },
   special: {
      value: optionsSelectValues.special,
      label: optionsSelectLabels.special
   },
   bestseller: {
      value: optionsSelectValues.bestseller,
      label: optionsSelectLabels.bestseller
   },
   viewed: {
      value: optionsSelectValues.viewed,
      label: optionsSelectLabels.viewed
   },
   featured: {
      value: optionsSelectValues.featured,
      label: optionsSelectLabels.featured
   },
}