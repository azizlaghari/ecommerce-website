import React from 'react'
import { Collapse } from 'antd';
import { BsPlusLg } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';


const text = `A shirt with a print can look many different ways, for example, it can be a regular t-shirt, a stylish polo shirt or a regular classic college shirt. In addition, you can choose between different materials for your printed sweaters, such as cotton in sweatshirts or polyester in fleece sweaters, among others. Not only that, the choices are endless as there are many different models of shirts for printing. In addition, you can choose unisex if you want to have your own shirts with prints that suit all genders, and there are also customized men's and women's shirts with different fits, not to mention baby and children's shirts. When you want to print your own prints on sweaters, it is most common to choose screen printing, in combination with a cheap cotton sweater.

If you want to print on shirts made of other materials, then another printing method may be more suitable - for example transfer printing on polyester sweaters. When it comes to the optimal size and placement of your own print on sweaters, it can vary - for example, for hoodies with print when you have to take into account that the back for prints on hoodies is partially obscured by the hood and needs a lower print placement if back print is desired.

In some contexts, slightly more stylish shirts with prints are required for companies, then you can instead consider a shirt with embroidery as marking instead of regular prints - especially when it comes to printed piques.
`
const InformationAccordion = () => {
    const { Panel } = Collapse
    return (
        <div className='information-container'>
            <h2 className='informationHcontainereading'>Some more information for you</h2>
            <Collapse accordion className='questions' expandIcon={({ isActive }) => !isActive ? <BsPlusLg /> : <RxCross2 />} expandIconPosition={'end'}>
                <Panel header="T-shirts with print"  >
                    <div>
                        <h6>Shirts with own print </h6>
                        <p>
                            A shirt with a print can look many different ways, for example, it can be a regular t-shirt, a stylish polo shirt or a regular classic college shirt. In addition, you can choose between different materials for your printed sweaters, such as cotton in sweatshirts or polyester in fleece sweaters, among others. Not only that, the choices are endless as there are many different models of shirts for printing. In addition, you can choose unisex if you want to have your own shirts with prints that suit all genders, and there are also customized men&apos;s and women&apos;s shirts with different fits, not to mention baby and children&apos;s shirts. When you want to print your own prints on sweaters, it is most common to choose screen printing, in combination with a cheap cotton sweater.
                            <br />
                            If you want to print on shirts made of other materials, then another printing method may be more suitable - for example transfer printing on polyester sweaters. When it comes to the optimal size and placement of your own print on sweaters, it can vary - for example, for hoodies with print when you have to take into account that the back for prints on hoodies is partially obscured by the hood and needs a lower print placement if back print is desired.

                            In some contexts, slightly more stylish shirts with prints are required for companies, then you can instead consider a shirt with embroidery as marking instead of regular prints - especially when it comes to printed piques.
                        </p>,
                    </div>
                </Panel>
                <Panel header="Headwear with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Caps with own print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Caps with embroidery">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Hats with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Headband & sweatband with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Jackets with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Caps with embroidery">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Hats with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Headband & sweatband with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
                <Panel header="Jackets with print">
                    <div><p>this is panel 1 {text}</p></div>
                </Panel>
            </Collapse>
        </div >
    )
}

export default InformationAccordion
