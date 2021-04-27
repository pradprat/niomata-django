import { Steps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Progress.scss";
import { Link, Redirect, useLocation, useHistory } from "react-router-dom";
const { Step } = Steps;

interface ProgressProps {}

export const Progress: React.FC<ProgressProps> = ({}: ProgressProps) => {
    const location = useLocation();
    const history = useHistory();
    const [step, setstep] = useState(0);
    useEffect(() => {
        switch (location.pathname.replace("/", "")) {
            case "generateimage":
                setstep(0);
                break;
            case "changeStyle":
                setstep(1);
                break;
            case "changetexture":
                setstep(2);
                break;
            default:
                setstep(0);
                break;
        }
        return () => {};
    }, [location]);
    const goTo = (to: string) => {
        console.log(to);
        history.push(to);
    };
    return (
        <>
            <Steps current={step} progressDot type="default">
                <Step
                    title="Choose Product"
                    onClick={() => goTo("/generateimage")}
                    style={{ cursor: "pointer" }}
                />
                <Step
                    title="Customize"
                    onClick={() => goTo("/changeStyle")}
                    style={{ cursor: "pointer" }}
                />
                <Step
                    title="Set Texture"
                    onClick={() => goTo("/changetexture")}
                    style={{ cursor: "pointer" }}
                />
                <Step
                    title="Share Your Creation"
                    onClick={() => goTo("/")}
                    style={{ cursor: "pointer" }}
                />
            </Steps>
        </>
    );
};
