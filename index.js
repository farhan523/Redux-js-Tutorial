const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUYICE_CREAM";

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// const initialState = {
//     numOfCakes: 12,
//     numOfIceCreams: 10
// }

const initialCakeState = {
    numOfCakes: 12
}

const initialIceCreamState = {
    numOfIceCreams: 10
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM
    }
}



const Icecreamreducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case 'BUYICE_CREAM':
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default:
            return state
    }
}

const Cakereducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }


        default:
            return state
    }
}


// const store = createStore(reducer)

const rootReducer = combineReducers({
    CakeReducer: Cakereducer,
    Icecreamreducer: Icecreamreducer
})

const store2 = createStore(rootReducer, applyMiddleware(logger))


console.log(store2.getState())

store2.dispatch(buyIceCream())
store2.dispatch(buyCake())
console.log(store2.getState())
// store.dispatch(buyCake())

// store.dispatch(buyIceCream())
// console.log(store.getState())