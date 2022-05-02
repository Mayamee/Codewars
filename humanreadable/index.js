function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const MULTIPLIERS = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };
  const TimeOBJ = Object.entries(MULTIPLIERS)
    .sort(([, a], [, b]) => b - a)
    .reduce(
      (acc, cur) => {
        const [entry, value] = cur;
        acc[entry] = ~~(acc.seconds / value);
        acc.seconds %= value;
        return acc;
      },
      { seconds }
    );

  return Object.entries(TimeOBJ)
    .filter((e) => Array.isArray(e) && e[1])
    .map((e) => {
      e[0] = e[1] > 1 ? e[0] + "s" : e[0];
      return e;
    })
    .map((e) => `${e[1]} ${e[0]}`)
    .join(", ")
    .replace(/, (?=[^,]*$)/, " and ");
}
const time = 29821239348;
console.log(formatDuration(time));
