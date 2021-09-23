import { createStore, combineReducers,  } from 'redux'
import { buildings } from './Buildings/reducer'
import { modal } from './Modal/reducer'

const reducers = combineReducers({
    buildings,
    modal
})

const store = createStore(reducers)

export default store