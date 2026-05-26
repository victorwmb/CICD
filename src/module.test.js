import {
  buildValidUser,
  codePostal,
  emailValide,
  naissanceAdulte,
  naissanceMineur,
  nomValide,
} from "../test/helpers";
import {
  isAdult,
  isValidEmail,
  isValidForm,
  isValidFrenchPostalCode,
  isValidName,
} from "./module";

describe("module", () => {
  test("isValidName", () => {
    for (let i = 0; i < 100; i += 1) {
      expect(isValidName(nomValide(i))).toBe(true);
      expect(isValidName(`${nomValide(i)}9`)).toBe(false);
    }
    expect(isValidName()).toBe(false);
  });

  test("isValidEmail", () => {
    for (let i = 0; i < 100; i += 1) {
      expect(isValidEmail(emailValide(i))).toBe(true);
      expect(isValidEmail(`pasarobase${i}.fr`)).toBe(false);
    }
    expect(isValidEmail()).toBe(false);
  });

  test("isValidFrenchPostalCode", () => {
    for (let i = 0; i < 100; i += 1) {
      expect(isValidFrenchPostalCode(codePostal(i))).toBe(true);
      expect(isValidFrenchPostalCode(codePostal(i).slice(0, 4))).toBe(false);
    }
    expect(isValidFrenchPostalCode()).toBe(false);
  });

  test("isAdult", () => {
    expect(isAdult(naissanceAdulte())).toBe(true);
    expect(isAdult(naissanceMineur())).toBe(false);
    expect(isAdult("date-invalide")).toBe(false);
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-06-15"));
    expect(isAdult("2008-07-01")).toBe(false);
    expect(isAdult("2008-06-20")).toBe(false);
    jest.useRealTimers();
  });

  test("isValidForm", () => {
    for (let i = 0; i < 100; i += 1) {
      const u = buildValidUser(i);
      expect(isValidForm(u)).toBe(true);
      expect(isValidForm({ ...u, lastName: `${u.lastName}0` })).toBe(false);
    }
  });
});
