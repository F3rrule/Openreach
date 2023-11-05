import React from 'react';
import axios from 'axios';

class PonManager extends React.Component {
  state = { details: [], }
  componentDidMount() {
      let data;
      axios.get('http://localhost:8000/api/tasks/')
          .then(res => {
              data = res.data;
              this.setState({
                  details: data
              });
          })
          .catch(err => { })
  }
   render() {
      return (
          <div>
              <header> Data generated from Django and my own API </header>
              <hr></hr>
              {this.state.details.map((output, id) => (
                  <div key={id}>
                      <div>
                          <h2>{output.Exchange}</h2>
                      </div>
                  </div>
              ))}
          </div>
      )
  }
}    
export default PonManager;