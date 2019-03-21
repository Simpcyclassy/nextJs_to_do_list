import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) =>
      <li key={index}><input onClick={() => props.removeTodo(item) } type="checkbox" />{item}</li>)
    }
    <style jsx>{`
      ul {
        list-style-type: none;
      }
    `}</style>
  </ul>
);

export default List;
