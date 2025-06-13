const multiplicar = require("./multiplicar.js");

test("multiplicar 2 * 10 deve ser 20", () => {
  expect(multiplicar(2, 10)).toBe(20);
});
