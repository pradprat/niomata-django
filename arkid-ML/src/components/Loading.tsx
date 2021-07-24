import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Loading.scss";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
    const [numGenerated, setnumGenerated] = useState(0);
    const [loading, setloading] = useState(true);
    let interval = null as any;
    useEffect(() => {
        interval = setInterval(() => {
            setnumGenerated(numGenerated + 1);
        }, 20);
        return () => {
            clearInterval(interval);
        };
    }, [numGenerated]);
    return (
        <>
            <motion.div className="loading-container">
                {/* <div className="boxes">
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="box">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> */}
                {/* </div> */}
                <div className="loading-text-container">
                    <h1 className="loading-text">Generating Magic</h1>
                    <h1 className="loading-progress">
                        {numGenerated}/200 Generated
                    </h1>
                </div>
            </motion.div>
        </>
    );
};
