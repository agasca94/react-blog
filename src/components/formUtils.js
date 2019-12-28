export const handleObjectChange = setter => e => {
    const { name, value } = e.target;
    setter(prev => ({
        ...prev,
        [name]: value
    }));
}

export const handleChange = setter => e => setter(e.target.value);
