import React from 'react'
import { Collapse } from 'antd';
import { BsPlusLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';


const text = `A shirt with a print can look many different ways, for example, it can be a regular t-shirt, a stylish polo shirt or a regular classic college shirt. In addition, you can choose between different materials for your printed sweaters, such as cotton in sweatshirts or polyester in fleece sweaters, among others. Not only that, the choices are endless as there are many different models of shirts for printing. In addition, you can choose unisex if you want to have your own shirts with prints that suit all genders, and there are also customized men's and women's shirts with different fits, not to mention baby and children's shirts. When you want to print your own prints on sweaters, it is most common to choose screen printing, in combination with a cheap cotton sweater.
`
const FAQaccordion = () => {
    const { Panel } = Collapse
    return (
        <div className='information-container'>
            <h2 className='informationHeading'>Frequently asked questions & answers</h2>
            <Collapse accordion className='questions' expandIcon={({ isActive }) => !isActive ? <BsPlusLg /> : <RxCross2 />} expandIconPosition={'end'}>
                <Panel header="How long do you store my data?"  >
                    <div>
                        <h6>Where do you store my data?</h6>
                        <p>
                        We store your data in a secure and encrypted database. When you order online, your data is stored at Svea Webpay, Fortnox Finans and Swedish Profile Wear AB. You can ask to have your data deleted at any time by contacting <span style={{color: '#11505D', fontFamily: "Barlow"}}>hej@profilewear.se.</span>
                        </p>,
                    </div>
                </Panel>
                <Panel header="I want you to delete my data, how do I do it?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="I want to change the information you have about me, how do I do it?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="I want to share the information you have registered about me">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="I have signed up for your newsletter but do not want to stay, what do I do?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Who can access my information?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
            </Collapse>
        </div >
    )
}

export default FAQaccordion
