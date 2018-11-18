import React from 'react';

const Home = ({data}) => {
    return(
        <div>
           <h4 className="mt-5 d-flex ml-2">List of data</h4>
            <table className="table w-50 ml-2">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">year</th>
                    <th scope="col">inhabitants</th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.map((item, index) =>
                        <tr key={item.year}>
                            <th scope="row">{index+1}</th>
                            <td>{item.year}</td>
                            <td>{item.inhabitants}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
};

export default Home;
