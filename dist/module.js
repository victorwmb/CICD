"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdult = isAdult;
exports.isValidEmail = isValidEmail;
exports.isValidForm = isValidForm;
exports.isValidFrenchPostalCode = isValidFrenchPostalCode;
exports.isValidName = isValidName;
function isValidName(value) {
  const s = (value || "").trim();
  return s.length > 0 && /^[\p{L}\s'.-]+$/u.test(s);
}
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((value || "").trim());
}
function isValidFrenchPostalCode(value) {
  return /^[0-9]{5}$/.test((value || "").trim());
}
function isAdult(value) {
  const birthDate = new Date(value);
  if (Number.isNaN(birthDate.getTime())) {
    return false;
  }
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
    age -= 1;
  }
  return age >= 18;
}
function isValidForm(data) {
  return isValidName(data.lastName) && isValidName(data.firstName) && isValidEmail(data.email) && isAdult(data.birthDate) && isValidName(data.city) && isValidFrenchPostalCode(data.postalCode);
}