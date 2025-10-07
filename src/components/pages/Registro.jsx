import React from 'react'

export default function Registro() {
  return (
     <section id="form-container" aria-hidden="true">
    <div className="form-header" style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:"8px"}}>
      <h2 id="panel-title">Registro</h2>
      <div style="display:flex; gap:6px;">
        <button id="tab-register" className="btn btn-primary">Registro</button>
        <button id="tab-login" className="btn">Login</button>
        <button id="tab-profile" className="btn" style="display:none;">Perfil</button>
      </div>
      <button id="cerrar-form" className="btn">Cerrar</button>
    </div>

    
    <form id="formulario" novalidate>
      <input type="text" id="nombre" placeholder="Nombre completo"/>
      <input type="email" id="mail" placeholder="Correo (ej: tu@duocuc.cl)"/>
      <input type="number" id="edad" placeholder="Edad" min="0"/>
      <input type="text" id="refCode" placeholder="Código de referido (opcional)"/>
      <button type="submit" className="btn btn-primary">Crear cuenta</button>
    </form>
    <div id="errores" role="alert" aria-live="polite"></div>

    
    <form id="form-login" style="display:none;" novalidate>
      <input type="email" id="loginMail" placeholder="Correo"/>
      <button type="submit" className="btn btn-primary">Ingresar</button>
      <div id="loginError" style="color:red; margin-top:6px;"></div>
    </form>

    
    <form id="form-perfil" style="display:none;" novalidate>
      <input type="text" id="perfilNombre" placeholder="Nombre completo"/>
      <input type="email" id="perfilMail" placeholder="Correo" disabled/>
      <div style={{margin:"8px 0"}}>Preferencias de compra:</div>
      <div style={{display:grid, gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:"6px", marginBottom:"10px"}}>
        <label><input type="checkbox" value="Consolas" className="pref"/> Consolas</label>
        <label><input type="checkbox" value="Accesorios" className="pref"/> Accesorios</label>
        <label><input type="checkbox" value="Juegos de Mesa" className="pref"/> Juegos de Mesa</label>
        <label><input type="checkbox" value="Computadores Gamers" className="pref"/> Computadores Gamers</label>
        <label><input type="checkbox" value="Sillas Gamers" className="pref"/> Sillas Gamers</label>
        <label><input type="checkbox" value="Mouse" className="pref"/> Mouse</label>
        <label><input type="checkbox" value="Mousepad" className="pref"/> Mousepad</label>
        <label><input type="checkbox" value="Poleras Personalizadas" className="pref"/> Poleras Personalizadas</label>
        <label><input type="checkbox" value="Polerones Gamers Personalizados" className="pref"/> Polerones</label>
        <label><input type="checkbox" value="Servicio Técnico" className="pref"/> Servicio Técnico</label>
      </div>
      <button type="submit" className="btn btn-primary">Guardar perfil</button>
      <div id="perfilMsg" style={{marginTop:"6px"}}></div>
    </form>
  </section>
)
}
