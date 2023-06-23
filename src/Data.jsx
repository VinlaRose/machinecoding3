

  export const initialState = {
    data: [],
    filteredData: [],
}
export const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                ...state,
                data: action.payload,
                filteredData: action.payload,
            }
            case 'SEARCH':
                return{
                    ...state,
                    filteredData: action.payload,
                }
        
        default:
            return state;
        
        }}


