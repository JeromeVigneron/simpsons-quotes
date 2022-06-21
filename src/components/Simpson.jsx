import React from 'react';

export default function Simpson(data) {
  return (
    <>
      <img src={data.image} alt="A character from the TV show The Simpsons" />
      <h1>{data.character}</h1>
      <p>{data.quote}</p>
    </>
  );
}
