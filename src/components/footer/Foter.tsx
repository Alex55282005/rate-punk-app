import { FC } from "react";
import styles from "@/styles/MainPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import EmailFoot from "@/assets/email-footer.svg";
import Instagram from "@/assets/instagram.svg";
import Facebook from "@/assets/facebook.svg";
import Linkedin from "@/assets/linkedin.svg";
import Twitter from "@/assets/twitter.svg";
import Tiktok from "@/assets/tiktok.svg";


const Footer: FC = () => {
    return <div className={`${styles.container} ${styles.footer}`}>
        <div className={styles.appContainer}>
            <div className={styles.footerCont}>
                <section>
                    <div>
                        <Image src={Logo} alt="Logo" width={125} height={32}/>
                        <p>
                            Ratepunk compares hotel room prices across the major 
                            online travel agencies. When you search for a room, 
                            Ratepunk extension scans the top booking sites and 
                            runs a price comparison, so you can be confident in 
                            knowing you’re getting the best deal!
                        </p>
                        
                    </div>
                    <p>© 2021 Ratepunk. All Rights Reserved.</p>
                </section>
                <section>
                    <h2>QUICK LINKS</h2>
                    <div>
                        <div>
                            <Link href="#">Price Comparison</Link>
                        </div>
                        <div>
                            <Link href="#">Chrome Extension</Link>
                        </div>
                        <div>
                            <Link href="#">How It Works</Link>
                        </div>
                        <div>
                            <Link href="#">Ratepunk Blog</Link>
                        </div>
                        <div>
                            <Link href="#">Privacy Policy</Link>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h2>CONTACT</h2>
                        <div>
                            <Image src={EmailFoot} alt="EmailFoot" width={17} height={13} />
                            <Link href="#" className={styles.mailLink}>hi@ratepunk.com</Link>
                        </div>
                    </div>
                    <div>
                        <h2>SOCIAL</h2>
                        <div className={styles.spriteCont}>
                            <div className={styles.spriteBlock}>
                                <Image src={Instagram} alt="Instagram" width={20} height={20} />
                            </div>

                            <div className={styles.spriteBlock}>
                                <Image src={Facebook} alt="Facebook" width={20} height={20} />
                            </div>

                            <div className={styles.spriteBlock}>
                                <Image src={Linkedin} alt="Linkedin" width={20} height={20} />
                            </div>

                            <div className={styles.spriteBlock}>
                                <Image src={Twitter} alt="Twitter" width={20} height={20} />
                            </div>

                            <div className={styles.spriteBlock}>
                                <Image src={Tiktok} alt="Tiktok" width={20} height={20} />
                            </div>

                        </div>
                    </div>
                </section>
                <p className={styles.lastP}>© 2021 Ratepunk. All Rights Reserved.</p>
            </div>
        </div>
    </div>
}

export default Footer;