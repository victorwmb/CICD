import "./App.css";
import { useState } from "react";
import { isValidForm } from "./module";

function App() {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birthDate: "",
    city: "",
    postalCode: "",
  });
  const [status, setStatus] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isValidForm(form)) {
      setStatus("Formulaire invalide");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    setStatus("Formulaire enregistre");
  };

  return (
    <div className="App">
      <form noValidate onSubmit={onSubmit}>
        <label htmlFor="lastName">Nom</label>
        <input id="lastName" name="lastName" autoComplete="family-name" value={form.lastName} onChange={onChange} />
        <label htmlFor="firstName">Prénom</label>
        <input id="firstName" name="firstName" autoComplete="given-name" value={form.firstName} onChange={onChange} />
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} />
        <label htmlFor="birthDate">Date de naissance</label>
        <input id="birthDate" name="birthDate" type="date" autoComplete="bday" value={form.birthDate} onChange={onChange} />
        <label htmlFor="city">Ville</label>
        <input id="city" name="city" autoComplete="address-level2" value={form.city} onChange={onChange} />
        <label htmlFor="postalCode">Code postal</label>
        <input id="postalCode" name="postalCode" autoComplete="postal-code" inputMode="numeric" value={form.postalCode} onChange={onChange} />
        <button type="submit">Envoyer</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default App;
