import { menuСloth } from "../../const";

type TCateoriesMenuProps = {
    activeLink: string;
    onClickLink: (value: string) => void;
};


function CateoriesMenu({ activeLink, onClickLink }: TCateoriesMenuProps) {

    return (
        <ul className="submenu">
            <h2>Категории</h2>
            {menuСloth.map((item, i) => (
                <li key={i} onClick={() => onClickLink(item)} className={activeLink === item ? "submenu-list active" : "submenu-list"}>{item}</li>
            ))}
        </ul>
    )
}

export default CateoriesMenu;