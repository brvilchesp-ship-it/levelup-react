import React from 'react'

export default function Reseñas() {
  return (
    <dialog id="dlgReview" style={{border:"none", borderRadius:"12px", padding:"20px"}}>
    <form method="dialog" id="reviewForm">
      <h3>Dejar reseña</h3>
      <div style={{margin:"8px 0"}}>Producto: <b id="reviewProductName"></b></div>
      <label>Calificación (1-5): <input type="number" id="reviewStars" min="1" max="5" required/></label>
      <textarea id="reviewText" rows="4" placeholder="Escribe tu experiencia..." style={{width:"100%", marginTop:"8px"}}></textarea>
      <div style={{display:"flex", gap:"8px", marginTop:"10px"}}>
        <button id="btnSendReview" value="confirm" class="btn btn-primary">Guardar</button>
        <button value="cancel" class="btn">Cancelar</button>
      </div>
      <div id="reviewError" style={{color:"red", marginTop:"6px"}}></div>
    </form>
  </dialog>
  )
}
