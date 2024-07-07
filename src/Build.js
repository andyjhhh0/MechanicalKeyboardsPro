import { Link } from "react-router-dom";

const Build = () => {
  return (
    <div className="build-your-own-keyboard container mt-5">
      <h2>Build Your Own Keyboard</h2>
      <p>Use our interactive tool to customize and build your own mechanical keyboard.</p>
      <li><Link to="/MechanicalKeyboardsPro">Start building</Link></li>
    </div>
  );
};

export default Build;
