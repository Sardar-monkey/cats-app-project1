import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingCards from "../components/LoadingCards";
import axios from "axios";
import CatsCard from "../components/CatsCard";
import Error from "../components/Error";

function CatTypesPage() {

    const [cards, setCards] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const {id} = useParams();
    const [category, setCategory ] = useState({});
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        async function fetchCategory() {
            try {
                const response = await axios.get(`https://07cdb112c40c36ce.mokky.dev/categories/${id}`);
                setCategory(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error)
            }
        }

        async function fetchCards() {
            try {
                setisLoading(true);
                const response = await axios.get(`https://07cdb112c40c36ce.mokky.dev/card`);
                setCards(response.data);
            } catch(error) {
                console.log(error);
                setIsError(true);
            } finally {
                setisLoading(false);
            }
        }
        fetchCategory();
        fetchCards();
    }, [id]);    

    if (isError) {
        return <Error/>;
    }

    return(
        <section class="mobile-block">
            
            <div class="mobile-block__header is-light_green">
                <strong>{category.name}</strong>  
            </div>

            <div className="all-cats__block">

                
                {isLoading ? (<LoadingCards/>) :(
                <>
                {cards.map((card) => {return card.category === category.name ? (<CatsCard key={card.id} card={card} />) : null})}
                </>                   
                )}
           

            </div>
            
        </section>
    );
}

export default CatTypesPage;