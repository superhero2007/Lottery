import React from 'react';
import PropTypes from 'prop-types';

class SubHeader extends React.PureComponent {
  render() {
    const { title } = this.props;
    return (
      <div className="m-subheader ">
        <div className="d-flex align-items-center">
          <div className="mr-auto">
            <h3 className="m-subheader__title ">{ title }</h3>
          </div>
        </div>
      </div>
    );
  }
}

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeader;
