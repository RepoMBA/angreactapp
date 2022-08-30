import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import greenDot from "../images/background-shape/green-dot.png";
import blueHalfCycle from "../images/background-shape/blue-half-cycle.png";
import yellowTriangle from "../images/background-shape/yellow-triangle.png";
import serviceHalfCycle from "../images/background-shape/service-half-cycle.png";
import featureBg2 from "../images/background-shape/feature-bg-2.png";
import seoBall1 from "../images/background-shape/seo-ball-1.png";
import seoHalfCycle from "../images/background-shape/seo-half-cycle.png";
import teamBgTriangle from "../images/background-shape/team-bg-triangle.png";
import bannerBg from "../images/hero-area/banner-bg.png";
import { registerLabels } from "../constants/AuthComponentLables";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        {registerLabels.emptyMessage}{" "}
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        {registerLabels.invalidEmail}
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        {registerLabels.usernameValidation}
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        {registerLabels.passwordValidation}
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div
          className="card card-container"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={(c) => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">{registerLabels.username}</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{registerLabels.email}</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">{registerLabels.password}</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">
                    {registerLabels.buttonLable}
                  </button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={(c) => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
        {/* background shapes */}
        <div id="scene">
          <img
            class="img-fluid hero-bg-1 up-down-animation"
            src={featureBg2}
            alt=""
          />
          <img
            class="img-fluid hero-bg-2 left-right-animation"
            src={seoBall1}
            alt=""
          />
          <img
            class="img-fluid hero-bg-3 left-right-animation"
            src={seoHalfCycle}
            alt=""
          />
          <img
            class="img-fluid hero-bg-4 up-down-animation"
            src={greenDot}
            alt=""
          />
          <img
            class="img-fluid hero-bg-5 left-right-animation"
            src={blueHalfCycle}
            alt=""
          />
          <img
            class="img-fluid hero-bg-6 up-down-animation"
            src={seoBall1}
            alt=""
          />
          <img
            class="img-fluid hero-bg-7 left-right-animation"
            src={yellowTriangle}
            alt=""
          />
          <img
            class="img-fluid hero-bg-8 up-down-animation"
            src={serviceHalfCycle}
            alt=""
          />
          <img
            class="img-fluid hero-bg-9 up-down-animation"
            src={teamBgTriangle}
            alt=""
          />
        </div>
      </div>
    );
  }
}
