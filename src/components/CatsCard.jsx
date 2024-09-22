import { Link } from "react-router-dom";

function CatsCard({card}) {
    return(
        <Link style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${card.backimage})`, backgroundSize:'cover', backgroundPosition:'center'}} to={`/cat/info/${card.id}`} class="cats-card">
            <div class="container">
                <h1 class="cats-card__title">{card.title}</h1>
                <span class="cats-card__category">{card.category}</span>
            </div>
        </Link>       
    );
}

export default CatsCard;