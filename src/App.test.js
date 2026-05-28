import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { buildValidUser } from "../test/helpers";

function fillForm(data) {
  fireEvent.change(screen.getByLabelText("Nom"), { target: { value: data.lastName } });
  fireEvent.change(screen.getByLabelText("Prénom"), { target: { value: data.firstName } });
  fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: data.email } });
  fireEvent.change(screen.getByLabelText("Date de naissance"), { target: { value: data.birthDate } });
  fireEvent.change(screen.getByLabelText("Ville"), { target: { value: data.city } });
  fireEvent.change(screen.getByLabelText("Code postal"), { target: { value: data.postalCode } });
}

test("formulaire invalide", () => {
  const u = buildValidUser(42);
  render(<App />);
  fillForm({ ...u, lastName: `${u.lastName}0` });
  fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));
  expect(screen.getByText("Formulaire invalide")).toBeInTheDocument();
});

test("formulaire valide enregistre dans localStorage", () => {
  for (let i = 0; i < 20; i += 1) {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
    const u = buildValidUser(i + 555);
    const { unmount } = render(<App />);
    fillForm(u);
    fireEvent.click(screen.getByRole("button", { name: "Envoyer" }));
    expect(setItemSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Formulaire enregistre")).toBeInTheDocument();
    setItemSpy.mockRestore();
    unmount();
  }
});


