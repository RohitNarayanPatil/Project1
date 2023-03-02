import React from 'react'

export default function About() {
  return (
    
<body class="sub_page">
  <div class="hero_area">

    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="Home.js">
           
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
              <a href='/Home.js'>
              <img class='img2' src="/images/aloyt.png" alt="" />
              </a>
                <li class="nav-item ">
                  <a class="nav-link" href="Home.js">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="About.js">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Product.js">
                    PRODUCTS
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Template.js">
                    Templates
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Contact.js">Contact Us</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
    
  </div>

  <section class="agency_section layout_padding2-top">
    <div class="agency_container ">
      <div class="box ">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
              About <span>Design</span> Agency
            </h2>
          </div>
          <p>
            The Aloyt website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.
         </p>
          <a href="#/">
            Read More
          </a>
        </div>
      </div>
    </div>
  </section>


  <section class="info_section  layout_padding2-top">
    <div class="social_container">
      <div class="social_box">
        <a href="#/">
          <img src="images/fb.png" alt=""/>
        </a>
        <a href="#/">
          <img src="images/twitter.png" alt=""/>
        </a>
        <a href="#/">
          <img src="images/linkedin.png" alt=""/>
        </a>
        <a href="#/">
          <img src="images/youtube.png" alt=""/>
        </a>
      </div>
    </div>
    <div class="info_container ">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <h6>
              ABOUT US
            </h6>
            <p>
              The Aloyt website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              Instagram
            </h6>
            <p>
              The all-in-one web dev platform for businesses, entrepreneurs and creatives. Achieve your vision with Aloyt. <div id="growwithAloyt"></div> to get featured.
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              NEED HELP
            </h6>
            <p>
              Our specialists are always happy to help. Contact us during standard business hours or email us 24/7 and we'll get back to you.
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h6>
              CONTACT US
              
                </h6>
                <div class="info_link-box">
                  <a href="#/">
                    <img src="images/location.png" alt=""/>
                    <span> ALOYT - THECHNOLOGY COMPANY Thane East</span>
                  </a>
                  <a href="#/">
                    <img src="images/call.png" alt=""/>
                    <span>+91 777 5020 666</span>
                  </a>
                  <a href="#/">
                    <img src="images/mail.png" alt=""/>
                    <span> support@aloyt.com</span>
                  </a>
              </div>
          </div>
          </div>
        </div>
      </div>
 
    
 
    <section class=" footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Rohit Patil</a>
        </p>
      </div>
    </section>


  </section>
</body>
  )
}
