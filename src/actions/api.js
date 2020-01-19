import { normalize } from "normalizr";

const callApi = (types, api, schema=null) => async dispatch => {
    const [request, success, error] = types;

    dispatch({ type: request });
    try {
        const { data: body } = await api();
        
        // Check if the actual payload is wrapped in a 'data' key
        // (This happens if the response also contains some meta information)
        let data = body.data || body;

        // Flatten server response if required
        if (schema) {
            data = normalize(data, schema);
        }
        
        // Check if pagination data is present
        return (body.meta && body.data) ?
            dispatch({ 
                type: success,
                payload: data,
                pagination: body.meta
            }) : 
            dispatch({ 
                type: success,
                payload: data
            })
    } 
    catch (e) {
        console.log(e)
        return dispatch({ type: error, error: e.response.data })
    }
}

export default callApi;
