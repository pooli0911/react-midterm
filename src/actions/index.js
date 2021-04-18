import {
    ADD_TEAM_ITEM,
    REMOVE_TEAM_ITEM
} from "../utils/constants"

export const addToTeamItem = (dispatch, cookie, count) => {
    const item = {
        id: cookie.id,
        name: cookie.name,
        image: cookie.image,
        style: cookie.style,
    };
    dispatch({
        type: ADD_TEAM_ITEM,
        payload: item, count
    });
}

export const removeFromTeam = (dispatch, cookieId) => {
    dispatch({
        type: REMOVE_TEAM_ITEM,
        payload: cookieId,
    });
};