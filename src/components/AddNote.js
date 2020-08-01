//file AddNote.js
 
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
//Import actions vào đây
import { actAddNote } from "../actions/index";
 
function AddNote(props) {
  const [content, setContent] = useState();
 
  //Refs: Giúp chúng ta tương tác với DOM thật
 
  const noteInput = useRef(null)
 
  //Khi click vào nút thêm sẽ gọi hàm này,
  const handleAdd = () => {
 
    // Dispatch action.
    // Props này được tạo bởi hàm
    // mapDispatchToProps bên dưới
    props.addNote(content)
 
    //Gán giá trị cho input thành rỗng
    noteInput.current.value = ''
 
    //Cập nhật lại state content
    setContent('')
  };
   
  return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Content Note"
          value =  {content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
          ref={noteInput}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
  );
}
 
//Chuyển dispatch thành props.
//Ở đây nếu mình muốn dispatch action actAddNote
//thì chỉ cần gọi props.addNote(content)
const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (content) => {
      dispatch(actAddNote(content));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddNote);
