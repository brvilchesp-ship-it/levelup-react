import React from 'react'

export default function Puntos() {
  return (
<section id="puntos" class="container">
    <h2>Puntos LevelUp & Niveles</h2>
    <div className="card">
      <div className="content">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"12px", flexWrap:"wrap"}}>
          <div>
            <div className="pill" id="nivelPill">Nivel: Bronze</div>
            <div>Puntos: <strong id="puntosSpan">0</strong></div>
          </div>
          <div style={{display:"flex", gap:"8px", alignItems:"center"}}>
            <button id="btnCanjear" className="btn btn-primary">Canjear 100 pts → $1.000</button>
            <span id="duocBadge" style={{display:"none"}}>🎓 DUOC: 20% OFF</span>
          </div>
        </div>
        <div className="progress" style={{width:"100%", height:"10px", background:"#22232a", borderRadius:"8px", marginTop:"10px"}}>
          <span id="nivelProgress" style={{display:"block", height:"100%", width:"0%" ,background:"linear-gradient(135deg,#b12a2a,#000)", borderRadius:"8px"}}></span>
        </div>
      </div>
    </div>
  </section>
)
}
