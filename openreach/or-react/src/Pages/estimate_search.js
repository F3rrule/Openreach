import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const url = "http://localhost:8000/api/tasks/";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    
    return (
        <div className="App">
            <select
                onChange={(e) => {
                 console.log(e.target.value);
            }}
            >
                {data
                    ? data.map((datalist) => {
                        return (
                            <option key={datalist.id} value={datalist.id}>
                                {datalist.Exchange}
                            </option>
                            
                        );
                       

                    })
                    : null
                }
            </select>
        </div>

    );
}

export default App;