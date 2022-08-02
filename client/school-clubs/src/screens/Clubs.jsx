import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Clubs = () => {
    const [clubs, setClubs] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/clubs")
            .then(response => response.json())
            .then(data => {
                setClubs(data);
            });
    }, []);

    return (
        <section className="clubs">
            <div className="clubs-container">
                <h2>Clubs</h2>
                <div>{clubs.map(club => (
                    <div key={club._id} className="club-item">
                        <h3>{club.name} Club</h3>
                        <div className="club-description">
                            <p>{club.description}</p>
                            <Link to={`${club._id}`}>View Details</Link>
                        </div>
                    </div>
                ))}</div>
            </div>
        </section>
    );
};

export default Clubs;