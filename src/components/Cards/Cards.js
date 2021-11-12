import React from 'react'
import avtar from "../Images/avatar+human.ico"

function Cards(Props) {
    return (
        <>
            <section className="py-5">
                <div className="row g-0 CardPro" >
                    <div className="col-5">
                        <img className="avtar" src={avtar} alt="" />
                    </div>
                    <div className="col-7">
                        <h3 className="px-4 mb-1">${Props.amount}</h3>
                        <p>Total</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards
