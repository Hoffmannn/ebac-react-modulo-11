import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [form, setForm] = useState({ name: null, age: 0, rating: 0 });
  const [formList, setFormList] = useState([]);

  const submitForm = () => {
    setFormList([...formList, form]);
    setForm({
      id: Math.floor(Math.random() * 1000),
      name: "",
      age: 0,
      rating: 0,
    });
  };

  const removeFromFormList = (id) => {
    setFormList(formList.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        form,
        setForm,
        formList,
        setFormList,
        submitForm,
        removeFromFormList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
