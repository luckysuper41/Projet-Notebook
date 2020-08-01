//file: src/App.js
import React from "react";
import "./App.css";
//Kết nối vơi redux
import { connect } from "react-redux";
import ShowNote from './components/ShowNote'
import AddNote from './components/AddNote'

function App(props) {
  return (
     <div className="display-content">
      
      <AddNote />
      
      <div className="card-content">
        {props.note.map((note, index) => {
            // Render ra lần lượt các ghi chú.
            return <ShowNote noteData = {note} key={note.id}/>
        })}
      </div>
    </div>
  );
}
 
// Lấy state từ store bằng mapStateToProps
// Lúc này state nhận được sẽ gán vào props
const mapStateToProps = (state, ownProps) => {
  // Gán state nhận về từ store 
  // thành props có tên note (props.note)
  return {
    note: state.note,
  };
};
 
export default connect(mapStateToProps, null)(App);