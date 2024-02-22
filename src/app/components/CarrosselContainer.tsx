'use client';
import Accounts from "./illustrations/Accounts";
import CarrosselCard from "./CarrosselCard";
import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import ArrowRight from "./icones/ArrowRight";
import AccountsActive from "./illustrations/AccountsActive";

let interval : any = null;

export default function CarrosselContainer({contentList, cardClass, ...props} : {cardClass?: string, contentList?: [], isActive?: boolean }) {

     const cardsInfo = [
          {
               index: 1,
               img: <AccountsActive />,
               activeImg : <Accounts/>,
               title: "Choose your account",
               text: "Choose the Account that most fit your needs and wishes. Before choosing your account make sure that you have all that is required open that account.",
               btnText: "Choose your Account",
               btnImg: <ArrowRight />,
               btnLink: ""
          },
          {
               index: 2,
               img: <AccountsActive />,
               activeImg : <Accounts/>,
               title: "Choose your account",
               text: "Choose the Account that most fit your needs and wishes. Before choosing your account make sure that you have all that is required open that account."
          },
          {
               index: 3,
               img: <AccountsActive />,
               activeImg : <Accounts/>,
               title: "Choose your account",
               text: "Create the Account that most fit your needs and wishes. Before choosing your account make sure that you have all that is required open that account."
          },
          {
               index: 4,
               img: <AccountsActive />,
               activeImg : <Accounts/>,
               title: "Choose your account",
               text: "Choose the Account that most fit your needs and wishes. Before choosing your account make sure that you have all that is required open that account.", 
               btnText: "test",
          },
     ];

     const activeIndex = useRef(1);
     const [isActive, setIsActive] = useState(1);

     function handleCLick(index : number) {
          setIsActive(index);
          clearInterval(interval);
     }

      useEffect(() => {

          interval = setInterval(() => {
               
               if (activeIndex.current < cardsInfo.length) {
                    activeIndex.current += 1;
                    setIsActive(activeIndex.current);
               }
               else{
                    activeIndex.current = 1;
                    setIsActive(activeIndex.current);
               }
               
          }, 3000);  
          return () => clearInterval(interval);
          
     }, []);
          
     let activeCardIndex = isActive;

     let showBtn = cardsInfo[activeCardIndex - 1]?.btnText; 
     let showBtnImg = cardsInfo[activeCardIndex - 1]?.btnImg;
     let btnLink = cardsInfo[activeCardIndex -1]?.btnLink;

     return (
          
     <>

          <h2 className="txt-secondary-600 p-5 text-center">It’s pretty easy! <span className="txt-primary-900">Here’s the steps</span> </h2>
         
          <div className="row">
               <div className="col-lg-6 col-sm-12 pb-4">
                    <div className="row row-cols-md-2 g-4">
                         {cardsInfo.map((element) => (
                              <CarrosselCard  key={element.index} classCard ={`${element.index === activeCardIndex ? 'active' : ''}`} img ={ element.index === activeCardIndex ? element.activeImg : element.img} handleCLick= {() => handleCLick(element.index)} isActive = {element.index === activeIndex.current}  index= {element.index}> {element.title} </CarrosselCard> 
                         ))}
                    </div>
                   
               </div>
               <div className="col-lg-6 col-sm-12 position-relative">
                    <p className="carrossel-index"> {cardsInfo[isActive -1].index}</p>
                    <div className="carrossel-content ps-md-4 pt-md-4">     
                         <h3 className="txt-secondary-600 pb-3">{cardsInfo[isActive - 1].title}</h3>
                         <p >{cardsInfo[isActive - 1].text}</p>

                         <a href={btnLink}>
                              {showBtn && 
                                   <Btn btnClass= "btn btn-secondary mt-3"> {showBtn} {showBtnImg} </Btn>
                              }
                         </a>

                    </div>
               </div>
          </div>
     </>
     
     )
}





