
export const currentDate = (): number => {
   const currentDate: any = new Date()

   return Date.parse(currentDate)
}

export const enteredDate = (date: string): number => {
   let enteredDate: any = date.split('/')

   const year: any = '20' + enteredDate[1]

   enteredDate = new Date(year, enteredDate[0])

   return Date.parse(enteredDate)
}
