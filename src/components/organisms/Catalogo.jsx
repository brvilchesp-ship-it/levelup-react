import React from 'react'

export default function Catalogo() {
  return (
<section className="contenido container" id="catalogo">
    <h2>Productos</h2>

  <div className="filtros">
  <input id="q" type="search" placeholder="Buscar producto…" />
  
  <select id="cat">
    <option value="">Todas las categorías</option>
      <option value="Accesorios">Accesorios</option>
      <option value="Juegos de mesa">Juegos de mesa</option>
    <option value="Consolas">Consolas</option>
    <option value="Computadores Gamers">Computadores Gamers</option>
    <option value="Sillas Gamers">Sillas Gamers</option>
    <option value="Mouse">Mouse</option>
    <option value="Mousepad">Mousepad</option>
    <option value="Poleras Personalizadas">Poleras Personalizadas</option>
  </select>
  
  <input id="min" type="number" placeholder="Precio mínimo" />
  <input id="max" type="number" placeholder="Precio máximo" />
  
  <select id="sort">
    <option value="">Ordenar…</option>
    <option value="precio-asc">Precio: de menor a mayor</option>
    <option value="precio-desc">Precio: de mayor a menor</option>
    <option value="nombre-asc">Nombre A→Z</option>
    <option value="nombre-desc">Nombre Z→A</option>
  </select>
  
  <button id="btnLimpiar" className="btn btn-limpiar">Limpiar</button>
</div>


    <div id="gridProductos" className="grid cols-3">

      <div className="card" data-cat="Consolas" data-id="ps5">
        <img className="productos" src="https://media.falabella.com/falabellaCL/144879483_01/w=1500,h=1500,fit=pad" alt="PlayStation 5"/>
        <div className="content">
          <h3>PlayStation 5</h3>
          <p>Consola de última generación con gráficos impresionantes.</p>
          <p className="price" data-price="599990">$599.990</p>
          <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
          <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
            <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
            <button className="btn add-review">Reseñar</button>
          </div>
        </div>
      </div>


      <div className="card" data-cat="Computadores Gamers" data-id="pc-rog">
        <img className="productos" src="https://media.solotodo.com/media/products/1376804_picture_1619193737.jpg" alt="PC Gamer ASUS ROG Strix"/>
        <div className="content">
          <h3>PC Gamer ASUS ROG Strix</h3>
          <p>Equipo potente para gamers exigentes.</p>
          <p className="price" data-price="980000">$980.000</p>
          <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
          <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
            <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
            <button className="btn add-review">Reseñar</button>
          </div>
        </div>
      </div>


      <div className="card" data-cat="Accesorios" data-id="hyperx">
        <img className="productos" src="https://media.solotodo.com/media/products/1666477_picture_1668178725.jpg" alt="Auriculares HyperX"/>
        <div className="content">
          <h3>Auriculares Gamer HyperX Cloud II</h3>
          <p>Sonido envolvente y micrófono desmontable.</p>
          <p className="price" data-price="36990">$36.990</p>
          <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
          <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
            <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
            <button className="btn add-review">Reseñar</button>
          </div>
        </div>
      </div>


      <div className="card" data-cat="Computadores Gamers" data-id="pc-pba">
        <img className="productos" src="https://www.xtremepc.com.mx/cdn/shop/files/f2d07544-3b3d-49d1-bd86-f2ec23b62c8e_800x.png?v=1732267809" alt="PC Gaming Asus Rog Strix PBA"/>
        <div className="content">
          <h3>PC Gaming Asus Rog Strix PBA</h3>
          <p>Componentes de alto rendimiento para los más exigentes.</p>
          <p className="price" data-price="5699990">$5.699.990</p>
          <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
          <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
            <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
            <button className="btn add-review">Reseñar</button>
          </div>
        </div>
      </div>


      <div className="card" data-cat="Accesorios" data-id="apexpro">
        <img className="productos" src="https://http2.mlstatic.com/D_NQ_NP_777006-MLA80570414748_112024-O.webp" alt="Teclado Apex Pro TKL Gen3"/>
        <div className="content">
          <h3>Apex Pro TKL Gen3</h3>
          <p>Switches OmniPoint y RGB por tecla.</p>
          <p className="price" data-price="300790">$300.790</p>
          <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
          <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
            <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
            <button className="btn add-review">Reseñar</button>
          </div>
        </div>
      </div>


      <div className="card" data-cat="Poleras Personalizadas" data-id="polera">
        <img className="productos" src="https://cdnx.jumpseller.com/estampados-bettoskys/image/29748856/resize/640/640?1669413482" alt="Polera Gamer"/>
        <div className="content">
          <h3>Polera Gamer Personalizada 'Level-Up'</h3>
          <p>Personaliza con tu gamer tag o diseño favorito.</p>
          <p className="price" data-price="14990">$14.990</p>
          <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
          <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
            <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
            <button className="btn add-review">Reseñar</button>
          </div>
        </div>
      </div>
      

  <div className="card" data-cat="Mousepad" data-id="Mousepad">
    <img className="productos" src="https://media.spdigital.cl/thumbnails/products/1vn6h0w8_702d83b2_thumbnail_4096.jpg" alt="Mouse Pad HyperX"/>
    <div className="content">
      <h3>Mouse Pad HyperX FURY S Pro </h3>
      <p>La alfombrilla de ratón para jugadores profesionales HyperX™ FURY S presenta unos bordes cosidos que no se deshilachan con una superficie uniforme que te ofrece una precisión absoluta. La alfombrilla de tela densa proporciona una superficie suave al tacto pero de textura muy fina para el seguimiento del ratón óptico.</p>
      <p className="price" data-price="25.000">$25.000</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
    </div>
   </div>

 
    

  <div className="card" data-cat="Joystick Xbox Series X" data-id="mandoxbox">
    <img className="productos" src="https://sniper.cl/cdn/shop/files/D_970114-MLA45317791910_032021-O_500x.jpg?v=1731960960" alt="Joystick Xbox Series X"/>
    <div className="content">
      <h3>Joystick Xbox Series X</h3>
      <p>Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, puedes pasar horas jugando con total confort.</p>
      <p className="price" data-price="74990">$74.990</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
  </div>
</div>


  <div className="card" data-cat="GTA V" data-id="gta">
    <img className="productos" src="https://canarias.worten.es/i/d297a73bf0120537eedb86c81258b19f2b5f4a15"/>
    <div className="content">
      <h3>GTA 5</h3>
      <p>El mejor juego para jugar en las nuevas generaciones de consolas.</p>
      <p className="price" data-price="26990">$26.990</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
  </div>
</div>


  <div className="card" data-cat="Sillas Gamers" data-id="Sillas Gamers">
    <img className="productos" src="https://i5.walmartimages.cl/asr/0abbeb35-6360-4757-bcb0-ced8f98c7f45.966f6d87ffe1e6149dbc31dbaafa1488.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
    <div className="content">
      <h3>Silla Gamer</h3>
      <p>Mejora tu postura gracias al diseño ergonómico del respaldo. La tensión que normalmente se siente en la espalda y el cuello al sentarse en una silla normal quedará en el pasado al tener esta silla Gamer.</p>
      <p className="price" data-price="209990">$209.990</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
  </div>
  </div>

  <div className="card" data-cat="Consolas" data-id="xbox-series-x">
    <img className="productos" src="https://th.bing.com/th/id/R.5d6ee7b3aa572249265f2a7106cf2455?rik=TSZFXENuYDyaLQ&pid=ImgRaw&r=0"/>
    <div className="content">
      <h3>Xbox Series X</h3>
      <p>Consola de última generación con gráficos impresionantes.</p>
      <p className="price" data-price="699990">$699.990</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
  </div>
  </div>
   
  <div className="card" data-cat="Mouse" data-id="Mouse">
    <img className="productos" src="https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/378c4b80-8654-41fc-932b-e52455772cd4/MKCV45UPX5/MKCV45UPX5-1/1706670174256-MKCV45UPX5-1-0.jpg"/>
    <div className="content">
      <h3>Logitech Pro X Superlight</h3>
      <p>Un mouse inalámbrico de alto rendimiento diseñado para jugadores profesionales y entusiastas de los eSports</p>
      <p className="price" data-price="105990">$105.990</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
  </div>
  </div>

  <div className="card" data-cat="Juegos de mesa" data-id="Juegos de mesa">
    <img className="productos" src="https://hasbrostore.cl/18046-large_default/monopoly-gamer-mariokart.jpg"/>
    <div className="content">
      <h3>Juego de mesa Monopoly Gamer Mariokart</h3>
      <p>Esta edición especial del clásico Monopoly combina la dinámica del juego con el universo de Mario Kart de Nintendo.</p>
      <p className="price" data-price="39990">$39.990</p>
      <div className="rating" data-avg="0" data-count="0">⭐ <span className="avg">0.0</span> (<span className="count">0</span>)</div>
      <div style={{display:"flex" ,gap:"8px" ,marginTop:"8px"}}>
      <button className="btn btn-primary add-to-cart">Agregar al carrito</button>
      <button className="btn add-review">Reseñar</button>
    </div>
  </div>
</div>
</div>
<br/>
</section>
)
}
