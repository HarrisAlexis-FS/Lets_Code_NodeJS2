//Write test first then write code to go with it so we know it work Test Driven Development
const {uppercase, lowercase} = require("./string")

describe("Testing the string module", () =>{

    //function 1
test("should uppercase a string input", () =>{
    const result = uppercase("bob");
    expect(result).toBe("BOB"); // or expect(uppercase("bob")).toBe("BOB");
});
    //function 2
test("should lowercase a string input", () => {
    expect(lowercase("FULL Sail")).toBe("full sail")
});


});