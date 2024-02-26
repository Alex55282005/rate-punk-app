import { FC } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg"
import Link from 'next/link'
import styles from "@/styles/MainPage.module.scss";

const Header: FC = () => {
    return <header className={`${styles.container} ${styles.header}`}>
        <div className={styles.appContainer}>
            <Image src={Logo} alt="" width={125} height={32}/> 
            <nav>
                <Link href="#">Chrome Extension</Link>
                <Link href="#">Price Comparsion</Link>
                <Link href="#">Blog</Link>
            </nav>  
        </div>
    </header>
}

export default Header;