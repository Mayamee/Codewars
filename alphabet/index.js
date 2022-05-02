function alphabetPosition(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((e) => " " + String(e.charCodeAt(0) - 96))
    .join("")
    .trim();
}
console.log(alphabetPosition("ABCDEFhe sunset sets at twelve o' clock."));
