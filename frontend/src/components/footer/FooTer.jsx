
function FooTer() {
  let date = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <div className="section">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="newsletter-block">
                <h2 className="section-title text-center mb-4">Get latest posts delivered right to your inbox</h2>
                <form action="#!" method="post" noValidate>
                  <div className="input-group flex-column flex-sm-row flex-nowrap flex-sm-nowrap">
                    <input type="email" name="email" className="form-control required email w-auto text-center text-sm-start" placeholder="Your email address" aria-label="Subscription" required/>
                      <div className="input-group-append d-flex d-sm-inline-block mt-2 mt-sm-0 ms-0 w-auto">
                        <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="input-group-text w-100 justify-content-center" aria-label="Subscription Button"><i className="ti ti-user-plus me-2"></i> Join today</button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <div className="row g-2 g-lg-4 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <p className="mb-0 copyright-text content">&copy;{date} Qurno. All rights reserved.</p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-inline footer-menu">
                <li className="list-inline-item m-0"><a href="privacy.html">Privacy Policy</a></li>
                <li className="list-inline-item m-0"><a href="404-page.html">404 Page</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooTer