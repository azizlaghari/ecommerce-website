import React from 'react'
import '../styles/components/ProductListing/LeftCollapse.css'
import { Collapse, Slider, Tooltip } from 'antd';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { BsCheck2 } from 'react-icons/bs';
import { CgMailReply } from 'react-icons/cg';

const onAfterChange = (value) => {
  console.log('onAfterChange: ', value);
};

const LeftCollapse = ({ hideCollapseTags }) => {

  const onChange = (key) => {
    console.log(key);
  };
  const { Panel } = Collapse
  return (
    <>
      <div className='LeftCollapse'>
        <Collapse defaultActiveKey={['4', '2', '1', '0']} onChange={onChange} className='leftCollapse-Container' expandIcon={({ isActive }) => !isActive ? <IoMdArrowDropdown /> : <IoMdArrowDropup />} expandIconPosition={'end'}>
          <Panel header="Sub-categories"  >
            <div className='Sub-categories-data'>
              <p className='Sub-categories-text'>Male T-shirts   (60)</p>
              <p className=' greenTextBTN'> <BsCheck2 /> T-shirts Lady   (12)</p>
              <div className='Sub-categories-BTNs'>
                <button className='Sub-categories-leftBTN'>Performance T-shirts (06)</button>
                <button className='Sub-categories-rightBTN'>Soft T-shirts (06)</button>
              </div>
              <p className='Sub-categories-text'>Contrast T-shirts   (12)</p>
              <p className='Sub-categories-text'>Body-fit T-shirts   (12)</p>
            </div>
          </Panel>
          <Panel header="Price">
            <div className='Price-data'>
              <p className='priceAmount'>50.00 SEK - 120.00 SEK</p>
              <Slider
                className='priceSlider'
                range
                step={10}
                defaultValue={[20, 50]}
                onChange={onChange}
                onAfterChange={onAfterChange}
              />
            </div>
          </Panel>
          <Panel header="Color">
            <div className='colorsData'>
              <div>
                <Tooltip placement="bottom" title={'Sour Dough'}>
                  <div className="circle" style={{ background: '#CDBB97' }}></div>
                </Tooltip>
                <Tooltip placement="bottom" title={'Blue'}>
                  <div className="circle" style={{ background: '#0029FF' }}></div>
                </Tooltip>
                <Tooltip placement="bottom" title={'Dark Goldenrod'}>

                  <div className="circle" style={{ background: '#9D7900' }}></div>
                </Tooltip>
                <Tooltip placement="bottom" title={'Rainbow'}>

                  <div className="circle" style={{ background: 'conic-gradient(#00FF02 ,#FFFF02, #FF7F00, #FF0000 ,#0000FF, #4A0082, #0142BE)' }}></div>
                </Tooltip>
                <Tooltip placement="bottom" title={'Pink Swan'}>

                  <div className="circle" style={{ background: '#B7B7B7' }}></div>
                </Tooltip>
                <Tooltip placement="bottom" title={'Green'}>

                  <div className="circle" style={{ background: '#008100' }}></div>
                </Tooltip>

              </div>
              <div>
                <div className="circle" style={{ background: '#FEFD03' }}></div>
                <div className="circle" style={{ background: '#8B2CDE' }}></div>
                <div className="circle" style={{ background: '#1EF916' }}></div>
                <div className="circle" style={{ background: '#A4C2F4' }}></div>
                <div className="circle" style={{ background: '#EFEFEF' }}></div>
                <div className="circle" style={{ background: '#FF39FE' }}></div>
              </div>
              <div>
                <div className="circle" style={{ background: '#083763' }}></div>
                <div className="circle" style={{ background: '#1C4C00' }}></div>
                <div className="circle" style={{ background: '#A51C09' }}></div>
                <div className="circle" style={{ background: '#F5F7DF' }}></div>
                <div className="circle" style={{ background: '#FE9901' }}></div>
                <div className="circle" style={{ background: '#FF2615' }}></div>
              </div>
              <div>
                <div className="circle" style={{ background: '#FFBFCB' }}></div>
                <div className="circle" style={{ background: '#26CEFF' }}></div>
                <div className="circle" style={{ background: '#FFFFFF' }}></div>
                <div className="circle" style={{ background: '#000000' }}></div>
              </div>
            </div>
          </Panel>
          <Panel header="Type of Print">
            <div className='printData'>

            </div>
          </Panel>
          <Panel header="Material">
            <div className='materialData'>
              <p className=' greenTextBTN'> <BsCheck2 /> 100% Cotton   (07)</p>
              <p className='Sub-categories-text'>Blandmaterial   (03)</p>
              <p className=' greenTextBTN'> <BsCheck2 /> Cotton   (11)</p>
              <p className=' greenTextBTN'> <BsCheck2 /> Polyester   (04)</p>
              <p className='Sub-categories-text'>Viscous   (05)</p>

            </div>
          </Panel>
          <Panel header="Weight">
            <div className='weightData'>

            </div>
          </Panel>
          <Panel header="Sleeve">
            <div className='sleeveData'>

            </div>
          </Panel>
          <Panel header="Certificate">
            <div className='certificateData'>

            </div>
          </Panel>
          <Panel header="Brands">
            <div className='brandsData'>

            </div>
          </Panel>
          {!hideCollapseTags && <div className='tagsLeft'>
            <p className='tagsLeft-heading'>Check out more from Printwear</p>
            <div className='leftCollapse-tags'>
              <p className='tags'>thermomuggar</p>
              <p className='tags'>Water bottles</p>
              <p className='tags'>Promotional pens</p>
              <p className='tags'>Notepad</p>
              <p className='tags'>Keychain</p>
              <p className='tags'>print </p>
              <p className='tags'>tap toys & games</p>
            </div>
            <button className='leftCollapse-replyBTN'><CgMailReply />Go back to main category</button>
          </div>}
        </Collapse>
      </div>
    </>
  )
}

export default LeftCollapse
