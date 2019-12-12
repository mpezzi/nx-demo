import React from 'react';

export const AdsLayoutAside = (props: any) => {
  return (
    <div className="ads-layout-aside">
      <h1 className="ads-layout-aside__logo">
        dashboard
      </h1>
      {props.children}
    </div>
  );
}
