import React from 'react';

export class AdsLayout extends React.Component {
  render() {
    return (
      <div className="ads-layout">
        {this.props.children}
      </div>
    );
  }
}
