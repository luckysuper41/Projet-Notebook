//reducesr/noteReducers.js
 
//Import các const
import { ADD_NEW_NOTE, REMOVE_NOTE, EDIT_NOTE } from "../const/index";
 
const noteReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const generateID = new Date().getTime();
      state = [...state, { id: generateID, content: action.content }];// thêm new note nên dung ...state
      return state;
 
    case EDIT_NOTE:
      const indexOfEditNote = state.findIndex((note) => note.id === action.id);// gán id của id note thành id đang thao tác
      if (indexOfEditNote !== -1)
        state[indexOfEditNote].content = action.content;//gán content
      
      return state;
 
    case REMOVE_NOTE:
      const idRemove = action.id;
      state = state.filter(note => {
        if (note.id === idRemove) 
          return false
        return true
      })
      //trả lại các giá trị id còn lại sauf cái đã bị xóa
      return state;

    default:
      return state;
  }
};
 
export default noteReducers