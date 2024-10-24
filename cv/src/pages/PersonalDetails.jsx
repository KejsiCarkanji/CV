import '../App.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../components/Input';

const PersonalDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [details, setDetails] = useState(() => ({
        ...location.state,
        id: location.state?.id || Date.now(),
        name: location.state?.name || '',
        surname: location.state?.surname || '',
        email: location.state?.email || '',
        phone: location.state?.phone || '',
        address: location.state?.address || '',
        zip_code: location.state?.zip_code || '',
        city: location.state?.city || ''
    }));

    const fields = [
        { label: 'First Name*', id: 'name' },
        { label: 'Last Name*', id: 'surname' },
        { label: 'Email Address*', id: 'email', type: 'email' },
        { label: 'Phone Number', id: 'phone' },
        { label: 'Address', id: 'address' },
        { label: 'Zip Code', id: 'zip_code' },
        { label: 'City/Town', id: 'city' }
    ];

    const handleChange = (e) => {
        setDetails({...details, [e.target.id]: e.target.value});
    };

    console.log('location1', location.state);
    console.log('details1', details);

    const handleClick = () => {
        if(!details.name || !details.surname) {
            alert('Please fill in all required fields');
            return;
        }

        navigate('/education', { state: details });
    };

    return (
        <div className="card">
            {fields.map((field) => (
                <Input
                    key={field.id}
                    label={field.label}
                    id={field.id}
                    type={field.type || 'text'}
                    value={details[field.id]}
                    onChange={handleChange}
                />
            ))}

            <button onClick={handleClick}>Next</button>
        </div>
    );
};

export default PersonalDetails;
