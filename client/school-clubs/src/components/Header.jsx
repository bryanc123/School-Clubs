import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1>A. University Clubs</h1>
                <nav className="desktop-navigation">
                    <ul>
                        <li><Link to="clubs">Clubs</Link></li>
                        <li><Link to="students">Students</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;