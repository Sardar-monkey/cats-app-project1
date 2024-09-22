import { Link } from "react-router-dom"
import HomeIcon from "../assets/images/icons/Home.svg"
import LoadingCategories from "../components/LoadingCategories";
import { useState, useEffect } from "react";
import axios from "axios";
import Error from "../components/Error";

function AllCategoriesPage() {

    const [isLoading, setisLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try{
                setisLoading(true);
                const response = await axios.get(`https://07cdb112c40c36ce.mokky.dev/categories`);
                setCategories(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setisLoading(false);
            }
        }

        fetchCategories();
    }, []);

    if (isError) {
        return <Error/>;
    }

    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-pink">
                <strong>Весь контент</strong>  
            </div>

            {isLoading ? (<LoadingCategories />) : (

            <div class="container">            
                <div class="category-row">

                    <Link to="/" class="category-item is-crazycat">
                        <span class="category-item-txt">Всякое</span>
                        <img src={HomeIcon} alt="All content" class="category-item-image" />
                    </Link>
                    {categories.map((category) => (

                        <Link style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${category.backimage})`, backgroundSize:'cover', backgroundPosition:'center',}} alt="" to={`/cats/${category.id}`} class="category-item is-all">
                            <span class="category-item-txt">{`${category.name}`}</span>
                            <img src={`${category.iconUrl}`} alt={`${category.name}`} class="category-item-image is-special" />
                        </Link>

                    ))}

                </div>
            </div>

            )}

        </section>

    );
}

export default AllCategoriesPage;