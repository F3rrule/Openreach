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
            <select>
                {data
                    ? data.map((dataObj) => {
                        return <option>{dataObj.Exchange}</option>
                    })
                    : null
                }
                    </select>
        </div>
                
    );
}

export default App;