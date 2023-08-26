import CollectionCard from '../../components/collection-card/CollectionCard';
import {PrimaryHeading} from '../../components/headings/Headings'


import mainImage1 from '../../media/images/collection/image-big-1.png'
import User1 from '../../media/images/collection/image-sm-1.png'
import User2 from '../../media/images/collection/image-sm-2.png'
import UserImage1 from '../../media/images/collection/user_1.png'

import mainImage2 from '../../media/images/collection/image-big-2.png'
import User3 from '../../media/images/collection/image-sm-3.png'
import User4 from '../../media/images/collection/image-sm-4.png'
import UserImage2 from '../../media/images/collection/user_2.png'

import mainImage3 from '../../media/images/collection/image-big-3.png'
import User5 from '../../media/images/collection/image-sm-5.png'
import User6 from '../../media/images/collection/image-sm-6.png'
import UserImage3 from '../../media/images/collection/user_3.png'

const Collection = () => {
    return (
        <div className="container mt-4 pt-3 pt-lg-0 mt-lg-5">
            <PrimaryHeading 
                heading='Trending Collection' 
                desc='Checkout our weekly updated trending collection.'
            />

            <div className="row py-5 my-3">
                <div className="col-12 col-lg-6 col-xl-4">
                    <CollectionCard 
                        mainImage={mainImage1}
                        shortcat1={User1}
                        shortcat2={User2}
                        num='1025'
                        userImage={UserImage1}
                        content='MrFox'
                        categories='DSGN Animals' />
                </div>
                <div className="d-none d-lg-block col-lg-6 col-xl-4">
                    <CollectionCard 
                        mainImage={mainImage2}
                        shortcat1={User3}
                        shortcat2={User4}
                        num='1025'
                        userImage={UserImage2}
                        content='Shroomie'
                        categories='Magic Mushrooms' />
                </div>
                <div className="d-none d-xl-block col-lg-6 col-xl-4">
                    <CollectionCard 
                        mainImage={mainImage3}
                        shortcat1={User5}
                        shortcat2={User6}
                        num='1025'
                        userImage={UserImage3}
                        content='BeKind2Robots'
                        categories='Disco Machines' />
                </div>
            </div>
        </div>
    )
}

export default Collection;