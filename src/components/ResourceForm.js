import React from 'react';
import { handleObjectChange } from './formUtils';

function ResourceForm(props) {
    const { resource: initialValues, onSubmit, children, ...rest } = props;
    const [resource, setResource] = React.useState(initialValues)
    
    const handle = handleObjectChange(setResource);

    React.useEffect(() => {
        if (initialValues) {
            setResource(initialValues)
        };
    }, [initialValues]);

    const submit = (e) => {
        e.preventDefault();
        onSubmit(resource);
    }

    return (
        <form onSubmit={submit} {...rest}>
            {React.Children.map(children,
                child => 
                    React.cloneElement(child, {
                        value: resource[child.props.name],
                        onChange: handle
                    })
            )}
        </form>
    );
}

export default ResourceForm;
