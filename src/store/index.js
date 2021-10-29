import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducers';
import thunk from "redux-thunk"


const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default createStore(
    reducer,
    enhancers
    )

    // ,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
