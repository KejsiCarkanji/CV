import React, { useEffect, useRef } from 'react';

const Input = ({ label, id, type = 'text', value, onChange}) => {
    return (
        <div className="card">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onChange} required={type === 'name'} />
        </div>
    );
};

export default Input;
