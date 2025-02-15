import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "Litterbox", completed: true },
        { id: 2, title: "Brownie", completed: false },
        { id: 3, title: "Dishes", completed: false }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        } 
    }
})

export const { 
    addTodo, 
    toggleComplete,
    deleteTodo
} = todoSlice.actions;

export default todoSlice.reducer;