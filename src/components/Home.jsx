import React from 'react'

const Home = () => {
  return (
    <section className='home' id='home' dir='rtl'>
      <div className="container">
        <div className="row d-flex align-items-center text-end">
          <div className="col-md-6">
            <h2>
              مصمم للمستقبل <span>بإحكام</span>.
              من أجل سلامتك.
            </h2>
            <p>
              تقنيتنا ذاتية الإغلاق تُغلق الثقوب فورًا — لتستمر في الحركة دون قلق.
            </p>
            <a href='#why' className='btn btn-main'>استكشف الآن</a>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
