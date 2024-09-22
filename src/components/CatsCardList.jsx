import { useEffect, useState } from "react";
import CatsCard from "./CatsCard";
import axios from "axios";
import LoadingCards from "./LoadingCards";
import Error from "./Error";

function CatsCardList() {

    const [cards, setCards] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCards() {
            try {
                setisLoading(true);
                const response = await axios.get(`https://07cdb112c40c36ce.mokky.dev/card`);
                setCards(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setisLoading(false);
            }
        }
        fetchCards();
    }, []);

    if (isError) {
        return <Error/>;
    }

    return(
        <div class="all-cats__block">

                {isLoading ? (<LoadingCards/>) :(

                <>
                {cards.map((card) => (<CatsCard key={card.id} card={card} />))}
                </>
                    
                )}
           
        </div>
    );
}

export default CatsCardList;