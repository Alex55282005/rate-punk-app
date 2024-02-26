import { FC } from "react";
import Image from "next/image";
import AppleImg from "@/assets/apple.svg";
import ChromeImg from "@/assets/chrome.svg";
import StarImg from "@/assets/star.svg"
import styles from "@/styles/MainPage.module.scss";
import Stars from "../utils/Stars";
import Link from "next/link";

const UpperFooter: FC = () => {

    const rating = [
        {
            id: 0,
            number: 1
        },
        {
            id: 1,
            number: 2
        },
        {
            id: 2,
            number: 3
        },
        {
            id: 3,
            number: 4
        },
        {
            id: 4,
            number: 5
        }
    ];

    return <div className={`${styles.container} ${styles.upperFooter}`}>
        <div className={styles.appContainer}>
            <div className={styles.upperCont}>
            <Link href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
                <div className={styles.storeBlock}>
                    <Image src={AppleImg} alt="AppleImg" width={65} height={57}/>
                    <div>
                        <p>available in the</p>
                        <p>chrome web store</p>
                    </div>
                </div>
           </Link>

            <Link href="https://apps.apple.com/app/ratepunk/id1607823726">
                <div className={styles.storeBlock}>
                    <Image src={ChromeImg} alt="ChromeImg" width={65} height={58}/>
                    <div>
                        <p>available in the</p>
                        <p>apple app store</p>
                    </div>
                </div>
            </Link>
            

            <div className={styles.starBlockCont}>
                <div className={styles.starRateCont}>
                    <Stars/>
                </div>
                <p>Chrome Store reviews</p>
            </div>
            </div>
           
        </div>
    </div>
}

export default UpperFooter;