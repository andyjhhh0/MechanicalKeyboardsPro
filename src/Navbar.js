const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/MechanicalKeyboardsPro" style={{
                fontSize: 30,
            }}>MechanicalKeyboardsPro</a>
            <div className="links"></div>
            <a href="/Shop">Shop Keyboards</a>
            <a href="/LatestNews">Latest news</a>
            <a href="/Build">Build your own keyboard</a>
            <a href="/Contact">Contact Us</a>
            <a href="/LogIn">Log out</a>
        </nav>
     );
}
 
export default Navbar;