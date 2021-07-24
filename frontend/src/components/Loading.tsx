import { AnimatePresence, motion } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";
import "./Loading.scss";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
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
                    <h1 className="loading-progress">Generated</h1>
                </div>
            </motion.div>
        </>
    );
};
