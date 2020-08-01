//reducers/index.js
import {combineReducers} from 'redux' 
//Ta có thể tạo nhiều reducers như này, 
//và gộp nó vào bằng phương thức combineReducers trong redux.
import noteReducers from './noteReducer'
 
export default combineReducers({
    note: noteReducers
})
//gộp cả 3 phương thức tạo xóa chỉnh sửa thành 1 là note