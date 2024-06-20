
import { reverseString } from "./reverseString";

test('reverseString function', () => {
    expect(reverseString("a,b$c")).toBe("c,b$a");
    expect(reverseString("Ab,c,de!$")).toBe("ed,c,bA!$");
});