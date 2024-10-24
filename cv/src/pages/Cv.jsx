import {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'
import Display from '../components/Display'

const Cv = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        ...location.state
    })

    console.log('details4', details)
    const handleClick = () => {
        const existingCvs = JSON.parse(localStorage.getItem('cvs')) || [];
        
        const existingIndex = existingCvs.findIndex(cv => cv.id === details.id);
        if (existingIndex >= 0) {
            existingCvs[existingIndex] = details;
        } else {
            existingCvs.push(details);
        }
        localStorage.setItem('cvs', JSON.stringify(existingCvs));
        
        alert('CV saved successfully!');
        navigate('/');
    };
    

    return (
        <div className='card'>
            <Display details={details} />
            <button onClick={() => navigate('/work-experience', {state: details})}>Previous</button>
            <button onClick={handleClick}>Save</button>

        </div>
    )
}

export default Cv;