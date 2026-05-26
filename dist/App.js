"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./App.css");
var _react = require("react");
var _module = require("./module");
var _jsxRuntime = require("react/jsx-runtime");
function App() {
  const [form, setForm] = (0, _react.useState)({
    lastName: "",
    firstName: "",
    email: "",
    birthDate: "",
    city: "",
    postalCode: ""
  });
  const [status, setStatus] = (0, _react.useState)("");
  const onChange = event => {
    const {
      name,
      value
    } = event.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const onSubmit = event => {
    event.preventDefault();
    if (!(0, _module.isValidForm)(form)) {
      setStatus("Formulaire invalide");
      return;
    }
    localStorage.setItem("user", JSON.stringify(form));
    setStatus("Formulaire enregistre");
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "App",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      noValidate: true,
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "lastName",
        children: "Nom"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "lastName",
        name: "lastName",
        autoComplete: "family-name",
        value: form.lastName,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "firstName",
        children: "Pr\xE9nom"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "firstName",
        name: "firstName",
        autoComplete: "given-name",
        value: form.firstName,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "email",
        children: "E-mail"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "email",
        name: "email",
        type: "email",
        autoComplete: "email",
        value: form.email,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "birthDate",
        children: "Date de naissance"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "birthDate",
        name: "birthDate",
        type: "date",
        autoComplete: "bday",
        value: form.birthDate,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "city",
        children: "Ville"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "city",
        name: "city",
        autoComplete: "address-level2",
        value: form.city,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        htmlFor: "postalCode",
        children: "Code postal"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        id: "postalCode",
        name: "postalCode",
        autoComplete: "postal-code",
        inputMode: "numeric",
        value: form.postalCode,
        onChange: onChange
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "submit",
        children: "Envoyer"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: status
    })]
  });
}
var _default = exports.default = App;