import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Contacts extends Component {
   render() {
    return (
    <section className='my-5 py-5'>
      <div className='container'>
        <div className='well well-sm'>
          <h3><strong>Our Location</strong></h3>
        </div>
      
      <div className='col-md-7'>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rHeG6YS0VtbU7sDbJt2vYHmlifX1ZkzP" style={{
        border: '0',
        width: '100%',
        height: '315px',
        frameborder: '0',
      }} allowFullScreen></iframe>
      </div>
      <div className='col-md-5'>
        <h4><strong>Contact us</strong></h4>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='name'/>
          </div>
          <div className='form-group'>
            <input type='Email' className='form-control' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input type='Phone' className='form-control' placeholder='Phone'/>
          </div>
          <textarea className='form-control' cols="30" rows="3" placeholder='Message'/> 
          <Link className=' btn btn-outline-primary text-uppercase mt-2'>
            <i className='fa fa-paper-plane-o' aria-hidden='true'/>
            <i className='fab fa-telegram-plane'/>&nbsp;Send
          </Link>
        </form>
      </div>
      </div>
    </section>
  );
}
}

export default Contacts;