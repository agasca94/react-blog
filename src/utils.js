export const createFormData = body => {
    const form = new FormData();
    const entries = Object.entries(body);
    for (const [key, value] of entries) {
        form.append(key, value);
    }

    return form;
}

export function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return  `${monthNames[monthIndex]} ${day}, ${year}`;
}

export const handleObjectChange = setter => e => {
    const { name, value } = e.target;
    setter(prev => ({
        ...prev,
        [name]: value
    }));
}

export const handleChange = setter => e => setter(e.target.value);
