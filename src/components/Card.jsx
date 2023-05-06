import logo from '../logo.svg';
import '../styles/card.css';
import { Link } from 'react-router-dom';



const Card = (curElem) => {
    const { id, type, language, name } = curElem.show;
    const imgURL = curElem.show.image ? curElem.show.image.medium : logo;
    return (<>
        <div className="card">
            <div className="card_image">
                <img src={imgURL} alt={name} width="260px" height="200px" />
            </div>
            <div className="card_data">
                <h2>{name.substring(0, 18)}</h2>
                <p><b>Type:</b> {type}</p>
                <p><b>Language:</b> {language}</p>
                <Link to={`/shows/${id}`}>
                    <button>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    </>)
};

export default Card;