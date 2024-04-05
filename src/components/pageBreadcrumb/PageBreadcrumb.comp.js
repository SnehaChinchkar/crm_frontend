import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const PageBreadcrumb = ({ pagename }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{pagename}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
