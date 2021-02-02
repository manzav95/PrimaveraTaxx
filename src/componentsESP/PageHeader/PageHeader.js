import React, { Component } from "react";
import "./style.css";

export default class PageHeader extends Component {
  render(props) {
    return (
      <div>
        <section className={`${this.props.styling}-main`} id="main">
          <div className={`${this.props.styling}-overlay`} id="overlay"></div>
          <section
            className={`${this.props.styling}-overlay-wrapper`}
            id="overlay-wrapper"
          >
            <section className={`${this.props.styling}-main-text`} id="main-text">
              <h1 className={`${this.props.styling}-header`} id="page-header">
                {this.props.title}
              </h1>
            </section>
          </section>
        </section>
      </div>
    );
  }
}
