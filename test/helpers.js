export function nomValide(i) {
  let s = "";
  const n = 3 + (i % 8);
  for (let k = 0; k < n; k += 1) {
    s += String.fromCharCode(65 + ((i + k) % 26));
  }
  if (i % 4 === 0) {
    s += "-";
  }
  if (i % 4 === 1) {
    s += "'";
  }
  s += "\u00c9";
  return s;
}

export function codePostal(i) {
  return String(10000 + (i % 90000));
}

function dateIsoLocale(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function naissanceAdulte() {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 25);
  return dateIsoLocale(d);
}

export function naissanceMineur() {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 10);
  return dateIsoLocale(d);
}

export function emailValide(i) {
  return `u${i}@d.${["fr", "com", "net"][i % 3]}`;
}

export function buildValidUser(i) {
  return {
    lastName: nomValide(i),
    firstName: nomValide(i + 1000),
    email: emailValide(i),
    birthDate: naissanceAdulte(),
    city: nomValide(i + 2000),
    postalCode: codePostal(i),
  };
}
