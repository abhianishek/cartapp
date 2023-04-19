import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={{height:"100px" , width:"100px", borderRadius:4, background:'#ccc'}}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'blue'}}>Price</div>
                    <div style={{color:'red'}}>1</div>
                    <div className='cart-item-actions'></div>
                    {/* button */}
                </div>
            </div>
        )
    }
}
export default CartItem;