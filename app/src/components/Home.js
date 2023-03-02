import React from 'react'
const divStyle = {
  border: 0, 
  height: '500px',
  width: '100%'
};
export default function Home() {
  return (
    
<body>
  <div class="hero_area">
  
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
          <a class="navbar-brand" href="Home.js">
          
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">`
              <a href='/Home.js'>
              <img class='img2' src="/images/aloyt.png" alt="" />
              </a>
                <li class="nav-item active">
                  <a class="nav-link" href="Home.js">Home <span class="sr-only">(current)</span></a>
                  
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/About.js">
                    
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
 

    <section class="slider_section">
      <div class="slider_container">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
           
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">
            
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">
          
            </li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 px-0">
                    <div class="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                      {/* <img src="images/out.jpg" alt="" /> */}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                        Design
                        <br />
                        Website
                      </h1>
                      <p>
                        There are many variations of Website templates available, but the
                      </p>
                      <a href="#/">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 px-0">
                    <div class="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                      {/* <img src="images/out.jpg" alt="" /> */}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                        Design
                        <br />
                        Websites
                      </h1>
                      <p>
                        There are many variations of Website templates available, but the
                      </p>
                      <a href="#/">
                        get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 px-0">
                    <div class="img-box">
                      <img src="images/slider-img.jpg" alt="" />
                      {/* <img src="images/out.jpg" alt="" /> */}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="detail-box">
                      <h1>
                        Design
                        <br/>
                        Websites
                      </h1>
                      <p>
                        There are many variations of Website templates available, but the
                      </p>
                      <a href="getstarted.html">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-box">
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <img src="images/line.png" alt="" />
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>

  
 

  <section class="service_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          PRO<span>DU</span>CTS
        </h2>
        <p>
          Get access to customizable webpage designs and useful tools to build your website and grow your ideal business. Easily build a free website to help you get discovered and grow your customer base in style. Start today with our powerful free website builder.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-6 ">
          <div class="img-container tab-content">
            <div class="img-box tab-pane fade show active" id="img1" role="tabpanel">
              <img src="images/service-img.jpg" alt="" />
            </div>
            <div class="img-box tab-pane fade  " id="img2" role="tabpanel">
              <img src="images/service-img.jpg" alt="" />
            </div>
            <div class="img-box tab-pane fade  " id="img3" role="tabpanel">
              <img src="images/service-img.jpg" alt="" />
            </div>
            <div class="img-box tab-pane fade  " id="img4" role="tabpanel">
              <img src="images/service-img.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="detail-container nav nav-tabs" id="myTab" role="tablist">
            <div class="detail-box active" id="img1-tab" data-toggle="tab" href="#img1" role="tab" aria-selected="true">
              <h4>
                Website <br />
                design
              </h4>
            </div>
            <div class="detail-box" id="img2-tab" data-toggle="tab" href="#img2" role="tab" aria-selected="false">
              <h4>
                Website <br />
                Templates
              </h4>
            </div>
            <div class="detail-box" id="img2-tab" data-toggle="tab" href="#img3" role="tab" aria-selected="false">
              <h4>
                Website <br />
                Builder
              </h4>
            </div>
            <div class="detail-box" id="img2-tab" data-toggle="tab" href="#img4" role="tab" aria-selected="false">
              <h4>
                Logo <br />
                design
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="#/">
          Read More
        </a>
      </div>
    </div>
  </section>


  <section class="portfolio_section">
    <div class="heading_container">
      <h2>
        TEM<span>PLA</span>TES
      </h2>
      <p>
        Beautiful Templates created by top designers make your website look polished and professional on any device. Every theme is ready to launch immediately and is fully customizable.
      </p>
    </div>
    <div class="portfolio_container layout_padding">
      <div class="box-1">
        <div class="img-box b-1">
          <img src="images/tem1.jpg" alt=""/>
          <div class="btn-box">
            <a href="#/" class="btn-1">

            </a>
            <a href="#/" class="btn-2">

            </a>
          </div>
        </div>
        <div class="img-box b-2">
          <img src="images/p2.jpg" alt=""/>
          <div class="btn-box">
            <a href="#/" class="btn-1">

            </a>
            <a href="#/" class="btn-2">

            </a>
          </div>
        </div>
      </div>
      <div class="box-2">
        <div class="img-box b-3">
          <img src="images/p3.jpg" alt=""/>
          <div class="btn-box">
            <a href="#/" class="btn-1">

            </a>
            <a href="#/" class="btn-2">

            </a>
          </div>
        </div>
        <div class="img-box b-4">
          <img src="images/p4.jpg" alt=""/>
          <div class="btn-box">
            <a href="#/" class="btn-1">

            </a>
            <a href="#/" class="btn-2">

            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

   <section class="logo_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          A N<span>EW</span> Logo 
          FOR YOUR COMPANY
        </h2>
        <p>
          A logo is an easily recognizable graphic symbol that identifies a company, a commercial product, or any public or private entity. It is one of the ways to distinguish a brand in a competitive world, full of graphic elements that try to attract our attention every day
        </p>
      </div>
    </div>
    <div class="logo_container layout_padding">
    <div class="img-box1">
                <img src="images/l1.jpg" alt=""/>
                <img src="images/l2.jpg" alt=""/>
                <img src="images/l3.jpg" alt=""/>
                <img src="images/l4.jpg" alt=""/>
                <img src="images/l5.jpg" alt=""/>
                <img src="images/l6.jpg" alt=""/>
              </div>
      
    </div>
  </section> 

  <section class="started_section layout_padding-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                Lets <span>Get</span> Started 
                Your Project
              </h2>
              <p>
                Design your website ease with us.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 offset-md-1">
          <div class="btn-box">
            <a href="#/">
              Let’s talk
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="agency_section layout_padding-bottom">
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

  <section class="contact_section layout_padding">
    <div class="container px-0">
      <div class="heading_container">
        <h2 class="">
          Con<span>ta</span>ct Us
        </h2>
      </div>

    </div>
    <div class="container container-bg">
      <div class="row">
      <div class="col-lg-8 col-md-7 px-0">
          <div class="map_container">
            <div class="map-responsive">
              <iframe
                title="This is a unique and descriptive title"
                src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=19.25914,72.98443&output=embed&q=Hiranandani+Estate,+Thane+West,+Thane,+Maharashtra+400607,+India+(ALOYT+-+THE+TECHNOLOGY+COMPANY)&z=17"
                style={divStyle}
                ></iframe>
                
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-4 px-0">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input type="text" class="message-box" placeholder="Message" />
            </div>
            <div class="d-flex ">
              <button>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


  <section class="client_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container">
        <h2>
          What <span>says</span> our clients
        </h2>
      </div>
      <div class="box">
        <div class="client_id">
          <div class="name">
            <h4>
              Saurab 
              Patil
            </h4>
          </div>
          <div class="img-box">
            <img src="images/client.jpg" alt=""/>
          </div>
          
          <div class="name">
            <h4>
              Rohit 
              Patil
            </h4>
          </div>
          <div class="img-box">
            <img src="/images/myself.png" alt=""/>
          </div>
          <div class="name">
            <h4>
              Vishal 
              Pardeshi
            </h4>
          </div>
          <div class="img-box">
            <img src="/images/vishal.jpeg" alt=""/>
          </div>
        </div>
       
        <div class="detail-box">
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem
          </p>
          <img src="images/quote.png" alt=""/>
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
          <a href="https://html.design/"> Rohit Patil</a>
        </p>
      </div>
    </section>
 

  </section>
  </div>



  <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/bootstrap.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js">
  </script>
  <script type="text/javascript" src="js/custom.js"></script>


  
</body>
  )
}
