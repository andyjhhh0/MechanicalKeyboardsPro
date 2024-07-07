import { Link } from "react-router-dom";

const Foot = () => {
    return ( 
        <nav className="foot">
            <li><Link to="/MechanicalKeyboardsPro">MechanicalKeyboardsPro</Link></li>
            <div className="linksfoot"></div>
            <li><Link to="/Shop">Shop Keyboards</Link></li>
            <li><Link to="/LatestNews">Latest News</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/LogIn">Log Out</Link></li>
        </nav>
     );
}
 
export default Foot;