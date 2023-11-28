import React from 'react';
// import { Link } from 'react-router-dom';



export default function Contact() {
    return (
        <main className='py-3'>
            <div className='fs-5 mt-5 text-center'>
                <h2 className='my-5 swing-in-top-fwd'>Contact</h2>
                <h5 className='tracking-in-contract'>Get in touch</h5>
                <div className='my-4 bounce-in-right'>
                    <i className="bi bi-envelope-at"></i> &nbsp;
                    vjy2080@gmail.com
                </div>
                <div className='my-4 bounce-in-left'>
                    <i className="bi bi-geo-alt-fill"></i> &nbsp;
                    Gandhinagar,Gujarat,India.
                </div>
                <div className='my-4 bounce-in-right'>
                    <i className="bi bi-telephone-inbound-fill"></i> &nbsp;
                    +91-9998517185
                </div>
            </div>

        </main>
    );
}
