"use strict";

var _helpers = require("../test/helpers");
var _module = require("./module");
describe("module", () => {
  test("isValidName", () => {
    for (let i = 0; i < 100; i += 1) {
      expect((0, _module.isValidName)((0, _helpers.nomValide)(i))).toBe(true);
      expect((0, _module.isValidName)(`${(0, _helpers.nomValide)(i)}9`)).toBe(false);
    }
    expect((0, _module.isValidName)()).toBe(false);
  });
  test("isValidEmail", () => {
    for (let i = 0; i < 100; i += 1) {
      expect((0, _module.isValidEmail)((0, _helpers.emailValide)(i))).toBe(true);
      expect((0, _module.isValidEmail)(`pasarobase${i}.fr`)).toBe(false);
    }
    expect((0, _module.isValidEmail)()).toBe(false);
  });
  test("isValidFrenchPostalCode", () => {
    for (let i = 0; i < 100; i += 1) {
      expect((0, _module.isValidFrenchPostalCode)((0, _helpers.codePostal)(i))).toBe(true);
      expect((0, _module.isValidFrenchPostalCode)((0, _helpers.codePostal)(i).slice(0, 4))).toBe(false);
    }
    expect((0, _module.isValidFrenchPostalCode)()).toBe(false);
  });
  test("isAdult", () => {
    expect((0, _module.isAdult)((0, _helpers.naissanceAdulte)())).toBe(true);
    expect((0, _module.isAdult)((0, _helpers.naissanceMineur)())).toBe(false);
    expect((0, _module.isAdult)("date-invalide")).toBe(false);
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-06-15"));
    expect((0, _module.isAdult)("2008-07-01")).toBe(false);
    expect((0, _module.isAdult)("2008-06-20")).toBe(false);
    jest.useRealTimers();
  });
  test("isValidForm", () => {
    for (let i = 0; i < 100; i += 1) {
      const u = (0, _helpers.buildValidUser)(i);
      expect((0, _module.isValidForm)(u)).toBe(true);
      expect((0, _module.isValidForm)({
        ...u,
        lastName: `${u.lastName}0`
      })).toBe(false);
    }
  });
});