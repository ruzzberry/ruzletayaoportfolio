"use client";

import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import {Tooltip} from "@nextui-org/tooltip";
import { useState } from 'react';

{/*DATA FOR MY STACKS*/}
const techStacks = [
    { name: 'Bootstrap', image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
    { name: 'CSS', image: 'https://andrei-portfolio.vercel.app/pictures/assets/css.svg' },
    { name: 'Go', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/215px-Go_Logo_Blue.svg.png' },
    { name: 'HTML', image: '/icons/html.svg' },
    { name: 'Javascript', image: '/icons/javascript.svg' },
    { name: 'Next.js', image: '/icons/webdev/nextjs.svg' },
    { name: 'PHP', image: '/icons/php.svg' },
    { name: 'Python', image: '/icons/python.svg' },
    { name: 'React', image: '/icons/webdev/react.svg' },
    { name: 'Rest API', image: '/icons/webdev/restapi.svg' },
    { name: 'SASS', image: '/icons/webdev/sass.svg' },
    { name: 'Typescript', image: '/icons/webdev/ts.svg' }
];

const webStacks = [
    { name: 'CSS', image: 'https://andrei-portfolio.vercel.app/pictures/assets/css.svg' },
    { name: 'HTML', image: '/icons/html.svg' },
    { name: 'Material UI', image: '/icons/webdev/mui.svg' },
    { name: 'Next.js', image: '/icons/webdev/nextjs.svg' },
    { name: 'React', image: '/icons/webdev/react.svg' },
    { name: 'SASS', image: '/icons/webdev/sass.svg' },
];

const toolStacks = [
    { name: 'Bitbucket', image: '/icons/tools/bitbucket.svg' },
    { name: 'Git', image: '/icons/tools/git.svg' },
    { name: 'Jira', image: '/icons/webdev/ts.svg' },
    { name: 'Lighthouse', image: '/icons/tools/lighthouse.svg' },
    { name: 'Postman', image: '/icons/tools/postman.svg' },
    { name: 'PyCharm', image: '/icons/tools/pycharm.svg' },
    { name: 'Selenium', image: '/icons/tools/selenium.svg' },
    { name: 'Unity', image: '/icons/tools/unity.svg' },
    //{ name: '', image: '/icons/tools/.svg' },
];

{/*FOR TITLE HEADER OF STACKS*/}
const progLang = [
    {name:'PROGRAMMING LANGUAGE'},
]

const webDev = [
    {name:'WEB DEVELOPMENT'},
]

const usedTools = [
    {name:'TOOLS'},
]

const TechStack = () => {

    {/* FOR SWITCHING BETWEEN GROUP STACK NAMES */}
    const [currentName, setCurrentName] = useState(progLang);
    const [currentGroupName, setCurrentGroupName] = useState(0);
    
    const handleNextGroupName = () => {
        let nextGroupName;
        
        if (currentGroupName === 0) {
            nextGroupName = 1;
            setCurrentName(webDev);
        } 
        else if (currentGroupName === 1) {
            nextGroupName = 2;
            setCurrentName(usedTools);
        } 
        else {
            nextGroupName = 0;
            setCurrentName(progLang);
        }
    
        setCurrentGroupName(nextGroupName);
    };


    {/* FOR SWITCHING BETWEEN STACKS */}
    const [currentStacks, setCurrentStacks] = useState(techStacks);
    const [currentGroup, setCurrentGroup] = useState(0);

    const handleNextGroup = () => {
        let nextGroup;
        if (currentGroup === 0) {
            nextGroup = 1;
            setCurrentStacks(webStacks);
        } 
        
        else if (currentGroup === 1) {
            nextGroup = 2;
            setCurrentStacks(toolStacks);
        } 
        
        else {
            nextGroup = 0;
            setCurrentStacks(techStacks);
        }
        setCurrentGroup(nextGroup);
    };

    {/* FOR LEFT & RIGHT ARROW */}
    const handleBothClicks = () => {
        handleNextGroup();
        handleNextGroupName();
    };

{/* START OF THE COMPONENT */}
return (
    
    <main className={styles.main}>
        <div className={styles.header}>
            <div>
                <h1>
                    {currentName.map((stack, index) => (
                        <div key={index} className={styles.stackNames}>
                            {stack.name}
                        </div>
                    ))}
                </h1>
            </div>
            

            <div className={styles.stackContainer}>  
                <div className={styles.arrowLeft} onClick={handleBothClicks}>
                    &#9664; {/* Left Arrow */}
                </div>

                <div className={styles.stackdivs}>
                    {currentStacks.map(stack => (
                        <div key={stack.name} className={styles.iconandname}>
                            <Tooltip content={stack.name} className={styles.tooltip}>
                                <img src={stack.image} alt={stack.name} />
                            </Tooltip>
                        </div>
                    ))}
                </div>

                <div className={styles.arrowRight} onClick={handleBothClicks}>
                    &#9654; {/* Right Arrow */}
                </div>
            </div>
        </div>
    </main>
  );
}
export default TechStack;