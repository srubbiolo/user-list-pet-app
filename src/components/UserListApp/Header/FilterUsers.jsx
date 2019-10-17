import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const FilterUsers = ({handleChange}) => {
    return <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Filter users:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Type a name..."
                aria-label="name"
                onChange={(e) => handleChange(e.target.value)}
                />
            </InputGroup>
}

export default FilterUsers