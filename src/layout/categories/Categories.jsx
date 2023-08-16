import CategoriesCard from "../../components/categories-card/CategoriesCard";
import { PrimaryHeading } from "../../components/headings/Headings";

import artImage from '../../media/images/categories/cat-art.svg';
import brushIcon from '../../media/images/categories/brush_icon.svg';

import swatchesIcon from '../../media/images/categories/swatches_icon.svg';
import collectiblesImage from '../../media/images/categories/collectibles.png';

import musicNotesIcon from '../../media/images/categories/MusicNotes.svg';
import musicImage from '../../media/images/categories/music.svg';

import cameraIcon from '../../media/images/categories/Camera.svg';
import cameraImage from '../../media/images/categories/photography.svg';

import videoIcon from '../../media/images/categories/VideoCamera.svg';
import videoImage from '../../media/images/categories/videoImage.svg';

import utilityIcon from '../../media/images/categories/MagicWand.svg';
import utilityImage from '../../media/images/categories/utilityImage.svg';

import ballIcon from '../../media/images/categories/Basketball.svg';
import sportImage from '../../media/images/categories/sportImage.svg';

import planetIcon from '../../media/images/categories/Planet.svg';
import worldsImage from '../../media/images/categories/worlds.svg';


const Categories = () => {
    const categories = [
        {id: 1, image: artImage, icon: brushIcon, text: 'art'},
        {id: 2, image: collectiblesImage, icon: swatchesIcon, text: 'Collectibles'},
        {id: 3, image: musicImage, icon: musicNotesIcon, text: 'Music'},
        {id: 4, image: cameraImage, icon: cameraIcon, text: 'Photography'},
        {id: 5, image: videoImage, icon: videoIcon, text: 'Video'},
        {id: 6, image: utilityImage, icon: utilityIcon, text: 'Utility'},
        {id: 7, image: sportImage, icon: ballIcon, text: 'Sport'},
        {id: 8, image: worldsImage, icon: planetIcon, text: 'Virtual Worlds'},
    ]
    return (
        <div className="container py-4 mt-5">
            <PrimaryHeading heading='Browse Categories'/>

            <div className="row g-3 g-lg-4 py-4 my-1 py-lg-5 my-lg-2">
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