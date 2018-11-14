import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class MenuItem extends React.PureComponent {
  render () {
    const { path, router, title } = this.props;
    const currentPath = router.location.pathname;

    return (
      <li className={`m-menu__item${currentPath === path ? ' m-menu__item--active' : ''}`} aria-haspopup="true">
        <Link to={path} className="m-menu__link ">
          <i className="m-menu__link-icon flaticon-line-graph" />
          <span className="m-menu__link-title">
            <span className="m-menu__link-wrap">
              <span className="m-menu__link-text">{title}</span>
            </span>
          </span>
        </Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

/* istanbul ignore next */
function mapStateToProps(state) {
  return { router: state.router };
}

export default connect(mapStateToProps)(MenuItem);
