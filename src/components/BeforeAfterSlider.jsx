import React, {useState} from 'react';

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt='Before tree service',
  afterAlt='After tree service',
}) {
  const [position, setPosition] = useState(50);
  return (
    <div className="beforeAfter" style={{'--position': `${position}%`}}>
      <img className="afterImage" src={afterSrc} alt={afterAlt}/>
      <div className="beforeImageWrap"><img src={beforeSrc} alt={beforeAlt}/></div>
      <span className="compareLabel beforeLabel">Before</span>
      <span className="compareLabel afterLabel">After</span>
      <div className="compareLine" aria-hidden="true"><span>↔</span></div>
      <input
        className="compareRange"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event)=>setPosition(event.target.value)}
        aria-label="Drag to compare the property before and after tree removal"
      />
    </div>
  );
}
