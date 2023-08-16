import CategoriesCard from "../../components/categories-card/CategoriesCard";
import { PrimaryHeading } from "../../components/headings/Headings";


const Categories = () => {
    return (
        <div className="container py-5">
            <PrimaryHeading heading='Browse Categories'/>

            <div className="row">
                <div className="col-6 col-lg-4 col-xl-3">
                    <CategoriesCard />
                </div>
            </div>
        </div>
    )
}

export default Categories;