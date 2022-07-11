// https://www.codewars.com/kata/52a78825cdfc2cfc87000005/train/javascript
const solveExpression = (expression) =>
  expression
    .replace(/--/g, "+")
    .replace(/\/\+/g, "/")
    .replace(/\+{2,}/g, "+")
    .replace(/\-\+/g, "-")
    .replace(/\d+(\.\d+)?\/\-?\d+(\.\d+)?/g, (match) => {
      const numbers = match.split("/");
      return String(+numbers[0] / +numbers[1]);
    })
    .replace(/\d+(\.\d+)?\*\-?\d+(\.\d+)?/g, (match) => {
      const numbers = match.split("*");
      return String(+numbers[0] * +numbers[1]);
    })
    .replace(/\-?\d+(\.\d+)?\+\-?\d+(\.\d+)?/g, (match) => {
      const numbers = match.split("+");
      return String(+numbers[0] + +numbers[1]);
    })
    .replace(/\-?\d+(\.\d+)?\-\-?\d+(\.\d+)?/g, (match) => {
      const numbers = match.split(/(?<=\d)\-(?=\-?\d)/);
      return String(+numbers[0] - +numbers[1]);
    });

const solveExpressionWithBrackets = (expression) =>
  !/[\(\)]/g.test(expression)
    ? solveExpression(expression)
    : solveExpressionWithBrackets(
        expression.replace(/\([^\(\)]+\)/, (deepestExpression) =>
          solveExpression(deepestExpression.replace(/[\(\)]/g, ""))
        )
      );
const validateExpression = (expression) =>
  /[ \d][\-\+] *\- /g.exec(expression) === null &&
  / \-\(\- /g.exec(expression) === null;

var calc = function (expression) {
  if (!validateExpression(expression)) {
    return "Invalid";
  }
  return +solveExpressionWithBrackets("(" + expression.replace(/ /g, "") + ")");
};

// console.log(calc("2 / 5 * 4.33 + 6 -(-(4*2/15)+1)".replace(/ /g, "")));
// console.log(calc("1-6*-12".replace(/ /g, "")));
console.log(calc("1 - -(-(-(-4)))".replace(/ /g, "")));
