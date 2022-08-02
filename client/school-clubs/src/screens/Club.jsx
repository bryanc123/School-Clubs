import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Club = () => {
    const [club, setClub] = useState({});
    let { id } = useParams();

    useEffect(() => {
        fetch( `http://localhost:5000/clubs/${id}`)
            .then(response => response.json())
            .then(data => {
                setClub(data);
            });
    }, [id]);

    console.log(club.location);

    return (
        <section className="club">
            <div className="club-container">
            <h2>{club.name} Club</h2>
            <div className="club-description">
                <p>Description: {club.description}</p>
                {/* <p>Location: Room {club.location.room} in Building {club.location.building}</p> */}
            </div>
            </div>
        </section>
    );
};

export default Club;