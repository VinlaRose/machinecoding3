import React, { useContext } from 'react';

import { DataCotnext } from './Context';

export const Table = () => {
    const {state} = useContext(DataCotnext);
    console.log(state);
    const sorting = (type) => {
      console.log(type)
    }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Weight</th>
          <th>Price</th>
          <th>Calories</th>
          <th>Ingredients</th>
        </tr>
      </thead>
      <tbody>
        {state.filteredData.map((snack) => (
          <tr key={snack.id}>
            <td>{snack.id}</td>
            <td>{snack.product_name}</td>
            <td onClick={() => sorting("weight")}>{snack.product_weight}</td>
            <td>{snack.price}</td>
            <td>{snack.calories}</td>
            <td>{snack.ingredients.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

