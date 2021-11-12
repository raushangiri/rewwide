import React from 'react'
import { Doughnut } from 'react-chartjs-2';

function Donuchart() {
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                label: "Hours Studied in Geeksforgeeks",
                data: [2, 5, 6, 7, 3],
                backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
            }
        ]
    }
    return (
        <>
            <Doughnut data={data} />

        </>
    )
}

export default Donuchart
