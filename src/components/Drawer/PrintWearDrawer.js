import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import arrow_right from '../../assets/arrow_right.png'
import printWearIMG1 from '../../assets/printWearIMG1.png'
import printWearIMG2 from '../../assets/printWearIMG2.png'

const PrintWearDrawer = () => {
    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Button className='printWearBTN' onClick={showDrawer}>
                Read more <img src={arrow_right} />
            </Button>
            <Drawer
                className='printWear-main'
                title='Print wear'
                placement='right'
                onClose={onClose}
                open={open}
            >
                <div className='printWearDrawerText'>
                    <p>
                        Profile clothing is available in many different designs, everything from work clothes with
                        protective properties to training clothes with functional properties for sports & sports.
                        What is common to all profile clothing is that it is clothing with print, whether it is
                        protective clothing or leisure clothing. When ordering profile clothing, for example
                        t-shirts or sweatshirts with print, it can be good to also order clothing with print that
                        can be used in leisure time by employees - to obtain maximum exposure of your logo and
                        brand. With us, you can always mix clothes freely, without any extra cost for profiling
                        with print & embroidery. Read more about &quot; <span>what is profile clothing really?</span> &quot; and &quot;<span> whyshould you even use profile clothing?</span> &quot; - also look at <span>everything else you need to know about profile clothing from our blog.</span>
                    </p>
                    <p>
                        Here you will find a large selection of suitable profile clothing with or without print
                        for your company, association or organization. Choose from the different categories under
                        profile clothing to find exactly your profile clothing at one of the market&apos;s lowest
                        prices. It&apos;s easy to shop for profile clothing at profilewear.se - read more about
                        frequently asked questions about how to shop for printed clothing with us at
                        profilewear.se &quot;Genuine textile profiling since 2012 - We know printed clothing!&quot;
                    </p>
                    <div className='printWear-ImgsText'>
                        <div className='printWear-imgs'>
                            <div className='printWear-img'> <img src={printWearIMG1} /></div>
                            <div className='printWear-img'> <img src={printWearIMG2} /></div>
                        </div>
                        <div className='printWear-text'>
                            <h6>Profile clothing with print</h6>
                            <p>
                                Profile clothing with print is needed by and large for all companies, associations and
                                organizations as it is undoubtedly the most important thing in printing & profiling
                                for all businesses to be seen, create team feeling and convey a professional
                                impression. In addition, printed clothing is also a very effective method of
                                expressing and conveying different messages with your logo or text. The areas of use
                                for profile clothing are endless in advertising & marketing, but also for campaigns at
                                various types of events in politics or charity to express messages.
                            </p>
                            <h6>Profile clothes for companies</h6>
                            <p>
                                Profile clothing is mostly used by companies for their clothing with prints that
                                employees can wear during their employment during working hours but also leisure time.
                                Profile clothing with printing for companies can be of different types - as the main
                                function of printing on clothing is to expose the company&apos;s logo and brand. On the one
                                hand, you can print work clothes that are used for work, but also advertising clothes
                                for different types of events and campaigns with different messages. For optimal
                                exposure of company clothes that are seen on a daily basis, it is also important to
                                choose the right clothes outside of work that are attractive to be worn by the staff
                                in their spare time. Therefore, it can be smart to provide your staff with additional
                                functional clothing with prints that are used more extensively during leisure time for
                                specific activities, as well as bearing in mind that the more discreet prints and
                                nicer clothes, the higher the propensity to be used more often. In this way, gifts in
                                the form of printed clothes for your employees, but also profiled clothes as giveaways
                                for your customers can be a very cost-effective marketing - your logo is basically
                                visible almost everywhere via walking advertising columns that convey your brand via
                                printed clothes.
                            </p>
                        </div>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
export default PrintWearDrawer
