// src/components/Products.jsx
import React from 'react'
import { ShoppingCart } from "lucide-react"
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

const products = [
  {
    name: "Speed Seal X1",
    desc: "High-performance tire with advanced self-sealing technology.",
    img: p1,
    price: "$120",
    badge: "New"
  },
  {
    name: "Speed Seal EcoDrive",
    desc: "Eco-friendly tire built for durability and fuel efficiency.",
    img: p2,
    price: "$140",
    badge: "Best Seller"
  },
  {
    name: "Speed Seal ProMax",
    desc: "Maximum grip and comfort for city and highway driving.",
    img: p3,
    price: "$160",
    badge: null
  },
]

const placeholder = 'https://via.placeholder.com/400x300?text=No+Image'

const handleImageError = (e) => {
  e.currentTarget.onerror = null
  e.currentTarget.src = placeholder
}

const Products = () => {
  return (
    <section className="products py-5 bg-light" id='products'>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Our Latest <span style={{ color: "#E47945" }}>Products</span>
          </h2>
          <p className="text-muted">Explore our range of self-sealing tires designed for every journey.</p>
        </div>

        {/* Product Grid */}
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div 
                className="card h-100 shadow border-0 position-relative overflow-hidden"
                style={{ borderRadius: "20px", transition: "all 0.3s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-10px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {/* Badge */}
                {product.badge && (
                  <span 
                    className="position-absolute top-0 start-0 m-3 px-3 py-1 rounded-pill text-white fw-semibold"
                    style={{ backgroundColor: "#E47945", fontSize: "0.8rem" }}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Product Image */}
                <div className="overflow-hidden">
                  <img
                    src={product.img}
                    onError={handleImageError}
                    className="card-img-top p-3 img-fluid"
                    alt={product.name}
                    style={{ 
                      borderRadius: "15px", 
                      height: "220px", 
                      objectFit: "contain", 
                      transition: "transform 0.4s ease" 
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="fw-bold mb-2">{product.name}</h5>
                  <p className="text-muted small">{product.desc}</p>

                  {/* Price + Button */}
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-semibold fs-5" style={{ color: "#E47945" }}>
                      {product.price}
                    </span>
                    <button
                      className="btn text-white fw-semibold d-flex align-items-center"
                      style={{ 
                        backgroundColor: "#E47945", 
                        borderRadius: "30px", 
                        padding: "8px 16px",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <ShoppingCart size={16} className="me-2"/> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products
