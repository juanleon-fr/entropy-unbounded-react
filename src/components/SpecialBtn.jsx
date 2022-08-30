import React from 'react';

const Spbtn = (props) => {
    switch (props.color) {
        case ('color-10'):
            return (
                <button className="btn btn-color-10">
                    {props.input}
                    <div className='blackbar'></div>
                </button>
            );
        case ('color-30'):
            if (props.width === "100") {
                return (
                    <button className="btn btn-color-30 width100">
                        {props.input}
                        <div className='blackbar'></div>
                    </button>
                )
            }
            else {
                return (
                    <button className="btn btn-color-30">
                        {props.input}
                        <div className='blackbar'></div>
                    </button>
                )
            };
        case ('color-60'):
            return (
                <button className="btn btn-color-60">
                    {props.input}
                    <div className='blackbar'></div>
                </button>
            );
        default:
            return (
                <button className="btn link">
                    {props.input}
                    <div className='blackbar'></div>
                </button>
            );
    }
}
export default Spbtn