"use strict";

var _react = require("@testing-library/react");
var _App = _interopRequireDefault(require("./App"));
var _helpers = require("../test/helpers");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function fillForm(data) {
  _react.fireEvent.change(_react.screen.getByLabelText("Nom"), {
    target: {
      value: data.lastName
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText("Prénom"), {
    target: {
      value: data.firstName
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText("E-mail"), {
    target: {
      value: data.email
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText("Date de naissance"), {
    target: {
      value: data.birthDate
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText("Ville"), {
    target: {
      value: data.city
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText("Code postal"), {
    target: {
      value: data.postalCode
    }
  });
}
test("formulaire invalide", () => {
  const u = (0, _helpers.buildValidUser)(42);
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {}));
  fillForm({
    ...u,
    lastName: `${u.lastName}0`
  });
  _react.fireEvent.click(_react.screen.getByRole("button", {
    name: "Envoyer"
  }));
  expect(_react.screen.getByText("Formulaire invalide")).toBeInTheDocument();
});
test("formulaire valide enregistre dans localStorage", () => {
  for (let i = 0; i < 20; i += 1) {
    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");
    const u = (0, _helpers.buildValidUser)(i + 555);
    const {
      unmount
    } = (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App.default, {}));
    fillForm(u);
    _react.fireEvent.click(_react.screen.getByRole("button", {
      name: "Envoyer"
    }));
    expect(setItemSpy).toHaveBeenCalledTimes(1);
    expect(_react.screen.getByText("Formulaire enregistre")).toBeInTheDocument();
    setItemSpy.mockRestore();
    unmount();
  }
});