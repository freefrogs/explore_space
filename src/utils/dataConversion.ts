export const getShortDate = (eventData: string) => {
  const newDate = eventData.replace(/(T)|(Z)/g, ' ').trim()
  return newDate.substring(0, newDate.lastIndexOf(" "))
}

export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear()
  return Number(currentYear)
}
