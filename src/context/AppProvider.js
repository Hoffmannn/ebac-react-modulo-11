import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [form, setForm] = useState({ name: null, age: 0, rating: 0 });
  const [formList, setFormList] = useState([]);

  const submitForm = () => {
    setFormList([...formList, form]);
    setForm({ name: "", age: 0, rating: 0 });
  };

  return (
    <AppContext.Provider
      value={{
        form,
        setForm,
        formList,
        setFormList,
        submitForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
