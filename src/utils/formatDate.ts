export const formatDate = (date: Date) => {
  const newDate = new Date(date)

  const getDate = newDate.getDate()
  const getMonth = newDate.getMonth()
  const getYear = newDate.getFullYear()

  return `${getDate}/${getMonth + 1}/${getYear}`
}
