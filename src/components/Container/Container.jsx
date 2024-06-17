import React from "react";
import "./Container.styles.css"

export default class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container__img">
                    <img src="BannerBG.png" alt="Aluraflix Logo" />
                    <h1>Aluraflix</h1>
                </div>
            </div>
        );
    }
}