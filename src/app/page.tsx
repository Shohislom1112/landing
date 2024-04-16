import React from "react";
import "@/app/global.scss";
import Image from "next/image";
import {
  app,
  back,
  back11,
  back2,
  back22,
  back3,
  back33,
  belgi,
  card,
  city,
  finger,
  han,
  hands,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  logo,
  logo2,
  man,
  people,
  tesla,
} from "@/assets";

const page = () => {
  return (
    <div className="bg-white">
      <div className="container">
      <header>
        <div className="header">
          <div className="card">
            <div className="card1">
              <div className="divs ">
                <div className="div1">                  <p className="p1">
                    Lessons and insights <span>from 8 years</span>
                  </p>
                  <p className="p2">
                    Where to grow your business as a photographer: site or
                    social media?
                  </p>
                  <button className="b1"> Register</button>
                </div>
                <div className="div2">
                  <Image src={back} alt="bc" className="image" />
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="divs">
                <div className="div1">
                  <p className="p1">Our Clients</p>
                  <p className="p2">
                    We have been working with some Fortune 500+ clients
                  </p>
                </div>
                <div className="div2">
                  <Image src={img1} className="img" alt="img" />
                  <Image src={img2} className="img" alt="img" />
                  <Image src={img3} alt="img" className="img" />
                  <Image src={img4} alt="img" className="img" />
                  <Image src={img5} alt="img" className="img" />
                  <Image src={img6} alt="img" className="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card_1">
              <div className="divs">
                <div className="div1">
                  <p className="pa1">
                    Manage your entire community in a single system
                  </p>
                  <p className="pa2">Who is Nextcent suitable for?</p>
                </div>
                <div className="div2">
                  <div className="div_1">
                    <div className="d1">
                      <Image src={city} alt="people" className="imag" />
                    </div>
                    <div className="d2">
                      <p className="pp">Membership Organisations</p>
                    </div>
                    <div className="d3">
                      <p className="pp2">
                        Our membership management software provides full
                        automation of membership renewals and payments
                      </p>
                    </div>
                  </div>
                  <div className="div_1">
                    <div className="d1">
                      <Image src={hands} alt="people" className="imag" />
                    </div>
                    <div className="d2">
                      <p className="pp">Membership Organisations</p>
                    </div>
                    <div className="d3">
                      <p className="pp2">
                        Our membership management software provides full
                        automation of membership renewals and payments
                      </p>
                    </div>
                  </div>
                  <div className="div_1">
                    <div className="d1">
                      <Image src={people} alt="people" className="imag" />
                    </div>
                    <div className="d2">
                      <p className="pp">Membership Organisations</p>
                    </div>
                    <div className="d3">
                      <p className="pp2">
                        Our membership management software provides full
                        automation of membership renewals and payments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card_2">
              <div className="divs">
                <div className="div1">
                  <Image src={back2} className="img" alt="" />
                </div>
                <div className="div2">
                  <p className="p1">
                    The unseen of spending three years at Pixelgrade
                  </p>
                  <p className="p2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sit amet justo ipsum. Sed accumsan quam vitae est varius
                    fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                    risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </p>
                  <button className="b1">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="cards">
          <div className="card1">
            <div className="divs">
              <div className="div1">
                <p className="p1">
                  Helping a local <br /> <span>business reinvent itself</span>
                </p>
                <p className="p2">
                  We reached here with our hard work and dedication
                </p>
              </div>
              <div className="div2">
                <div className="div">
                  <div className="div1">
                    <Image src={man} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">2,245,341</p>
                    <p className="p2">Members</p>
                  </div>
                </div>
                <div className="div">
                  <div className="div1">
                    <Image src={han} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    
                    <p className="p1">46,328</p>
                    <p className="p2">Clubs</p>
                  </div>
                </div><br />
                <div className="div">
                  <div className="div1">
                    <Image src={finger} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">828,867</p>
                    <p className="p2">Event Bookings</p>
                  </div>
                </div>
                <div className="div">
                  <div className="div1">
                    <Image src={card} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">1,926,436</p>
                    <p className="p2">Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card_2">
              <div className="divs">
                <div className="div1">
                  <Image src={back3} className="img" alt="" />
                </div>
                <div className="div2">
                  <p className="p1">
                  How to design your site footer like we did
                  </p>
                  <p className="p2">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                  </p>
                  <button className="b1">Learn More</button>
                </div>
              </div>
              <div className="div_s">
                <div className="div_1">
                  <Image src={tesla} alt="tesla" className="img" />
                </div>
                <div className="div_2">
                  <p className="p1">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                  </p>
                  <p className="p2">Tim Smith</p>
                  <p className="p3">British Dragon Boat Racing Association</p>
                  <div className="imgs"> 
                    <Image src={app} className="logo" alt="aa" />
                    <Image src={img1} className="logo" alt="aa" />
                    <Image src={img2} className="logo" alt="aa" />
                    <Image src={logo2} className="logo" alt="aa" />
                    <Image src={img4} className="logo" alt="aa" />
                    <Image src={img5} className="logo" alt="aa" />
                    <p className="pp">
                    Meet all customers
                    <Image src={belgi} alt="st" className="img"/>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <div className="card_23">
            <p className="p1">Caring is the new marketing</p>
            <p className="p2">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            <div className="divs">
              <div className="div1">
                <Image src={back11} className="img"  alt="" />
                <div className="text">
                  <p className="pp1">Creating Streamlined Safeguarding Processes with OneRen</p>
                  <p className="pp2">Readmore </p>
                </div>
              </div>
              <div className="div1">  <Image src={back22} className="img"  alt="" />
                <div className="text">
                  <p className="pp1">Creating Streamlined Safeguarding Processes with OneRen</p>
                  <p className="pp2">Readmore </p>
                </div></div>
              <div className="div1">  <Image src={back33} className="img"  alt="" />
                <div className="text">
                  <p className="pp1">Creating Streamlined Safeguarding Processes with OneRen</p>
                  <p className="pp2">Readmore </p>
                </div></div>
            </div>
          </div>



          <div className="card3">
            <p className="p1">Pellentesque suscipit fringilla libero eu.</p>
            <b className="b1">Get a Demo</b>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default page;
