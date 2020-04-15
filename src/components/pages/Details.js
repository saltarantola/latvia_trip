import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import styled from 'styled-components';
import Reviews from '../Reviews'




 class Details extends Component {
   render() {
    return (
    <InfoConsumer>
      {data => {
        const {
        id,
        headerTitle,
        headerSubTitle,
        headerText,
        img,
        title,
        maps,
        descripton
      } = data.detailInfo;

      return (
        <React.Fragment>
          <HeaderDetails className="container-fluid align-items-center">
            <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
            <h4 className="display-5">{headerSubTitle}</h4>
            <p>{headerText}</p>
            {/*-- social icons */}
            <div className='row justify-content-center'>
              <div className='col-2'>
                <i className="fab fa-facebook-f">

                </i>
              </div>
              <div className='col-2'>
                <i className="fab fa-twitter">
                  
                </i>
              </div>
              <div className='col-2'>
                <i className="fab fa-google-plus-g"></i>
              </div>
              <div className='col-2'>
                <i className="fab fa-reddit">
                  </i>
              </div>
              <div className='col-2'>
                <i className="fab fa-whatsapp">
                  
                </i>
              </div>

            </div>

          </HeaderDetails>
        {/* Nav Links */}
        <div className="container">

          <ul className='nav nav-tabs'>
            {/* About Place Link */}
            <li className='nav-item'>
              <a href="#aboutPlace" className='nav-link' role='tab' data-toggle='tab'>About Place</a>
            </li>
            {/* Reviews Link */}
            <li className='nav-item'>
              <a href="#reviews" className='nav-link' role='tab' data-toggle='tab'>Reviews</a>
            </li>
            {/* MAP Link */}
            <li className='nav-item'>
              <a href="#maps" className='nav-link' role='tab' data-toggle='tab'> MAP </a>
            </li>
          </ul>
          {/* Tab Plane */}
          <div className='tab-content mb-5'>
            {/* About Place Tab */}
            <div id='aboutPlace' className='tab-pane in active text-center mt-5' role='tabpanel'>
              <h2 className="mb-3">{title}</h2>
              <p>{descripton}</p>
              <img src={img} alt={title} className='img-thumbnail img-fluid'/>

            </div>
            {/* Reviews */}
            <div className='tab-pane' id='reviews' role='tabpanel'>
            <Reviews />
            </div>
            {/* MAP */}
            <div className='tab-pane' id='maps' role='tabpanel'>
             <iframe src={maps} style={{border: '0', height: '28.125rem', width: '100%', frameborder: '0'}}> Iframe here</iframe>
            </div>
          </div>
        </div>
        </React.Fragment>
      );

    
      }}
      </InfoConsumer>
  );
}
}

export default Details;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 40vh;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;

h1 {
  padding-top:10%
  color: var(--mainDark);
}

h4 {
  color: var(--mainDark);
}

p {
  padding-left:10%;
  padding-right: 10%;
  margin-bottom: 10%
  color: var(--mainDark);
}


i {
  font-size: 1.875rem;
  color: car(--mainDark);
}

i:hover {
  color: var(--mainBlue);
  cursor: pointer;
}

.nav-item {
  height:18.75rem;4
}

@media(max-width: 760px) {
  h1,h4{
    color: var(--mainWhite);
  }
}
`;


