import React from 'react';

export default class ScrollTop extends React.PureComponent {
  handleClick = () => {
    window.scroll(0, 0)
  };

  render() {
    return (
      <div id="m_scroll_top" className="m-scroll-top" onClick={this.handleClick}>
        <i className="la la-arrow-up" />
      </div>
    );
  }
}
