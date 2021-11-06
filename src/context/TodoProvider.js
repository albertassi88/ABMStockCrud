import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoContext from "./TodoContext";

function TodoProvider({ children }) {
  const [idItem, setIdItem] = useState("");

  const context = {
    idItem,
    setIdItem,
  };

  return (
    <div>
      <TodoContext.Provider value={ context }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default TodoProvider;