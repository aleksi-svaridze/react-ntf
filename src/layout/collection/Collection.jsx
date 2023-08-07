import CollectionCard from '../../components/collection-card/CollectionCard';
import {PrimaryHeading} from '../../components/headings/Headings'


import mainImage1 from '../../media/images/collection/image-big-1.svg'
import User1 from '../../media/images/collection/image-sm-1.svg'
import User2 from '../../media/images/collection/image-sm-2.svg'
import UserImage1 from '../../media/images/collection/user-1.svg'

import mainImage2 from '../../media/images/collection/image-big-2.svg'
import User3 from '../../media/images/collection/image-sm-3.svg'
import User4 from '../../media/images/collection/image-sm-4.svg'
import UserImage2 from '../../media/images/collection/user-2.svg'

import mainImage3 from '../../media/images/collection/image-big-3.svg'
import User5 from '../../media/images/collection/image-sm-5.svg'
import User6 from '../../media/images/collection/image-sm-6.svg'
import UserImage3 from '../../media/images/collection/user-3.svg'

const Collection = () => {
    return (
        <div className="container mt-5">
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