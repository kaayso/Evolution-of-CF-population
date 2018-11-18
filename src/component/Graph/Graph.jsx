import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Graph extends Component {
    _buildData = () => {
        let labels = [];
        let  data = [];
        this.props.data && this.props.data.forEach(item => {
            labels.push(item.year)
            data.push(item.inhabitants)
        });
        return {
            labels: labels,
            datasets: [
                {
                    label: '# of inhabitants',
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.2,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(255,255,192,1)',
                    pointHoverBorderColor: 'rgba(220,20,20,1)',
                    pointHoverBorderWidth: 5,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: data
                }
            ]
        }
    };
    render(){
        return(
            <div>
                <h4 className="mt-2">Clermont-Ferrand</h4>
                <div style={{ width: '70%', height: 400, margin:'auto' }} className="mt-5">
                    <Line
                        options={{
                            maintainAspectRatio: false
                        }}
                        data={this._buildData}
                    />
                </div>
            </div>

        )
    }
};

export default Graph;
