"use client";
import styles from "./page.module.css";

import Image from "next/image";

const MyProfile = () => {
    return(
        <main className={styles.main}>
            <div>
                <span className={styles.glowingText}> Ruzle</span>
            </div>
        </main>
    );
}

export default MyProfile;