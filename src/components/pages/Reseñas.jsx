// src/components/pages/Reseñas.jsx
import React, { useState } from "react";

export default function Reseñas({ reviews, setReviews }) {
  const [product, setProduct] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState(5);

  const addReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, { product, text, stars }]);
    setProduct("");
    setText("");
    setStars(5);
  };

  return (
    <section className="reseñas container">
      <h2>Deja tu reseña</h2>
      <form onSubmit={addReview}>
        <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Producto" required />
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Tu experiencia" required />
        <input type="number" min="1" max="5" value={stars} onChange={(e) => setStars(parseInt(e.target.value))} />
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
      <div>
        {reviews.map((r, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", marginTop: "10px", padding: "10px" }}>
            <strong>{r.product}</strong> ({r.stars}⭐)
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
