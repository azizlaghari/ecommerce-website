import React from 'react'
import { Collapse } from 'antd';
import { BsPlusLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';


const text = `A shirt with a print can look many different ways, for example, it can be a regular t-shirt, a stylish polo shirt or a regular classic college shirt. In addition, you can choose between different materials for your printed sweaters, such as cotton in sweatshirts or polyester in fleece sweaters, among others. Not only that, the choices are endless as there are many different models of shirts for printing. In addition, you can choose unisex if you want to have your own shirts with prints that suit all genders, and there are also customized men's and women's shirts with different fits, not to mention baby and children's shirts. When you want to print your own prints on sweaters, it is most common to choose screen printing, in combination with a cheap cotton sweater.
`
const FAQPageAccordin = () => {
    const { Panel } = Collapse
    return (
        <div className='information-container'>
            <Collapse accordion className='questions' expandIcon={({ isActive }) => !isActive ? <BsPlusLg /> : <RxCross2 />} expandIconPosition={'end'}>
                <Panel header="How do I buy printed clothes?"  >
                    <div>
                        <h6>Minimum number of clothes to profile?</h6>
                        <p>
                        We do not have a minimum number. Minimum profiling cost is SEK 1,200 excl. VAT. As a customer, you can store prints with us for up to 1 (one) year. Get in touch with us and we will find a plan that is just right for you.
                        </p>
                    </div>
                </Panel>
                <Panel header="Can I print with different prints and individual names?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="How do print prices work?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="What is profiling/printing?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Can I get a proof/sketch?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Can I get samples with print?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Can I order sample garments?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Do you offer embroidery, how does it work?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Can you print my own clothes?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Are there other goods than those offered in the online shop?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="What type of logo should I send?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="What are color codes and Pantone/PMS code?">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
            </Collapse>
        </div >
    )
}

export default FAQPageAccordin
