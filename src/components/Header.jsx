import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default function Header({title}){
  const style = {
    textAlign: 'center',
    borderBottom: 'none',
    marginTop: 0,
    marginBottom: 0
  };

  return (
    <PageHeader style={style}>{title}</PageHeader>
  );
}
