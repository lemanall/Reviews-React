import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex]= useState(0)
  const {name,job,image,text} = people[index]
  console.log(people[index]);

const nextPerson = ()=>{
  if(index===people.length-1){
    setIndex(0)
  }else{
    setIndex(index+1)
  }

}

const prevPerson = () =>{
  if(index===0){
   setIndex(people.length-1)
  }else{
    setIndex(index-1)
  }
}

 const randomPerson = () =>{
let randomNumber = Math.floor(Math.random()* people.length)
setIndex(randomNumber)
 }

  return <article className='review'>
<div className="img-container">
  <img src={image} className="person-img" />
  <span className='quote-icon'>
    <FaQuoteRight />
  </span>
</div>
<h4 className='author'>{name}</h4>
<p className='job'>{job}</p>
<p className="info">{text}</p>
<div className="btn-container">
  <button onClick={prevPerson} className='prev-btn'>
    <FaChevronLeft />
  </button>
  <button onClick={nextPerson} className='next-btn'>
    <FaChevronRight />
  </button>
</div>
  <button onClick={randomPerson} className="random-btn">suprise me</button>
  </article>
};

export default Review;
