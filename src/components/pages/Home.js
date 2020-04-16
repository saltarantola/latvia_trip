import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import Info from '../info';

/* new additions below*/
import Jumbotron from 'react-bootstrap/Jumbotron'


 class Home extends Component {
   render() {
    return (
      <div className='container'>
         <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Bringing my ass to Latvia</h1>
    <p class="lead"></p>
  </div>
</div>
      
      <div className='row mt-5'> 
      <InfoConsumer>
        {data => {
          return data.info.map(item => {
            return <Info key={item.id} item={item} />;
          })
        }}
      </InfoConsumer>
        </div>

      </div>




      
    
  );
}
}

export default Home;