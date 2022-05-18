export function addFavorite(character) {
    return({
        type: 'ADD_FAVORITE',
        payload: character

    })
}

export function deleteFavorite(character) {
    return({
        type: 'DELETE_FAVORITE',
        payload: character.id
    })
}

export function getListCards() {
    return async (dispatch) => {
        let json = await axios.post('http://localhost:3001/Properties');
        return dispatch({
            type: 'GET_LISTCARDS',
            payload: json.data
        })
    }
}