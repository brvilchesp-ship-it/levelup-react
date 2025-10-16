import React, { useState, useEffect } from "react";

const productsData = [
  { id: "ps5", name: "PlayStation 5", price: 599990, img: "https://media.falabella.com/falabellaCL/144879483_01/w=1500,h=1500,fit=pad", category: "Consolas" },
  { id: "pc-rog", name: "PC Gamer ASUS ROG Strix", price: 980000, img: "https://media.solotodo.com/media/products/1376804_picture_1619193737.jpg", category: "Computadores Gamers" },
  { id: "hyperx", name: "Auriculares Gamer HyperX Cloud II", price: 36990, img: "https://media.solotodo.com/media/products/1666477_picture_1668178725.jpg", category: "Accesorios" },
  { id: "pc-pba", name: "PC Gaming Asus Rog Strix PBA", price: 5699990, img: "https://www.xtremepc.com.mx/cdn/shop/files/f2d07544-3b3d-49d1-bd86-f2ec23b62c8e_800x.png?v=1732267809", category: "Computadores Gamers" },
  { id: "apexpro", name: "Apex Pro TKL Gen3", price: 300790, img: "https://http2.mlstatic.com/D_NQ_NP_777006-MLA80570414748_112024-O.webp", category: "Accesorios" },
  { id: "polera", name: "Polera Gamer Personalizada 'Level-Up'", price: 14990, img: "https://cdnx.jumpseller.com/estampados-bettoskys/image/29748856/resize/640/640?1669413482", category: "Poleras Personalizadas" },
  { id: "mousepad", name: "Mouse Pad HyperX FURY S Pro", price: 25000, img: "https://media.spdigital.cl/thumbnails/products/1vn6h0w8_702d83b2_thumbnail_4096.jpg", category: "Mousepad" },
  { id: "mandoxbox", name: "Joystick Xbox Series X", price: 74990, img: "https://sniper.cl/cdn/shop/files/D_970114-MLA45317791910_032021-O_500x.jpg?v=1731960960", category: "Joystick Xbox Series X" },
  { id: "gta", name: "GTA 5", price: 26990, img: "https://canarias.worten.es/i/d297a73bf0120537eedb86c81258b19f2b5f4a15", category: "GTA V" },
  { id: "silla", name: "Silla Gamer", price: 209990, img: "https://i5.walmartimages.cl/asr/0abbeb35-6360-4757-bcb0-ced8f98c7f45.966f6d87ffe1e6149dbc31dbaafa1488.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", category: "Sillas Gamers" },
  { id: "xbox-series-x", name: "Xbox Series X", price: 699990, img: "https://th.bing.com/th/id/R.5d6ee7b3aa572249265f2a7106cf2455?rik=TSZFXENuYDyaLQ&pid=ImgRaw&r=0", category: "Consolas" },
  { id: "mouse", name: "Logitech Pro X Superlight", price: 105990, img: "https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/378c4b80-8654-41fc-932b-e52455772cd4/MKCV45UPX5/MKCV45UPX5-1/1706670174256-MKCV45UPX5-1-0.jpg", category: "Mouse" },
  { id: "monopoly", name: "Juego de mesa Monopoly Gamer Mariokart", price: 39990, img: "https://hasbrostore.cl/18046-large_default/monopoly-gamer-mariokart.jpg", category: "Juegos de mesa" }
];

export default function Catalogo({ cart, setCart }) {
  const [products] = useState(productsData);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <section className="contenido container" id="catalogo">
      <h2 className="info">Productos</h2>
      <div className="grid cols-3">
        {products.map((p) => (
          <div key={p.id} className="card" data-id={p.id} data-cat={p.category}>
            <img className="productos" src={p.img} alt={p.name} />
            <div className="content">
              <h3>{p.name}</h3>
              <p className="price">${p.price.toLocaleString()}</p>
              <button className="btn btn-primary" onClick={() => addToCart(p)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
