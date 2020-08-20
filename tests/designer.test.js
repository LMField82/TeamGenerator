const Designer = require("../library/Designer");

test("Can set GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Designer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() shoud return \"Designer\"", () => {
    const testValue = "Designer";
    const e = new Designer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Designer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});