import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Display from '../components/Display';
import '../App.css';

const HomePage = () => {
    const [cvs, setCvs] = useState([]);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const jobFilter = searchParams.get('job') || '';


    useEffect(() => {
        const savedCvs = JSON.parse(localStorage.getItem('cvs')) || [];
        console.log('savedCvs', savedCvs);
        setCvs(savedCvs);
    }, []);

    const handleClick = (cv) => {
        navigate('/personal-details', { state: cv });
    };

    const handleJobFilter = (e) => {
        const selectedJob = e.target.value;
        setSearchParams({ job: selectedJob });
    };

    const filteredCvs = cvs.filter((cv) => {
        if (jobFilter === '') {
            return true;
        }
        return cv.job_title.toLowerCase() === jobFilter.toLowerCase();
    });

    return (
        <div>
            <div className='card1'>
            <h1>My CVs</h1>
            <button onClick={() => navigate('/personal-details')}>Create CV</button>
            <select value={jobFilter} onChange={handleJobFilter}>
                <option value="">Job</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
            </select>
            </div>
            {cvs.length === 0 ? (
                <p>No CVs found.</p>
            ) : (
                filteredCvs.map((cv) => (
                    <div key={cv.id} className="container" id={cv.id}>
                        <Display details={cv} />
                        <button onClick={() => handleClick(cv)}>Edit</button>
                        <button onClick={() => {
                            const updatedCvs = cvs.filter((cvItem) => cvItem.id !== cv.id);
                            localStorage.setItem('cvs', JSON.stringify(updatedCvs));
                            setCvs(updatedCvs);
                        }}>Delete</button>  
                    </div>
                ))
            )}
        </div>
    );
};

export default HomePage;
