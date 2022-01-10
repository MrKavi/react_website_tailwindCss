import React from 'react'
import Icon1 from '../../Images/svg1.svg'
import Icon2 from '../../Images/svg2.svg'
import Icon3 from '../../Images/svg3.svg'

import { SCard, SContainer, SH1, SH2, SIcon, SP, SWrapper } from './ServicesStyle'

const Services = () => {
    return (
        <SContainer>
            <SH1>Our Services</SH1>
                <SWrapper>
                    <SCard>
                        <SIcon src={Icon1}/>
                            <SH2>Increase Income</SH2>
                                <SP>Learn awesome technologies with us and boost your income</SP>
                    </SCard>
                    <SCard>
                        <SIcon src={Icon2}/>
                            <SH2>Virtual Offices</SH2>
                                <SP>Now we are on your computer.. Learn with our best teachers online</SP>
                    </SCard>
                    <SCard>
                        <SIcon src={Icon3}/>
                            <SH2>Benifits</SH2>
                                <SP>We are providing u all the necessory steps to get your job</SP>
                    </SCard>
                </SWrapper>
        </SContainer>
    )
}

export default Services
