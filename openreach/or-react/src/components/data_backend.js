import axios from 'axios';
import React from 'react';


        class Data_List extends React.Component {
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
                                    <h6>Llums ID:{output.PONProjectID}, Exchange {output.Exchange}, 1141: {output.MDFID}- PON{output.PONNumber}.</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                )
           }
          }    
   
export default Data_List;