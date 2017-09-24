import { combineReducers } from 'redux'
import  dataListReducer  from './data_list_reducer'

const rootReducer = combineReducers({
  dataList: dataListReducer
}) 

export default rootReducer;


