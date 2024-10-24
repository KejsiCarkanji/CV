import '../App.css'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Input from '../components/Input'

const WorkExperience = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [details,setDetails] = useState({
        ...location.state,
        job_title: location.state.job_title || '',
        work_city: location.state.work_city || '',
        employer: location.state.employer || '',
        work_start_date: location.state.work_start_date || '',
        work_end_date: location.state.work_end_date || '',
        work_description: location.state.work_description || '',
    })

    const handleChange = (e) => {
        setDetails({...details, [e.target.id]: e.target.value})
    }

    console.log('location3', location.state)

    console.log('details3', details)

    const fields = [
        { label: 'Job title', id: 'job_title' },
        { label: 'City/Town', id: 'job_city' },
        { label: 'Employer', id: 'employer' },
        { label: 'Start date', id: 'job_start_date', type:'date' },
        { label: 'End date', id: 'job_end_date', type: 'date' },
        { label: 'Description', id: 'job_description' }
    ];

    return (
        <div className="card">
            {fields.map(field => {
                return ( 
                <Input
                key={field.id}
                label={field.label}
                id={field.id}
                value={details[field.id]}
                onChange={handleChange}
                />
                )
            })}
            
            <button onClick={() => navigate('/cv', { state: details })}>Next</button>
            <button onClick={() => navigate('/education', { state: details })}>Previous</button>
        </div>
    )
}

export default WorkExperience;