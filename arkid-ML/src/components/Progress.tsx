import { Steps } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Progress.scss";
import { Link, Redirect, useLocation, useHistory } from "react-router-dom";
const { Step } = Steps;

interface ProgressProps {
    isDone: boolean;
}

export const Progress: React.FC<ProgressProps> = ({
    isDone,
}: ProgressProps) => {
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
                if (isDone) {
                    setstep(3);
                    break;
                } else {
                    setstep(2);
                    break;
                }
            default:
                setstep(-1);
                break;
        }
        return () => {};
    }, [location, isDone]);
    const goTo = (to: string) => {
        console.log(to);
        history.push(to);
    };
    return (
        <>
            {step !== -1 && (
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
                        // onClick={() => goTo("/changetexture")}
                        // onClick={() => goTo("/")}
                        // style={{ cursor: "pointer" }}
                    />
                </Steps>
            )}
        </>
    );
};
