
export default (types, initialState={}) => {
    const [requestTypes, successTypes, errorTypes] = types;

    return (state=initialState, action) => {
        const { type, pagination, error } = action;

        if (requestTypes.includes(type)) {
            return {
                loading: true,
                error: null
            }
        }
        else if (successTypes.includes(type)) {
            return {
                loading: false,
                error: null,

                currentPage: pagination?.page,
                totalPages: pagination?.pages
            }
        }
        else if(errorTypes.includes(type)) {
            return {
                loading: false,
                error
            }
        }

        return state;
    }
}
