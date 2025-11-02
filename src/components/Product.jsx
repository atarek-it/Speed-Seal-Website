// src/components/Products.jsx
import React from 'react'
import { ShoppingCart } from "lucide-react"

const products = [
  {
    name: "205/55 R16",
    desc: "تم تصميم إطار 205/55R16 لتحقيق الأداء والسلامة، حيث يجمع بين التحكم الموثوق والتقنية المتقدمة للغلق الذاتي. فهو يغلق الثقوب الصغيرة فورًا، مما يسمح لك بالاستمرار في القيادة بثقة وراحة واطمئنان.",
    img: 'https://i.ibb.co/6cFkwvFT/p1.jpg',
    price: "3,640 جنيه",
    badge: "جديد"
  },
  {
    name: "235/60 R18",
    desc: "تم تصميم إطار 235/60R18 مع مراعاة الاستدامة، حيث يوفر متانة طويلة الأمد، وعمر مداس ممتد، وكفاءة محسّنة في استهلاك الوقود. يمنحك أداءً صديقًا للبيئة وقيادة مريحة وموثوقة في كل رحلة.",
    img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvdFao3KFxxgYCaShXt3DivHxQxAn5jGGYYEu0cN34eyV5M0r9NxFqPDprpW1nf2f4P8rbSDy3zePM1QfeHus_XMON3SxHiYN6v0l7FonLX2kASe0al4fwU2fjWbxh63kOWh74wP9Yxg&usqp=CAc',
    price: "7,000 جنيه",
    badge: "الأكثر مبيعًا"
  },
  {
    name: "255/50 R20",
    desc: "تم تصميم إطار 255/50R20 لأداء متنوع، حيث يوفر أقصى درجات التماسك، وراحة استثنائية، وتحكمًا موثوقًا سواء في الطرق داخل المدينة أو على الطرق السريعة — مما يضمن لك الثقة في كل رحلة.",
    img: 'https://tyresdeal.com/wp-content/uploads/2024/02/sc5_fr_3_1-1.webp',
    price: "8,400 جنيه",
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
            أحدث <span style={{ color: "#E47945" }}>المنتجات</span> لدينا
          </h2>
          <p className="text-muted">استكشف مجموعتنا من الإطارات ذات الغلق الذاتي المصممة لكل رحلة.</p>
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
                    <a href='#contact'
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
                      <ShoppingCart size={16} className="me-2"/> اشترِ الآن
                    </a>
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
