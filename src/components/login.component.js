import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import greenDot from "../images/background-shape/green-dot.png";
import blueHalfCycle from "../images/background-shape/blue-half-cycle.png";
import yellowTriangle from "../images/background-shape/yellow-triangle.png";
import serviceHalfCycle from "../images/background-shape/service-half-cycle.png";
import featureBg2 from "../images/background-shape/feature-bg-2.png";
import seoBall1 from "../images/background-shape/seo-ball-1.png";
import seoHalfCycle from "../images/background-shape/seo-half-cycle.png";
import teamBgTriangle from "../images/background-shape/team-bg-triangle.png";
import bannerBg from "../images/hero-area/banner-bg.png";

import AuthService from "../services/auth.service";

import { loginLabels } from "../constants/AuthComponentLables";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        {loginLabels.emptyMessage}
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/dashboard");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div
          className="card card-container mt-5"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={(c) => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">{loginLabels.username}</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{loginLabels.password}</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>{loginLabels.buttonLable}</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
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
