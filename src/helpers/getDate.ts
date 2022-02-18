// get the date format DD. DD MM
const getDate = (dayNum: number) => {
  const date = new Date(Date.now() + dayNum * 1000 * 60 * 60 * 24);
  const day = date.getDate();
  const weekDay = dayOfWeek(date.getDay());
  const month = monthOfYear(date.getMonth());
  return `${weekDay}. ${day} ${month}`;
};

const dayOfWeek = (dayIndex: number) => {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayIndex] || '';
};
// get the month of the year
const monthOfYear = (monthIndex: number) => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][monthIndex] || '';
};

export default getDate;
