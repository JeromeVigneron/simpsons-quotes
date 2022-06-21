import React, { useState } from 'react';
import axios from 'axios';

import Simpson from './Simpson'

export default function DisplaySimpson() {
	const apiUrl = 'https://simpsons-quotes-api.herokuapp.com/quotes';

  const [simpson, setSimpson] = useState([]);

  const getSimpson = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setSimpson(res.data);
        console.log(res.data);
      });
  }

  return (
    <section>
      {simpson.map((simpson, index) => (
        <Simpson key={index} quote={simpson.quote} character={simpson.character} image={simpson.image} />
      ))}
      <button type="button" onClick={getSimpson} >Get Simpson</button>
    </section>
  );
}