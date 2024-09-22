import CatsCardList from "../components/CatsCardList";

function AllSortsOfThings() {
    return(
        <section class="mobile-block">
            
            <div class="mobile-block__header is-tame">
                <strong>Всякое</strong>  
            </div>

            <div className="all-cats__block">
                <CatsCardList/>
            </div>
            
        </section>
    );
}

export default AllSortsOfThings;