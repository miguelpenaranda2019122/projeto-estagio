
import React, { useRef, useState } from "react";

export default function CarrosselCard({img, children, index, isActive, handleCLick, classCard,  ...props } : { img: React.ReactElement, children: any, index?: number, isActive ?: boolean, handleCLick?: any, classCard?: string} ) {

    return (

        <>  
            <div className="col-6 " onClick={handleCLick}>
                <div  className={`carrossel-card ${classCard} `} {...props}>
                    <h3><span className={`carrossel-card-number ${index === 1 ? 'first' : "" }`}> {index} </span></h3>
                    <div className="carrossel-card-img">
                        <div> {img} </div>
                    </div>
                    <div className="carrossel-card-content">
                        {children}
                    </div>
                </div>  
            </div>
        </>

    )
}






