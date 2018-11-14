import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Helmet from 'react-helmet';
import history from 'modules/history';

import config from 'config';

import SignIn from 'pages/SignIn';
import Lottery from 'pages/Lottery';
import Profile from 'pages/Profile';
import User from 'pages/User';
import Wallet from 'pages/Wallet';
import NotFound from 'pages/NotFound';

import Header from 'components/Header';
import Footer from 'components/Footer';
import RightSideBar from 'components/RightSideBar';
import ScrollTop from 'components/ScrollTop';

import SignInRoute from 'routes/SignInRoute';
import LotteryRoute from 'routes/LotteryRoute';
import ProfileRoute from 'routes/ProfileRoute';
import UserRoute from 'routes/UserRoute';
import WalletRoute from 'routes/WalletRoute';

export class App extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: false,
    };
  }

  showMessage = () => {
    this.setState(state => ({
      message: !state.message,
    }));
  };

  render() {
    const { dispatch, user } = this.props;
    const { message } = this.state;

    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <div className="m-grid m-grid--hor m-grid--root m-page">
            <Helmet
              defer={false}
              htmlAttributes={{ lang: 'pt-br' }}
              encodeSpecialCharacters={true}
              defaultTitle={config.title}
              titleTemplate={`%s | ${config.name}`}
              titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
            {user.isAuthenticated && <Header dispatch={dispatch} user={user} showMessage={this.showMessage} />}
            <main className="app__main">
              <Switch>
                <SignInRoute isAuthenticated={user.isAuthenticated} dispatch={dispatch} path="/" exact component={SignIn} />
                <LotteryRoute isAuthenticated={user.isAuthenticated} dispatch={dispatch} path="/lottery" component={Lottery} />
                <ProfileRoute isAuthenticated={user.isAuthenticated} dispatch={dispatch} path="/profile" component={Profile} />
                <UserRoute isAuthenticated={user.isAuthenticated} path="/user" component={User} />
                <WalletRoute isAuthenticated={user.isAuthenticated} path="/wallet" component={Wallet} />
                <Route component={NotFound} />
              </Switch>
            </main>
            {user.isAuthenticated && <RightSideBar dispatch={dispatch} user={user} message={message} showMessage={this.showMessage} />}
            {user.isAuthenticated && <Footer dispatch={dispatch} user={user} />}
          </div>
          {user.isAuthenticated && <ScrollTop />}
        </div>
      </ConnectedRouter>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(App);
