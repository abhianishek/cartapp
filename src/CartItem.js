import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 9999,
            title:"Mobile phone",
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this)
    }
    increaseQuantity = () => {
        console.log("text")
        this.qty+=1
    }
    render() {
        const {price, title, qty} = this.state
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={{height:"100px" , width:"100px", borderRadius:4, background:'#ccc'}}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'blue'}}>Rs. {price}</div>
                    <div style={{color:'red'}}>{qty}</div>
                    <div className='cart-item-actions'>
                        <img alt="increase" className='action-icons' src="https://cdn-icons-png.flaticon.com/512/262/262038.png" onClick={this.increaseQuantity}/>
                        <img alt="decrease" className='action-icons' src="https://icons.veryicon.com/png/o/education-technology/online-school-applet/minus-icon.png"/>
                        <img alt="delete" className='action-icons' src="https://www.svgrepo.com/show/21045/delete-button.svg"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;