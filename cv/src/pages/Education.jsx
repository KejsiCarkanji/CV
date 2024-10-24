import '../App.css'
import {useLocation, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Input from '../components/Input'

const Education = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        ...location.state,
        degree: location.state?.degree || '',
        school: location.state?.school || '',
        education_city: location.state?.education_city || '',
        start_date: location.state?.start_date || '',
        end_date: location.state?.end_date || '',
        description: location.state?.description || '',
    })

    console.log('location2', location.state)

    const handleChange = (e) => {
        setDetails({...details, [e.target.id]: e.target.value})
    }

    const fields = [
        { label: 'Degree', id: 'degree' },
        { label: 'School/University', id: 'school' },
        { label: 'City/Town', id: 'education_city' },
        { label: 'Start date', id: 'start_date', type:'date' },
        { label: 'End date', id: 'end_date', type: 'date' },
        { label: 'Description', id: 'description' }
    ];

    console.log('details2', details)
    return (
        <div className="card">
            {fields.map(field => {
                return (
                    <Input
                        key={field.id}
                        label={field.label}
                        id={field.id}
                        type={field.type || 'text'}
                        value={details[field.id]}
                        onChange={handleChange}
                    />
                )
            })}

            <button onClick={() => navigate('/work-experience', {state: details})}>Next</button>
            <button onClick={() => navigate('/personal-details', {state: details})}>Previous</button>
        </div>
    )
}

export default Education;