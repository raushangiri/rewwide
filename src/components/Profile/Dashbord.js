import React from 'react'
import Cards from '../Cards/Cards'
import { Bar } from 'react-chartjs-2';
import Donuchart from './Donuchart';
function Dashbord() {

    return (
        <>
            <div className="dash col-9 border border-dark mx-5">

                <h4 className="my-2 mx-5 text-secondary">Welcome Back</h4>
                <h3 className="my-1 mt-0 mx-4">Have a good day</h3>
                <div class="row container ">
                    <div class="card1 col ">
                        <Cards />
                    </div>
                    <div class="card2 col">
                        <Cards />
                    </div>
                    <div class="card3 col">
                        <Cards />
                    </div>
                    <div class="card4 col">
                        <Cards />
                    </div>
                </div>

                <div class="row container">
                    <div class="card col" >
                        <h3>Category</h3>
                        <div class="card-body">
                            <Bar
                                data={{
                                    labels: ['Electronic', 'Clothing', 'Appliances', 'Home & Furniture', 'Kids Fashion', 'Fashion'],
                                    datasets: [{
                                        label: "5 of votes",
                                        data: [12, 9, 3, 5, 2, 3],
                                    },
                                    ]
                                }}
                                width={5}
                                height={5}
                                options={{
                                    maintainAspectRatio: true,
                                    indexAxis: 'y',

                                }} />

                        </div>
                    </div>
                    <div class="card col" >
                        <h3>Category</h3>
                        <div class="card-body">

                            <Bar
                                data={{
                                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                    datasets: [{
                                        label: "5 of votes",
                                        data: [12, 9, 3, 5, 2, 3],
                                    },
                                    ]
                                }}
                                width={5}
                                height={5}
                                options={{
                                    maintainAspectRatio: true,
                                }} />
                        </div>
                    </div>
                    <div class="card col" style={{ width: "18rem;" }}>
                        <h3>Category</h3>
                        <Donuchart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord
