// import React, { useState, useEffect } from "react";
// import styles from './Animation.module.css';

// const Animation = ({ variant }) => {
//     const [fontSize, setFontSize] = useState(120);

//     useEffect(() => {
//         function handleResize() {
//         const width = window.innerWidth;
//         if (width < 480) setFontSize(60);
//         else if (width < 768) setFontSize(90);
//         else setFontSize(120);
//         }
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//     }, []);


//     return (
//         <section id='animation' className={`section section-${variant}`}>
//             <div className={styles.container}>
//                 <video
//                     className={styles.video}
//                     src="/videos/forestVideo.mp4"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                 />
//                 <svg
//                     className={styles.svg}
//                     viewBox="0 0 800 200"
//                     preserveAspectRatio="xMidYMid meet"
//                     aria-label="АЛХИМИЯ"
//                     role="img"
//                 >
//                     <defs>
//                         <clipPath id="text-clip">
//                             <text
//                                 x="50%"
//                                 y="50%"
//                                 dominantBaseline="middle"
//                                 textAnchor="middle"
//                                 fontFamily="Jura, sans-serif"
//                                 fontWeight="700"
//                                 fontSize={fontSize}
//                             >
//                                 АЛХИМИЯ
//                             </text>
//                         </clipPath>
//                     </defs>
//                     <rect width="800" height="200" clipPath="url(#text-clip)" fill="white" />
//                 </svg>
//             </div>
//         </section>
//     );
// };

// export default Animation;


import React, { useState, useEffect } from "react";
import styles from "./Animation.module.css";

const Animation = ({ variant }) => {
    const [fontSize, setFontSize] = useState(120);

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth;
        if (width < 480) setFontSize(90);
        else if (width < 768) setFontSize(100);
        else if (width < 1200) setFontSize(120);
        else setFontSize(140);
        };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="animation" className={`${styles.section} ${styles[`section-${variant}`]}`}>
            <div className={styles.container}>
                <video
                className={styles.video}
                src="/videos/forestVideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                />
                <svg
                className={styles.svg}
                viewBox="0 0 800 200"
                preserveAspectRatio="xMidYMid meet"
                aria-label="АЛХИМИЯ"
                role="img"
                >
                <defs>
                    <mask id="text-mask">
                    <rect width="100%" height="100%" fill="white" />
                    <text
                        x="50%"
                        y="50%"
                        // dominantBaseline="middle"
                        textAnchor="middle"
                        alignmentBaseline="middle"
                        dy='0.1em'
                        fontFamily="Cormorant Upright, sans-serif"
                        fontWeight="700"
                        fontSize={fontSize}
                        fill="black"
                    >
                        АЛХИМИЯ
                    </text>
                    </mask>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="#ebdcc7"
                    mask="url(#text-mask)"
                />
                </svg>
            </div>
        </section>
    );
};

export default Animation;