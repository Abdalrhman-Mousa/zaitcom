import './Header.css'


const Header = () => {
return ( 
<>


<header className="navbar navbar-expand-lg fixed-top bg-secondery">
  <div className="container"><a className="navbar-brand pe-sm-3" href="index-2.html"><span className="text-primary flex-shrink-0 me-2">
        <svg version="1.1" width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z" />
        </svg></span>Around</a>

    <div className="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" data-bs-toggle="mode">
      <input className="form-check-input" type="checkbox" id="theme-mode" checked />
      <label className="form-check-label" htmlFor="theme-mode"><i className="ai-sun fs-lg" /></label>
      <label className="form-check-label" htmlFor="theme-mode"><i className="ai-moon fs-lg" /></label>
    </div>
    
    <a className="btn btn-primary btn-sm fs-sm order-lg-3 d-none d-sm-inline-flex" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener"><i className="ai-cart fs-xl me-2 ms-n1" />Buy now</a>
    <button className="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon" /></button>
    <nav className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav navbar-nav-scroll me-auto" style={{arScrollHeight: '520px'}}>
        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle active" href="#" data-bs-toggle="dropdown" aria-expanded="false">Landings</a>
          <div className="dropdown-menu overflow-hidden p-0">
            <div className="d-lg-flex">
              <div className="mega-dropdown-column pt-1 pt-lg-3 pb-lg-4">
                <ul className="list-unstyled mb-0">
                  <li><a className="dropdown-item" href="index-2.html">Template Intro Page</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 rounded-3 rounded-start-0" style={{backgroundImage: 'url(assets/img/megamenu/landings.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-mobile-app-showcase.html">Mobile App Showcase</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/mobile-app.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-product.html">Product Landing</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/product-landing.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-saas-v1.html">SaaS v.1</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/saas-1.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-saas-v2.html">SaaS v.2</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/saas-2.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-marketing-agency.html">Marketing Agency</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/marketing-agency.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-shop.html">Shop Homepage</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/shop-homepage.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-creative-agency.html">Creative Agency</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/creative-agency.jpg)'}} /></li>
                </ul>
              </div>
              <div className="mega-dropdown-column pb-2 pt-lg-3 pb-lg-4">
                <ul className="list-unstyled mb-0">
                  <li><a className="dropdown-item" href="landing-web-studio.html">Web Studio</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/web-studio.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-corporate.html">Corporate</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/corporate.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-business-consulting.html">Business Consulting</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/business-consulting.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-coworking-space.html">Coworking Space</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/coworking.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-yoga-studio.html">Yoga Studio</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/yoga-studio.jpg)'}} /></li>
                  <li><a className="dropdown-item" href="landing-blog.html">Blog Homepage</a><span className="mega-dropdown-column position-absolute top-0 end-0 h-100 bg-size-cover bg-repeat-0 zindex-2 opacity-0" style={{backgroundImage: 'url(assets/img/megamenu/blog-homepage.jpg)'}} /></li>
                </ul>
              </div>
              <div className="mega-dropdown-column position-relative border-start zindex-3" />
            </div>
          </div>
        </li>
        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Pages</a>
          <ul className="dropdown-menu">
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="portfolio-list-v1.html">List View v.1</a></li>
                <li><a className="dropdown-item" href="portfolio-list-v2.html">List View v.2</a></li>
                <li><a className="dropdown-item" href="portfolio-grid-v1.html">Grid View v.1</a></li>
                <li><a className="dropdown-item" href="portfolio-grid-v2.html">Grid View v.2</a></li>
                <li><a className="dropdown-item" href="portfolio-slider.html">Slider View</a></li>
                <li><a className="dropdown-item" href="portfolio-single-v1.html">Single Project v.1</a></li>
                <li><a className="dropdown-item" href="portfolio-single-v2.html">Single Project v.2</a></li>
              </ul>
            </li>
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="shop-catalog.html">Catalog (Listing)</a></li>
                <li><a className="dropdown-item" href="shop-single.html">Product Page</a></li>
                <li><a className="dropdown-item" href="shop-checkout.html">Checkout</a></li>
              </ul>
            </li>
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="blog-grid-sidebar.html">Grid View with Sidebar</a></li>
                <li><a className="dropdown-item" href="blog-grid.html">Grid View no Sidebar</a></li>
                <li><a className="dropdown-item" href="blog-list-sidebar.html">List View with Sidebar</a></li>
                <li><a className="dropdown-item" href="blog-list.html">List View no Sidebar</a></li>
                <li><a className="dropdown-item" href="blog-single-v1.html">Single post v.1</a></li>
                <li><a className="dropdown-item" href="blog-single-v2.html">Single post v.2</a></li>
                <li><a className="dropdown-item" href="blog-single-v3.html">Single post v.3</a></li>
              </ul>
            </li>
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">About</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="about-agency.html">About - Agency</a></li>
                <li><a className="dropdown-item" href="about-product.html">About - Product</a></li>
              </ul>
            </li>
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="services-v1.html">Services v.1</a></li>
                <li><a className="dropdown-item" href="services-v2.html">Services v.2</a></li>
                <li><a className="dropdown-item" href="services-v3.html">Services v.3</a></li>
              </ul>
            </li>
            <li><a className="dropdown-item" href="pricing.html">Pricing</a></li>
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Contacts</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="contacts-v1.html">Contacts v.1</a></li>
                <li><a className="dropdown-item" href="contacts-v2.html">Contacts v.2</a></li>
                <li><a className="dropdown-item" href="contacts-v3.html">Contacts v.3</a></li>
              </ul>
            </li>
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Specialty Pages</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="404-v1.html">404 Error v.1</a></li>
                <li><a className="dropdown-item" href="404-v2.html">404 Error v.2</a></li>
                <li><a className="dropdown-item" href="404-v3.html">404 Error v.3</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Account</a>
          <ul className="dropdown-menu">
            <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Auth pages</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="account-signin.html">Sign In</a></li>
                <li><a className="dropdown-item" href="account-signup.html">Sign Up</a></li>
                <li><a className="dropdown-item" href="account-signinup.html">Sign In / Up</a></li>
                <li><a className="dropdown-item" href="account-password-recovery.html">Password Recovery</a></li>
              </ul>
            </li>
            <li><a className="dropdown-item" href="account-overview.html">Overview</a></li>
            <li><a className="dropdown-item" href="account-settings.html">Settings</a></li>
            <li><a className="dropdown-item" href="account-billing.html">Billing</a></li>
            <li><a className="dropdown-item" href="account-orders.html">Orders</a></li>
            <li><a className="dropdown-item" href="account-earnings.html">Earnings</a></li>
            <li><a className="dropdown-item" href="account-chat.html">Chat (Messages)</a></li>
            <li><a className="dropdown-item" href="account-favorites.html">Favorites (Wishlist)</a></li>
          </ul>
        </li>
        <li className="nav-item"><a className="nav-link" href="components/typography.html">UI Kit</a></li>
        <li className="nav-item"><a className="nav-link" href="docs/getting-started.html">Docs</a></li>
      </ul>
      <div className="d-sm-none p-3 mt-n3"><a className="btn btn-primary w-100  mb-1" href="https://themes.getbootstrap.com/product/around-multipurpose-template-ui-kit/" target="_blank" rel="noopener"><i className="ai-cart fs-xl me-2 ms-n1" />Buy now</a></div>
    </nav>
  </div>
</header>
</>

)
}

export default Header