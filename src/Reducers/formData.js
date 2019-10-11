// constant file
// function createData(id, name, book, days, hours) {
//     return { id, name, book, days, hours};
// }

function createData(id, name, book, days, hours) {
    return { id, name, book, days, hours};
}

const initialState = {
    rows : [
        createData(1, 'Marius', 'Touchstone 3', 'Thursday', 1),
        createData(2, 'Lais', 'Viewpoint 1', 'Tuesday and Thursday', 2),
    ]
}

// state => most updated data
// when there is nothing in the state, it returns the initialstate
export default function formData(state = initialState, action) {
    // action.type > condition
    switch(action.type) {
        case 'GET_FORM_DATA':
            return {
                ...state,
                rows: [...state.rows]
            }
        case 'ADD_FORM_DATA':
            // let copiedRows = state.rows; 
            // copiedRows.push(action.payload)
            return {
                ...state,
                rows: [...state.rows, action.payload]
            }
            // all params are called payload
        case 'EDIT_FORM_DATA':
            let editedRows = state.rows; 
            console.log('edited rows', action.payload); 
            // answer1: using map 
            const newRows = editedRows.map((row) => {
                if(row.id === action.payload.id) {
                    return action.payload
                }
                return row; 
            })

            // answer2: using index and replacing it 
            // const index = editedRows.findIndex((row) => row.id === action.payload.id)
            // editedRows[index] = action.payload; 

            return {
                ...state,
                rows: newRows
            }
        case 'DELETE_FORM_DATA':
            // this is Yuukis's code
            // let row = state.rows.filter((row) => {
            //     return action.payload !== row.id
            // })
            // return {rows: row};
            
            // this is the teacher's code
            let reduceRows = state.rows; 
            return {
                ...state, 
                rows: reduceRows.filter(row => row.id !== action.payload),
            }
            
        default:
            return state;
    }
}


