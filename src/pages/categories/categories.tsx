import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { menuСloth } from "../../const";

function Categories() {
    return (
        <>
            <Helmet>
                <title>Crocha - Категории товаров</title>
            </Helmet>
            <div className="container">
                <div className="categories">
                    <ul className="submenu">
                        <h2>Категории</h2>
                        {menuСloth.map((link) => (
                            <li className="submenu-list"><Link to="/categories">{link}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories;