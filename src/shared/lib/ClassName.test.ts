import ClassName from "./ClassName"
describe("ClassName",  () => {
    test("with only one parameter", () => {
        expect(ClassName("someClass")).toBe("someClass")
    });

    test("with additional class", () => {
        const exp = "someClass class1 class2"
        expect(ClassName("someClass", {}, ["class1", "class2"])).toBe(exp)
    });

    test("with mods", () => {
        const exp = "someClass class1 class2 hovered scrollable"
        expect(ClassName(
            "someClass",
            { hovered: true, scrollable: true },
            ["class1", "class2"]
        )).toBe(exp)
    });

    test("with mod equal undefined", () => {
        const exp = "someClass class1 class2 hovered"
        expect(ClassName(
            "someClass",
            { hovered: true, scrollable: undefined },
            ["class1", "class2"]
        )).toBe(exp)
    });

});
