import React from 'react'

const Process = () => {
  return (
    <section className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
  <div className="row align-items-center py-1 py-sm-3 py-md-4 my-lg-2">
    <div className="col-lg-4 offset-xl-1">
      <h2 className="h1 text-center text-lg-start pb-3 pb-lg-1">Our servises</h2>
      {/* Show on screens > 992px*/}
      <ul className="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4">
        <li className="d-flex pt-2"><i className="ai-check-alt fs-4 text-primary mt-n1 me-2" />Individual approach to the brand</li>
        <li className="d-flex pt-2"><i className="ai-check-alt fs-4 text-primary mt-n1 me-2" />We guarantee the result after a month</li>
        <li className="d-flex pt-2"><i className="ai-check-alt fs-4 text-primary mt-n1 me-2" />Completing tasks exactly on time</li>
      </ul><a className="btn btn-primary d-none d-lg-inline-flex" href="#">See all servises</a>
    </div>
    <div className="col-lg-8 col-xl-7 col-xxl-6">
      <div className="row row-cols-1 row-cols-sm-2">
        <div className="col">
          <div className="card border-0 bg-faded-primary">
            <div className="card-body"><i className="ai-search-settings fs-1 text-primary d-block mb-3" />
              <h3 className="h4">SEO Website Audit</h3>
              <p className="fs-sm">Consectetur adipiscing elit proin volutpat mollis egestas nam in luctus facilisis ultrices llentesque volutpat ligula est dignissim.</p>
            </div>
          </div>
          <div className="card border-0 bg-faded-info mt-4">
            <div className="card-body"><i className="ai-bulb-alt fs-1 text-info d-block mb-3" />
              <h3 className="h4">Content Marketing</h3>
              <p className="fs-sm">Morbi et massa fames ac lerisque sit commodo dignissim faucibus vel quisque proin lectus orbi et massa fames ac massa.</p>
            </div>
          </div>
        </div>
        <div className="col pt-lg-3">
          <div className="card border-0 bg-faded-warning mt-4 mt-sm-0 mt-lg-4">
            <div className="card-body"><i className="ai-mail-filled fs-1 text-warning d-block mb-3" />
              <h3 className="h4">Email Marketing</h3>
              <p className="fs-sm">Sapiener ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam  diam natoque scelerisque viverra.</p>
            </div>
          </div>
          <div className="card border-0 bg-faded-danger mt-4">
            <div className="card-body"><i className="ai-telegram fs-2 text-danger d-block mb-3" />
              <h3 className="h4">Social Networks</h3>
              <p className="fs-sm">Pharetra in morbi quis is massa maecenas arcu vulputate pulvinar elit non nullage a, duis tortor mi massa ipsum in eu eu eget libero.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Show button on screens < 992px*/}
      <div className="d-lg-none text-center pt-3 mt-3 mt-sm-4"><a className="btn btn-primary" href="#">See all servises</a></div>
    </div>
  </div>
</section>

    )
}

export default Process