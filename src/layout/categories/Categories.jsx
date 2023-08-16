import CategoriesCard from "../../components/categories-card/CategoriesCard";
import { PrimaryHeading } from "../../components/headings/Headings";

import artImage from '../../media/images/categories/cat-art.svg';
import brushIcon from '../../media/images/categories/brush_icon.svg';

import swatchesIcon from '../../media/images/categories/swatches_icon.svg';

import musicNotesIcon from '../../media/images/categories/MusicNotes.svg';

import cameraIcon from '../../media/images/categories/Camera.svg';

import videoIcon from '../../media/images/categories/VideoCamera.svg';

import utilityIcon from '../../media/images/categories/MagicWand.svg';

import ballIcon from '../../media/images/categories/Basketball.svg';

import planetIcon from '../../media/images/categories/Planet.svg';


const Categories = () => {
    const categories = [
        {id: 1, image: artImage, icon: brushIcon, text: 'art'},
        {id: 2, image: artImage, icon: swatchesIcon, text: 'Collectibles'},
        {id: 3, image: artImage, icon: musicNotesIcon, text: 'Music'},
        {id: 4, image: artImage, icon: cameraIcon, text: 'Photography'},
        {id: 5, image: artImage, icon: videoIcon, text: 'Video'},
        {id: 6, image: artImage, icon: utilityIcon, text: 'Utility'},
        {id: 7, image: artImage, icon: ballIcon, text: 'Sport'},
        {id: 8, image: artImage, icon: planetIcon, text: 'Virtual Worlds'},
    ]
    return (
        <div className="container py-4 mt-5">
            <PrimaryHeading heading='Browse Categories'/>

            <div className="row g-4 py-4 my-1 py-lg-5 my-lg-2">
                {categories.map(item => (
                        <CategoriesCard 
                        id={item.id} 
                        image={item.image} 
                        icon={item.icon}
                        text={item.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default Categories;