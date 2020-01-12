import React from 'react';
import { handleObjectChange } from 'utils';

function ResourceForm(props) {
    const { 
        resource: initialValues, 
        onSubmit, 
        normalize, 
        children, 
        ...rest 
    } = props;

    const [resource, setResource] = React.useState(
        normalize?.(initialValues) || {...initialValues}
    )

    React.useEffect(() => {
        if (initialValues) {
            setResource(
                normalize?.(initialValues) || {...initialValues}
            )
        };
    }, [initialValues, normalize]);

    const handle = handleObjectChange(setResource);

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
