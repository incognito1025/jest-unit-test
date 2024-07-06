// __tests__/calculator.test.js
const { sum } = require("./src/calculator");


// describe("Calculator", () => {
//     test("adds 1 + 2 to equal 3", () => {
//         expect(sum(1, 2)).toBe(3);
//     });

//     test("subtracts two numbers", () => {

//     })
// })


// describe("Calculator", () => {
//     it("should add two numbers", () => {

//     });

//     it("should subtract two numbers", () => {

//     });
// });


// describe("Calculator", () => {
//     it("should add two numbers and return the sum", () => {
//       // test code
//     });
  
//     it("should subtract two numbers and return the difference", () => {
//       // test code
//     });
//   });

// describe("sum()", () => {
//     it("should add two numbers and return the sum", () => {
//       expect(sum(1, 2)).toBe(3);
//     });
//   });

// describe("getFullName()", () => {
//     it("should return a string with the full name of the contact", () => {
//       expect(
//         getFullName({
//           names: { first: "Jude", surname: "Pearson" },
//         })
//       ).toBe("Jude Pearson");
//     });
//   });

describe("getFullName()", () => {
    it("should return a string with the full name of the contact", () => {
      const input = { names: { first: "Jude", surname: "Pearson" } };
      const actual = getFullName(input);
      const expected = "Jude Pearson";
      expect(actual).toBe(expected);
    });
  });