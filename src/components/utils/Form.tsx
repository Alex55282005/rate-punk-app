import { FC } from "react";
import styles from "@/styles/MainPage.module.scss";
import Image from "next/image";
import EmailImg from "@/assets/email.svg";
import SuccessImg from "@/assets/success.svg";
import { useState } from "react";
import { statSync } from "fs";
import axios from "axios";


type PostUserData = {
    id: number,
    email: string
}

const MainForm: FC = () => {
    const [emailState, setEmail] = useState(false);
    const [Complited, setComplited] = useState(false);
    const [pathValue, setPathValue] = useState<string>('Initial Value');

    async function chekValue() {
        setEmail(false);
        setComplited(false)
        const emailInput = document.querySelector("#email") as HTMLInputElement;
        const emailValue : string = emailInput.value;        
        if (emailValue !== "" && emailValue !== " ") {
           let isGapPresent : boolean = emailValue.includes(" ");
           isGapPresent? setEmail(true) : null;
           !isGapPresent ? postEmail({id: 0, email: emailValue}): null; 
        }else{
            setEmail(true);
        }
    }
    
    async function postEmail(userData : PostUserData) {
        setEmail(false);
        createUser(userData)
    }

    async function createUser(userData: PostUserData) {
        try {
          const { data, status } = await axios.post<PostUserData>(
            'https://65dcd892e7edadead7ecfb6e.mockapi.io/emails',
            userData,
            {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            },
          );
          status >= 200 && status<= 204 ? setComplited(true) : null;
          console.log(data)
          return data;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return error.message;
          } else {
            return 'An unexpected error occurred';
          }
        }
      }
      function copyToClipboard() {
        const path  = document.querySelector("#path") as HTMLInputElement;
        const pathLink : string = path.value;        
        navigator.clipboard.writeText(pathLink)
        alert("The link was copied to clipboard");
      }

    return <section className={styles.formSection}>
        <div>
            <div>
                <h1 className={`${styles.uppertext} ${styles.formTitle}`}>refer friends and get rewards</h1>
            </div>
            <div className={`${styles.notoSansFont} ${styles.formText}`}>
                Refer your friends to us and earn hotel <br /> booking vouchers.
                We'll give you 1 coin for <br /> each friend that installs our extension. <br />
                Minimum cash-out at 20 coins.
            </div>
            <form>
                <p id="status" className={emailState === true? styles.statusTrue : styles.statusFalse}>Error state</p>
                <div id="comlited" className={Complited === true? styles.comlitedTrue : styles.complitedFalse}>
                    <Image src={SuccessImg} alt="SuccessImg" width={32} height={32} />
                    <p>Your email is confirmed!</p>
                </div>
                <div className={Complited? styles.inputBlockDis:styles.inputBlock}>
                    <Image src={EmailImg} alt="EmailImg" width={22} height={18}/>
                    <input type="email" id="email" required placeholder="Enter your email address"/>
                </div>
                <button type="button" className={Complited? styles.inputBlockDis: ""} onClick={chekValue}>Get Referral Link</button>
            </form>
            <div className={Complited? styles.copyLinkContEn :styles.copyLinkContDis}>
              <div>
                <input type="text" id="path" readOnly value="https://ratepunk/referal"/>
              </div>
              <button onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
        <p>Limits on max rewards apply.</p>
    </section>
}

export default MainForm;