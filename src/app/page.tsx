import Image from "next/image";
import styles from "./page.module.css";
import formalpic from "src/img/formalpic.jpg"
import Link from "next/link";
import GroupList from "./group/page";
import React from 'react';
import Head from 'next/head';
import TechStack from "./mystacks/page";


export default function Home() {

  return (
    <>
    <main className={styles.main}>
      <title>
        Ruzle's Portfolio
      </title>
      <div className={styles.descriptiontext}>
        
        <div className={styles.descdiv}>
          <h1 style={{fontSize:'3rem', color:'white'}}>
            Hi! I'm Ruzle!
          </h1>
          <p className={styles.mydescription}>I’m a versatile software engineer specializing in web development and a software QA. Through hands-on experience and project work, I’ve developed a unique blend of coding and testing expertise, allowing me to deliver robust, high-quality solutions.        <br></br>
            <button className={styles.downloadCV}> <a href="/files/Tayao_RuzleJhon_Resume.pdf" download="Tayao_RuzleJhon_Resume.pdf" className={styles.downloadtext}> DOWNLOAD CV</a></button>
          </p>
          
        </div>
        <Image src="/formalpic.jpg" className={styles.mypicture}
        width={300}
        height={300}
        alt="Ruzle Jhon">
        </Image>
      </div>

      <div className={styles.cuteborders}>
        <p></p> 
      </div>

      <div className={styles.technicalSkills}>
        <TechStack/> 
      </div>

      <div className={styles.cuteborders}>
        <p></p> 
      </div>
      
      <div className={styles.myProfileDiv}>
        <p style={{color:'white', paddingTop:'5rem', alignItems:'center',}}>
          Below this webpage is still a work in progres... more part is on it's way.
        </p>
      </div>
    </main>
    </>
  );
}
