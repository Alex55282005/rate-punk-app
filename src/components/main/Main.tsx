import { FC } from "react";
import Image from "next/image";
import CollectImg from "@/assets/collect-coins.svg";
import VoucherImg from "@/assets/voucher.svg";
import InviteImg from "@/assets/invite.svg";
import styles from "@/styles/MainPage.module.scss";
import Form from "@/components/utils/Form"


const MainPart: FC = () => {


    return <div className={`${styles.container} ${styles.main}`}>
        <div className={styles.appContainer}>
            <Form/>
            <section className={styles.stepSection}>
                <div>
                    <section>
                        <Image src={InviteImg} alt="Invite" width={120} height={120}/>
                    </section>
                    <div>
                        <p className={styles.stepTitle}>STEP 1</p>
                        <h2 className={styles.uppertext}>Invite friends</h2>
                        <p className={styles.stepText}>Refer friends with your <br /> unique referral link.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <p className={styles.stepTitle}>STEP 2</p>
                        <h2 className={styles.uppertext}>COLLECT COINS</h2>
                        <p className={styles.stepText}>Get 1 coin for each friend <br /> that installs our extension <br /> using your referral link.</p>
                    </div>
                    <section>
                        <Image src={CollectImg} alt="Collect" width={120} height={120}/>
                    </section>
                </div>

                <div>
                    <section>
                        <Image src={VoucherImg} alt="Voucher" width={127} height={95}/>
                    </section>
                    <div>
                        <p className={styles.stepTitle}>STEP 3</p>
                        <h2 className={styles.uppertext}>GET VOUCHER</h2>
                        <p className={styles.stepText}>Redeem for a $20 hotel <br /> booking voucher once you <br /> collect 20 coins.</p>
                    </div>
                </div>

            </section>
        </div>
    </div>

}

export default MainPart;