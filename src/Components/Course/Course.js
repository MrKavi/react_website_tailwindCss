import React from 'react'
import { Button } from '../ButtonStyle'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// import AOS from 'aos';
import 'aos/dist/aos.css';

import { BtnWrap, Column1, Column2, CourseContainer, CourseWrapper, CRow, Heading, Img, ImgWrap, Subtitle, TextWrapper, TopLine } from './CourseStyle'

const Course = ({lightBg, id, lightText, topLine, darkText, buttonLabel, img, alt, description, heading, imgStart, primary, dark, dark2 }) => {
    return (
        <>
          <CourseContainer lightBg={lightBg} id={id}>
              <CourseWrapper>
                  <CRow imgStart={imgStart}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{heading}</Heading>
                         <Fade right duration={2000}>
                          <Subtitle lightText={lightText} darkText={darkText}>{description}</Subtitle>
                          </Fade>
                          <BtnWrap>
                              <Button to='home'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={primary ? 1:0}
                              dark={dark ? 1:0}
                              dark2={dark2 ? 0:1}

                              >{buttonLabel}</Button>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                    <Zoom duration={2000}>
                      <ImgWrap>
                      <Img  src={img} alt={alt}/>
                      </ImgWrap>
                     </Zoom>
                      </Column2>
                  </CRow>
              </CourseWrapper>
              </CourseContainer>  
        </>
    )
}

export default Course
