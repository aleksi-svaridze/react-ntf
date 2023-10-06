

const SearchForm = ({icon, placehoder}) => {
    return(
        <form className="search-form border border-black-secondary position-relative">
            <input type="text" placeholder={placehoder} className="search-form--input position-absolute bottom-0 top-0 start-0 end-0 bg-transparent" />
            <img src={icon} alt={placehoder} className="search-form--icon position-absolute top-50 translate-middle-y" />
        </form>
    )
}

export default SearchForm;