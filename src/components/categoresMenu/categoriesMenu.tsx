import { menuСloth } from "../../const";

type TCateoriesMenuProps = {
    activeLink: string;
    onClickLink: (e: string) => string,
};


function CateoriesMenu({ activeLink, onClickLink }: TCateoriesMenuProps) {

    return (
        <ul className="submenu">
            <h2>Категории</h2>
            {menuСloth.map((item, i) => (
                <li key={i} onClick={(e) => onClickLink(e.target.innerText)} className={activeLink === item ? "submenu-list active" : "submenu-list"}>{item}</li>
            ))}
        </ul>
    )
}

export default CateoriesMenu;