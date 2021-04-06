import React, { useLayoutEffect, useState } from "react";
import "./Loading.scss";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => {
    return (
        <>
            <div className="loading-container">
                <div className="boxes">
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
                    </div>
                </div>
                <h1>Generating</h1>
            </div>
        </>
    );
};
