import React from 'react';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumpster, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Shop = () => {
    return (
        <div className='shop'>
            <div className="products">
                this is product
            </div>
            <div className="summary">
                <div>
                    <h5>Order Summary</h5>
                </div>
                <div className='summary-sum'>
                    <p>selected item:</p>
                    <p>Total Price: $</p>
                    <p>Total Shipping Cost: $</p>
                    <p>Tax : $</p>
                    <p>Grand Total: $</p>
                </div>
                <div className='btn'>
                    <button className='btn-1'>
                        <p>Clear Cart</p>
                        <FontAwesomeIcon icon={faDumpster}></FontAwesomeIcon>
                    </button>
                    <br />
                    <button className='btn-2'>
                        <p>Review Order</p>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shop;