function formatDuration(seconds) {
  if (seconds <= 0) return "now";

  let book = {
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds,
  };

  while (book.seconds >= 31536000) {
    book.seconds -= 31536000;
    book.years++;
  }
  while (book.seconds >= 86400) {
    book.seconds -= 86400;
    book.days++;
  }
  while (book.seconds >= 3600) {
    book.seconds -= 3600;
    book.hours++;
  }
  while (book.seconds >= 60) {
    book.seconds -= 60;
    book.minutes++;
  }

  let summary = Object.entries(book);
  return summary
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => `${value} ${value > 1 ? key : key.slice(0, -1)}`)
    .reduce((el, nextEl, i, arr) => {
      console.log(arr.length);
      return el + (i === arr.length - 1 ? " and " : ", ") + nextEl;
    });
}
