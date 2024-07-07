
import keyboardOneImage from './images/image1.jpg';
import keyboardTwoImage from './images/image2.jpg';


const Shop = () => {
  return (
    <div className="shop-keyboards container mt-5">
      <div className="shop-content">
        <div className="filter">
          <h5>Filter</h5>
          <div className="filter-section">
            <h6>Type of Switch</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="switch1" />
              <label className="form-check-label" htmlFor="switch1">Linear</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="switch2" />
              <label className="form-check-label" htmlFor="switch2">Tactile</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="switch3" />
              <label className="form-check-label" htmlFor="switch3">Clicky</label>
            </div>
          </div>
          <div className="filter-section">
            <h6>Dimension</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension1" />
              <label className="form-check-label" htmlFor="dimension1">Full-size</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="dimension2" />
              <label className="form-check-label" htmlFor="dimension2">Tenkeyless</label>
            </div>
          </div>
          <div className="filter-section">
            <h6>Price</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="price1" />
              <label className="form-check-label" htmlFor="price1">Under $50</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="price2" />
              <label className="form-check-label" htmlFor="price2">$50 - $100</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="price3" />
              <label className="form-check-label" htmlFor="price3">Over $100</label>
            </div>
          </div>
        </div>
        <div className="product-cards">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="card1" key={index}>
              <img src={index % 2 === 0 ? keyboardOneImage : keyboardTwoImage} className="card-img-top" alt={`Keyboard ${index + 1}`} />
              <div className="card1-body">
                <h5 className="card1-title">{`Keyboard ${index + 1}`}</h5>
                <p className="card1-text">Description of keyboard {index + 1}.</p>
                <a href="/" className="btn btn-danger">Shop Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
