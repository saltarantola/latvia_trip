import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className='main-footer'>
      <div className='footer-middle'>

      
      <div className='container'>
        <div className='row'>
          {/* Column 1 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Lorem ip sum</h4>
            <ul className='list-unstyled'>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>
              <li> 4 </li>
            </ul>
            </div>
            {/* Column 2 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Lorem ip sum</h4>
            <ul className='list-unstyled'>
              <li><a href="/"> 1 </a></li>
              <li><a href="/"> 2 </a></li>
              <li><a href="/"> 3 </a></li>
              <li><a href="/"> 4 </a></li>
            </ul>
            </div>
            {/* Column 3 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Lorem ip sum</h4>
            <ul className='list-unstyled'>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>
              <li> 4 </li>
            </ul>
            </div>
            {/* Column 4 */}
          <div className='col-md-3 col-sm-6'>
            <h4>Lorem ip sum</h4>
            <ul className='list-unstyled'>
              <li> 1 </li>
              <li> 2 </li>
              <li> 3 </li>
              <li> 4 </li>
            </ul>
            </div>
          </div>
         {/*Footer Bottom*/}
         <div className="footer-bottom">
         <p className='text-sx-center'> 
         &copy;{new Date().getFullYear()} Latvian Page created by Sal
         </p> 

         </div>
          </div>
          </div>
          </FooterContainer>
  )
}

export default  Footer;

const FooterContainer = styled.footer`
  .footer-middle {
  background: var(--mainDark);
  padding-top: 3rem;
  color: var(--mainWhite);
  }

  .footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;

  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;