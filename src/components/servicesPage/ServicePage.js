import React from 'react'
import img1 from '../../images/dermatologymain.jpg'
import './ServicePage.css'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function ServicePage() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="serviceImg">
          <img src={img1} alt="" />
        </div>
        <p className='serviceHeading' >Laser Treatment for Pigmentation</p>
        <div className="main">
          <div className="serviceContent">
            <p className='procedure' >The Procedure</p>
            <p>Many folks suffer from skin discoloration because of augmented local skin pigment (melanin) production. Internal bodily controls can resist overproduction, but with constant exposure and with ageing then over exposed skin can lose its aptitude to curb overproduction and result in long-term hyperpigmentation marks. If you wish to attain pigmentation-free skin, you can visit SkinQure clinic for effective pigmentation treatment. At our clinic, under the supervision of Dr. Jangid, various types of methods are used for the skin pigmentation treatment in Delhi. These methods include laser treatments, chemical peels and even techniques like microdermabrasion.</p>
          <div className="faq">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is pigmentation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is pigmentation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is pigmentation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is pigmentation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is pigmentation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What is pigmentation?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          </div>
          <div className="formB">
            <p className="formHeading">Schedule Your Appointment Now</p>
            <form action="">
              <input type="text" placeholder='Name' />
              <input type="email" placeholder='Email' />
              <input type="tel" placeholder='Phone Number' />
              <textarea name="" id="" cols="30" rows="5" placeholder='Meassage' ></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}
