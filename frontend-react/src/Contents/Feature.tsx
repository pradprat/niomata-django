import React, { useLayoutEffect, useState } from "react";
import logo from "../assets/images/logo/niomata_logo_black1.png";
interface FeatureProps {}

export const Feature: React.FC<FeatureProps> = () => {
  useLayoutEffect(() => {
    return () => {};
  }, []);
  return (
    <section className="h5-feature s-padding bg-img bg-4" id="feature">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="icon-box style-centered">
              <div className="icon-box-icon">
                <i
                  className="fa fa-recycle fa-1x"
                  data-wow-duration=".65s"
                  data-wow-delay=".1s"
                ></i>
              </div>
              <div className="icon-box-details">
                <h3 className="icon-box-title">Design Combination</h3>
                <p>
                  Magna exercitation! Dolor accumsan sapiente, curabitur
                  voluptate minim quidem placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="icon-box style-centered">
              <div
                className="icon-box-icon"
                data-wow-duration=".65s"
                data-wow-delay=".1s"
              >
                <i className="fa fa-random fa-1x"></i>
              </div>
              <div className="icon-box-details">
                <h3 className="icon-box-title">Generate Image</h3>
                <p>
                  Magna exercitation! Dolor accumsan sapiente, curabitur
                  voluptate minim quidem placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
