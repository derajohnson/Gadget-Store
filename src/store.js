import {createStore} from 'redux'
import reducer from './reducers/index'

const initialState = {}


let store = createStore(reducer, initialState)

export default store

