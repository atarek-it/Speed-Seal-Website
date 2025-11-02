import React from 'react'
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "أحمد مصطفى",
    role: "صاحب مركز صيانه",
    feedback: "إطارات سبيد سيل منحتنا موثوقية لا مثيل لها. لم نعد نعاني من التوقف بسبب الثقوب — فعلاً غيرت قواعد اللعبة!",
    rating: 5,
    avatar: null
  },
  {
    name: "منه خالد",
    role: "مالكة سيارة",
    feedback: "أشعر بأمان أكبر أثناء القيادة مع إطارات سبيد سيل. تقنية الإغلاق الذاتي أنقذتني فعلاً على الطريق السريع!",
    rating: 5,
    avatar: null
  },
  {
    name: "محمد علي",
    role: "مشرف لوجستي",
    feedback: "متينة، موفرة للوقود، وخالية من المتاعب. هذه الإطارات تقدم تماماً ما نحتاجه للنقل لمسافات طويلة.",
    rating: 4,
    avatar: null
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials py-5 bg-light" dir="rtl">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            ماذا يقول <span style={{ color: "#E47945" }}>عملاؤنا</span>
          </h2>
          <p className="text-muted">آراء حقيقية من السائقين ومديري الأساطيل الذين يثقون في إطارات سبيد سيل.</p>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="card h-100 shadow-sm border-0 rounded-4 p-4 text-center"
                style={{ transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                {/* Avatar */}
                {t.avatar ? (
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="rounded-circle mx-auto mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                ) : (
                  <div 
                    className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle" 
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#E47945",
                      color: "white",
                      fontSize: "28px",
                      fontWeight: "bold"
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                )}

                {/* Info */}
                <h5 className="fw-bold">{t.name}</h5>
                <p className="text-muted mb-2">{t.role}</p>
                <p className="fst-italic text-muted fs-6">“{t.feedback}”</p>
                
                {/* Stars */}
                <div className="d-flex justify-content-center text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < t.rating ? "#ffc107" : "none"} 
                      stroke={i < t.rating ? "#ffc107" : "#ccc"} 
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
