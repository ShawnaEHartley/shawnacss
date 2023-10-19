import './Clock.css';

function Clock({hourRatio, minuteRatio, secondRatio}) {
  return (
      <div className='clock'>
        <div className="hand hour" style={{transform: `translate(-50%) rotate(${hourRatio *360}deg)`}}></div>
        <div className="hand minute" style={{transform: `translate(-50%) rotate(${minuteRatio *360}deg)`}}></div>
        <div className="hand second" style={{transform: `translate(-50%) rotate(${secondRatio *360}deg)`}}></div>

        <div className="number num1"><div>1</div></div>
        <div className="number num2"><div>2</div></div>
        <div className="number num3"><div>3</div></div>
        <div className="number num4"><div>4</div></div>
        <div className="number num5"><div>5</div></div>
        <div className="number num6"><div>6</div></div>
        <div className="number num7"><div>7</div></div>
        <div className="number num8"><div>8</div></div>
        <div className="number num9"><div>9</div></div>
        <div className="number num10"><div>10</div></div>
        <div className="number num11"><div>11</div></div>
        <div className="number num12"><div>12</div></div>
      </div>
  )
}

export default Clock;