import React from 'react'
import { ShieldCheck, DollarSign, TrendingUp, Car, Leaf } from "lucide-react"
import img from '../images/why.png'

const reasons = [
  {
    icon: <ShieldCheck className="w-5 h-5" style={{ color: "#E47945" }} />,
    title: "Self-Sealing Innovation",
    desc: "Automatically seals punctures to keep you moving without interruptions."
  },
  {
    icon: <Car className="w-5 h-5" style={{ color: "#E47945" }} />,
    title: "Maximum Safety",
    desc: "Engineered to reduce blowout risks and give you peace of mind."
  },
  {
    icon: <DollarSign className="w-5 h-5" style={{ color: "#E47945" }} />,
    title: "Cost Savings",
    desc: "Save money by avoiding frequent tire changes and roadside hassles."
  },
  {
    icon: <TrendingUp className="w-5 h-5" style={{ color: "#E47945" }} />,
    title: "Performance You Can Trust",
    desc: "Delivers reliable grip, stability, and comfort on all roads."
  },
  {
    icon: <Leaf className="w-5 h-5" style={{ color: "#E47945" }} />,
    title: "Smart & Sustainable",
    desc: "Eco-conscious design built for durability and efficiency."
  },
]

const Why = () => {
  return (
    <section className="why py-5 bg-light" id='why'>
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-4">
              Why Choose <span style={{ color: "#E47945" }}>Speed Seal Tires</span>?
            </h2>
            
            <div className="d-flex flex-column gap-3">
              {reasons.map((reason, index) => (
                <div key={index} className="d-flex align-items-start">
                  <div 
                    className="me-3 p-2 rounded-circle d-flex justify-content-center align-items-center" 
                    style={{ 
                      width:"40px", 
                      height:"40px", 
                      backgroundColor:"#E4794520" // light red background
                    }}
                  >
                    {reason.icon}
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-1">{reason.title}</h5>
                    <p className="text-light mb-0">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Side */}
          <div className="col-md-6 text-center">
            <img 
              src={img} 
              alt="Why Speed Seal Tires" 
              className="img-fluid rounded shadow-lg w-75"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Why
