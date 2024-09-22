import { useEffect, useState } from "react";
import Backbutton from "../assets/images/backbutton.svg"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import LoadingDescription from "../components/LoadingDescription";
import Error from "../components/Error";

function CatDescription() {
    const [isError, setIsError] = useState(false);
    const {id} = useParams();
    const [card, setCard] = useState({});
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        async function fetchCard() {
            try{
                setisLoading(true);
                const response = await axios.get(`https://07cdb112c40c36ce.mokky.dev/card/${id}`);
                setCard(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setisLoading(false);
            }
        }

        fetchCard();
    }, [id]);

    if (isError) {
        return <Error/>;
    }

    return(
        <section class="mobile-block">

            <Link to ="/" class="back-btn">
                <div class="container">
                    <img src={Backbutton} alt="Back button"/>
                    Back                
                </div>
            </Link>

                {isLoading ? (<LoadingDescription />) : (

                <div class="container">
                    <div class="cat-description-block">      
                        <h3 class="cats-card__title">{card.title}</h3>
                        <span class="cats-card__category is-description"><strong>{card.category}</strong></span>
                        <p class="cats-description">{card.description}</p>
                        <img src={card.ImageUrl} alt={card.title} />
                        <span class="author"><strong>Источник :</strong><span className="green-txt"><strong> {card.Author}</strong></span></span>
                    </div>
                </div>

                )}

        </section>
    );
}

export default CatDescription;