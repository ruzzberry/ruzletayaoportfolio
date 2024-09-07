"use client";
import styles from "./page.module.css";

import Image from "next/image";

const MyProfile = () => {
    return(
        <main className={styles.main}>
            <div className={styles.maincontainer}>
                <div className={styles.maincard}>
                    <div className={styles.namecard}>
                        <span className={styles.glowingText}> RUZLE</span>
                    </div>

                    <div className={styles.leftContent}>
                        Placeholder
                    </div>

                </div>
            </div>
        </main>
    );
}

export default MyProfile;