const callApi = (types, api, ...apiArgs) => async dispatch => {
    const [request, success, error] = types;

    dispatch({ type: request });
    try {
        const { data } = await api(...apiArgs);
        return dispatch({ type: success, payload: data });
    } 
    catch (e) {
        return dispatch({ type: error, error: e.response.data })
    }
}

export default callApi;
