import user1 from '../../media/images/components/users/user_1.svg'

const User = () => {
    return (
        <div className='user'>
            <img src={user1} alt="" className='user__img rounded-circle' />
            <span className='user__name'>Animakid</span>
        </div>
    )
}

export default User;