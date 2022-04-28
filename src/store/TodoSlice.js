import {createSlice} from "@reduxjs/toolkit";

const ENTER = 13;

const initialState = {
    currentId: 0,
    todos: {},
    inputText: ''
}

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        onInputChange : (state, value) => {
            console.log({value})
            state.inputText = value.payload;
        },
        onDeletePress : (state, id) => {
            const newTodos = {...state.todos};
            delete newTodos[id.payload];
            state.todos = newTodos;
        },
        onDonePress : ( state, id) => {
            const newTodos = {...state.todos};
            newTodos[id.payload].done = !newTodos[id.payload].done;
            state.todos = newTodos;
        },
        onKeyPressed : (state, e) => {
            console.log(e.payload)
            if(e.payload.keyCode === ENTER && state.inputText !== ''){
                const newTodos = {...state.todos};

                newTodos[state.currentId] = {
                    text: state.inputText,
                    done: false,
                };

                state.todos = newTodos;
                state.currentId = state.currentId +1;
                state.inputText = '';
            }
        }
    }
})

export const {onInputChange, onDeletePress, onKeyPressed, onDonePress} = todoSlice.actions;

export default todoSlice.reducer;