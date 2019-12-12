import React from 'react';

export class AdsLayoutAside extends React.Component {
  render() {
    return (
      <div className="ads-layout-aside">
        <h1 className="ads-layout-aside__logo">
          nx-demo
        </h1>
        {this.props.children}
      </div>
    );
  }
}
