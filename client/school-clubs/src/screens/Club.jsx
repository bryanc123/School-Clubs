import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Club = () => {
    const [club, setClub] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const fetchClub = async () => {
            const response = await fetch( `http://localhost:5000/clubs/${id}`)
            const data = await response.json();
            setClub(data);
        }

        fetchClub();
    }, []);

    return (
        <section className="club">
            <div className="club-container">
            <h2>{club.name} Club</h2>
            <div className="club-description">
                <p>Description: {club.description}</p>
                <p>Location: Room {club.location?.room || null} in Building {club.location?.building || null}</p>
            </div>
            </div>
        </section>
    );
};

export default Club;