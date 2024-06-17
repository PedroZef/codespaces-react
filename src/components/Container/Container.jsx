import React from "react";
import "./Container.styles.css"

export default class Container extends React.Component {
    constructor() {
        super()
         {
        

        }
    }

    render() {
        return (
            <section className="container">
                <div className="container__img">
                    <img src="img/BannerBG.png" alt="Aluraflix Logo" />
                </div>
                <div className="container__content">

                          <h1></h1>

                          <h2></h2>

                          <p></p>
                </div>
              
            </section>
        );
    }
}