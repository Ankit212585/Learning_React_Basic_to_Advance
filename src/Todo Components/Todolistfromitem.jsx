import { createContext } from "react";
import { useReducer } from "react";

export const TodoContextItem = createContext([]);

const dispatchTodolist0 = (currentstate, action) => {
  let myTodoitem = currentstate;
  if (action.type === "New_item") {
    myTodoitem = [
      ...currentstate,
      { Name: action.payload.Name, DueDate: action.payload.DueDate },
    ];
  } else if (action.type === "Delet_item") {
    myTodoitem = currentstate.filter(
      (item) => item.Name !== action.payload.itemName
    );
  }
  return myTodoitem;
};

const TodoitemContextProvider = ({ children }) => {
  const [todolist, dispatchTodolist] = useReducer(
    dispatchTodolist0,
    []
  );

  const handleNewItem = (Name, DueDate) => {
    const newItemAction = {
      type: "New_item",
      payload: {
        Name,
        DueDate,
      },
    };
    dispatchTodolist(newItemAction);
  };
  const handleDelet = (itemDelet) => {
    const DeletItemAction = {
      type: "Delet_item",
      payload: {
        itemName: itemDelet,
      },
    };
    dispatchTodolist(DeletItemAction);
  };
  return (
    <TodoContextItem.Provider
      value={{
        todolist,
        handleNewItem,
        handleDelet,
      }}
    >
      {children}
    </TodoContextItem.Provider>
  );
};

export default TodoitemContextProvider;
