import { Link } from 'react-router-dom';

const MobileMenu = () => {
    return (
        <nav className="mobile-navigation">
            <ul>
                <li><Link to="clubs">Clubs</Link></li>
                <li><Link to="Students">Students</Link></li>
            </ul>
        </nav>
    )
};

export default MobileMenu;