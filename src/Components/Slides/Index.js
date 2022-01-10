import React, { useState } from 'react'
import { ArrowForward, ArrowRight, Content, ContentBtnWrapper, H1Content, PContent, SlideBg, SlideSection, VideoBg } from './SlidesStyle';
import Video from '../../Videos/video.mp4' 
import { Button } from '../ButtonStyle';
import Typical from 'react-typical'

const Slide = ({primary, dark, dark2}) => {

const [hover, setHover]= useState(false)

const onHover = () =>{
    setHover(!hover)
}

  return (
        <SlideSection>
            <SlideBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </SlideBg>
            <Content>
                <H1Content>
                    Registeration open for 2021-22
                </H1Content>
                <PContent>
                    <Typical
        steps={['Sign up for a new account today and get 40% off!', 1000,]}
        loop={Infinity}
        wrapper="p"
      />
                </PContent>
                <ContentBtnWrapper>
                    <Button primary={primary ? 0:1} dark={dark ? 0:1}
                              dark2={dark2 ? 1:0} to='/signup' onMouseEnter={onHover} onMouseLeave={onHover}
                   >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </ContentBtnWrapper>
            </Content>
        </SlideSection>
    );
};

export default Slide


