import { useState, createContext } from "react";

const RegistrationContext = createContext();

const RegistrationProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    companyName: "",
    bulstat: "",
    subscription: "",
    country: "",
    city: "",
    address: "",
    postCode: "",
  });

  return (
    <RegistrationContext.Provider value={{ user }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export { RegistrationProvider, RegistrationContext };
