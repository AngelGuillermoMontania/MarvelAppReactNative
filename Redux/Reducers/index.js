const initialState = {
    favorite: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return ({
                ...state,
                favorite: [...state.favorite, action.payload]
            });
        case "DELETE_FAVORITE":
            return ({
                ...state,
                favorite: state.favorite.filter(elem => elem.id !== action.payload)
            });
        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;