import { FC } from "react";
import styles from "@/styles/MainPage.module.scss";
import menuStyles from "@/components/menu/Menu.module.scss";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import menuImg from "@/assets/menu.svg";
import closeImg from "@/assets/close.svg";
import Link from "next/link";
 

const Menu: FC = () => {

    const [isOpened, setOpenMenu] = useState(false);

    function openMenu(e:any) {
        isOpened? setOpenMenu(false): setOpenMenu(true);
        const img =  e.target;
        isOpened? img.src = closeImg : img.src = menuImg;
    }

    return <div className={`${styles.container} ${styles.head}`}>
        <div className={menuStyles.mainCont}>
            <div className={menuStyles.logoCont}>
                <Image src={logo} alt="logo" width={130}/>
                <Image src={isOpened? closeImg : menuImg} alt="" width={30} onClick={openMenu} />
            </div>
            <div id="dropMenu" className={isOpened? menuStyles.linkCont : menuStyles.linkContDis}>
                <div className={menuStyles.links}>
                    <Link href="#">Chrome Extension</Link>
                </div>
                <div className={menuStyles.links}>
                    <Link href="#">Price Comparison</Link>
                </div>
                <div className={menuStyles.links}>
                    <Link href="#">Blog</Link>
                </div>
            </div>
        </div>
    </div>
}

export default Menu;