
function About() {
  return (
    <>
      <section className="page-header section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="section-title h2 mb-3">
                <span>About</span>
              </h1>
              <ul className="list-inline breadcrumb-menu mb-3">
                <li className="list-inline-item"><a href="index-2.html"><i className="ti ti-home"></i>  <span>Home</span></a></li>
                <li className="list-inline-item">• &nbsp; <a href="about.html"><span>About</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="text-dark mb-0">We are the Qurno, <br/> Team of content writers and designers.</h2>
            </div>
          </div>

          <div className="py-5 my-3">
            <div className="row g-4 justify-content-center text-center">
              <div className="col-lg-6 image-grid-1">
                <img className="w-100 h-auto rounded" src="src/assets/assets/images/about/01.jpg" alt="" width="620" height="346"/>
              </div>

              <div className="col-lg-3 col-6 image-grid-2">
                <img className="img-fluid rounded" src="src/assets/assets/images/about/00.jpg" alt="" width="460" height="515"/>
              </div>

              <div className="col-lg-3 col-6 image-grid-3">
                <img className="img-fluid rounded" src="src/assets/assets/images/about/02.jpg" alt="" width="460" height="444"/>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className="content">
                <p>If ever a place existed where you could just go crazy creatively, it is definitely your about page. It’s your chance to show your readers who you really are. Pictures, quotes, inspirational graphics, whatever it is that drives you.. Display it here in a way that only you can.</p>
                <p>I’ve included a plugin in the setup of this theme that will make adding columns to your pages and posts a piece of cake. Let creativity take control, and forget about the technical end of things, I’ve got your six.</p>
              </div>
            </div>
          </div>

          <div className="section-sm pb-0">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="section-title">
                  <span>Our writers</span>
                </h2>

                <div className="row gx-4 gy-5 gx-md-5 justify-content-center text-center">

                  <div className="col-md-4 col-sm-6">
                    <a className="d-inline-block is-hoverable" href="author-single.html">
                      <img className="img-fluid rounded" src="src/assets/assets/images/author/chris-impey.jpg" alt="Chris Impey" width="150" height="150"/>
                        <h4 className="text-dark mt-4 mb-1">Chris Impey</h4>
                        <p className="mb-0"><span className="fw-bold text-black">04</span> Published posts</p>
                    </a>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <a className="d-inline-block is-hoverable" href="author-single.html">
                      <img className="img-fluid rounded" src="src/assets/assets/images/author/emma-hazel.jpg" alt="Emma Hazel" width="150" height="150"/>
                        <h4 className="text-dark mt-4 mb-1">Emma Hazel</h4>
                        <p className="mb-0"><span className="fw-bold text-black">02</span> Published posts</p>
                    </a>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <a className="d-inline-block is-hoverable" href="author-single.html">
                      <img className="img-fluid rounded" src="src/assets/assets/images/author/thomas-macaulay.jpg" alt="Thomas Macaulay" width="150" height="150"/>
                        <h4 className="text-dark mt-4 mb-1">Thomas Macaulay</h4>
                        <p className="mb-0"><span className="fw-bold text-black">03</span> Published posts</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About