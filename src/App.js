import React, { Component } from "react";
import { Switch, Route, Link, Redirect, useHistory } from "react-router-dom";

//css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css/style.css";
import "./css/commonStyle.css";
import "./scss/_buttons.scss";
import "./scss/_common.scss";
import "./scss/_typography.scss";
import "./scss/style.scss";
import "./scss/templates/_hero-area.scss";
import "./scss/templates/_homepage.scss";
import "./scss/templates/_about.scss";
import "./scss/templates/_contact.scss";
import "./scss/templates/_navigation.scss";
import "./plugins/themify-icons/themify-icons.css";
import "react-toastify/dist/ReactToastify.css";

import AuthService from "./services/auth.service";

//components
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import LeftSideBar from "./UserComponents/leftSideBar";
import Demo from "./UserComponents/Demo";
import Dashboard from "./UserComponents/Dashboard";
import CreateSignature from "./UserComponents/CreateSignature";
import PendingDocuments from "./UserComponents/PendingDocuments";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
//images
import Logo from "./images/logo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });

      return <Redirect to={"/dashboard"} />;
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        {localStorage.getItem("accessToken") ? (
          <LeftSideBar />
        ) : (
          <section class="fixed-top navigation">
            <div class="container-fluid px-5">
              <nav class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/">
                  <img src={Logo} alt="logo" />
                </Link>
                <button
                  class="navbar-toggler border-0"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-controls="navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                {/* <!-- navbar --> */}
                <div class="collapse navbar-collapse text-center" id="navbar">
                  <ul class="navbar-nav ml-auto">
                    {/* <li class="nav-item">
                    <a class="nav-link" href="index.html">
                      Home
                    </a>
                  </li> */}
                    {showModeratorBoard && (
                      <li className="nav-item">
                        <Link to={"/mod"} className="nav-link">
                          Moderator Board
                        </Link>
                      </li>
                    )}
                    {showAdminBoard && (
                      <li className="nav-item">
                        <Link to={"/admin"} className="nav-link">
                          Admin Board
                        </Link>
                      </li>
                    )}

                    {currentUser && (
                      <li className="nav-item">
                        <Link to={"/user"} className="nav-link">
                          User
                        </Link>
                      </li>
                    )}
                    <li class="nav-item">
                      <Link class="nav-link page-scroll" to="/#feature">
                        Feature
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link page-scroll" to="/#pricing">
                        Pricing
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/#aboutus">
                        About
                      </Link>
                    </li>
                    {currentUser ? (
                      <>
                        <li className="nav-item">
                          <Link to={"/profile"} className="nav-link">
                            {currentUser.username}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            href="/login"
                            className="nav-link"
                            onClick={this.logOut}
                          >
                            LogOut
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link
                            to={"/login"}
                            className="btn btn-primary ml-lg-3 primary-shadow"
                          >
                            Login
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to={"/register"}
                            className="btn btn-primary ml-lg-3 primary-shadow"
                          >
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </section>
        )}

        {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Angootha
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav> */}

        <div className="container-fluid px-0">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/demo" component={Demo} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/create-signature" component={CreateSignature} />
            <Route
              exact
              path="/pending-documents"
              component={PendingDocuments}
            />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
