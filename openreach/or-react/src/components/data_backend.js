import React, { Component } from 'react';
//import React from 'react';
import axios from 'axios';

//This Component just lists the backend database
class Data_List extends Component {
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
                            <h5>{output.Exchange}   Pon:{output.PONNumber} Llums:{output.PONProjectID}</h5>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
  }    
  export default Data_List;