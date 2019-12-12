import React from 'react';

export class AdsLayoutContent extends React.Component {
  render() {
    return (
      <div className="ads-layout-content">
        {this.props.children}
      </div>
    );
  }
}
