import { Fragment, useEffect, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import "./Search.scss"
import axios from "../../api"
import { useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

const Search = ({ setSearchBtn }) => {
    const [search, setSearch] = useState("")
    const [data, setData] = useState(null)
    let navigate = useNavigate()
    useEffect(() => {
        if (!search.trim()) return
        axios
            .get(`/products/search?q=${search.trim()}`)
            .then(res => {
                setData(res.data.products)
            })
            .catch(error => console.error(error))

    }, [search])
    const handelProduct = (id) => {
        navigate(`/single/${id}`)
        setSearch("")
    }
    const searchProducts = data?.map((product) => (
        <div onClick={() => handelProduct(product.id)} key={product.id} className="search__product-card">
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
        </div>
    ));

    return (
        <Fragment>
            <div className="search">
                <div className="search__overlay"></div>
                <button onClick={() => setSearchBtn(p => !p)} className="search__return-btn">
                    <IoIosArrowBack />
                </button>
                <div className="search-form">
                    <button type="button" className="search__btn">
                        <IoSearchOutline />
                    </button>
                    <div className="search__line"></div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Поиск" />
                    {search.trim() && (
                        <div className="search__product-cards">
                            {data && data.length > 0 ? (
                                searchProducts
                            ) : (
                                <span>Bu product topilmadi</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );

}

export default Search