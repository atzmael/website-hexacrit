import { NavigationContext } from "@components/structure/context/NavigationProvider";
import { useContext } from "react";

import styles from "./styles.module.scss";

interface ButtonBurgerProps {
    iconColor?: "white" | "black";
}

const ButtonBurger = ({ iconColor = "white" }: ButtonBurgerProps) => {
    const { isMenuOpen } = useContext(NavigationContext);
    const { toggleMenu } = useContext(NavigationContext);

    return (
        <button
            className={`${styles['btn__menu-hamburger']} btn__menu-hamburger ${isMenuOpen ? styles['is-open'] : ""} ${isMenuOpen ? 'is-open' : 'is-close'}`}
            onClick={() => toggleMenu()}
        >
            <span className={styles.btn__label}>Menu</span>
            <span className={`${styles.btn__icon} ${styles[iconColor]} btn__icon`}></span>
        </button>
    );
};

export default ButtonBurger;