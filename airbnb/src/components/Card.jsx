export default function Card() {
    return (
      <div className="card">
        <div>
          <img src="./images/katie-zaferes.png" className="card--image" />
          <div className="card--stats">
            <img src="../images/star.png" className="card--star" />
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
          </div>
          <p>Life Lessons with Katie Zaferes</p>
          <p>
            <span className="bold">From $136</span> / person
          </p>
        </div>
  
        <div>
          <img src="./images/old-bride.png" className="card--image" />
          <div className="card--stats2">
            <img src="../images/star.png" className="card--star" />
            <span>5.0</span>
            <span className="gray">(30) • </span>
            <span className="gray">USA</span>
          </div>
          <p>Learn wedding photography</p>
          <p>
            <span className="bold">From $125</span> / person
          </p>
        </div>
  
        <div>
          <img src="./images/bicycle.png" className="card--image" />
          <div className="card--stats3">
            <img src="../images/star.png" className="card--star" />
            <span>4.8</span>
            <span className="gray">(2) • </span>
            <span className="gray">USA</span>
          </div>
          <p>Group Mountain Biking</p>
          <p>
            <span className="bold">From $50</span> / person
          </p>
        </div>
      </div>
    );
  }
  