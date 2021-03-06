const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messageData: [
    { id: 1, messages: "Hi" },
    { id: 2, messages: "How are you?" },
    { id: 3, messages: "Bye Bye!" },
  ],
  dialogData: [
    { id: 1, name: "Stalone" },
    { id: 2, name: "Gena" },
    { id: 3, name: "Xaker" },
    { id: 4, name: "Ronaldo" },
    { id: 5, name: "London" },
    { id: 6, name: "Berlin" },
  ],
  newMessageText: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageData: [
          ...state.messageData,
          { id: 5, messages: state.newMessageText },
        ],
        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newTextM,
      };
    default:
      return state;
  }
};

export const actionMCreatorAddMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const actionMUpdNewMessageText = (textM) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newTextM: textM,
  };
};

export default messageReducer;
