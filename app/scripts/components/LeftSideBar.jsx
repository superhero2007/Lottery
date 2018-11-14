import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuItem from 'components/MenuItem';

class LeftSideBar extends React.PureComponent {
  render() {
    const { admin } = this.props;
    return (
      <div id="m_aside_left" className="m-grid__item m-aside-left m-aside-left--skin-dark ">
        <div
          id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark "
          m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500" style={{ position: 'relative' }}
        >
          <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
            <MenuItem path="/lottery" title="Lottery" />
            {admin && <MenuItem path="/user" title="User" />}
            {!admin && <MenuItem path="/wallet" title="Wallet" />}
            {!admin && <MenuItem path="/profile" title="Profile" />}
          </ul>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    admin: state.user.isAdmin,
  };
}

LeftSideBar.propTypes = {
  admin: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(LeftSideBar);
