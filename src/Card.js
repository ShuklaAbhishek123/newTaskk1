import React from "react";
import Data from './colleges.json'
import Image from "./images/college_02.jpg"



const Card=()=> {
    return (
      <div className="App">
       
          { Data.colleges.map((post) => {

            return (
              <>
             
               <div className="card-container">
                   <div className="image-container">
                       <img src={Image} alt="img"/>
                       
                           <p className="rating">{post.rating}/5<br/>{post.rating_remarks}</p>
                       <p className="innerr">{post.tags}</p>
                       <p className="rank">#{post.ranking}</p>
                       
                       <div className="clgDetails">
                       <p className="clgName">{post.college_name}</p> 
                       <p className="price"><s>&#8377;{post.original_fees}</s>  
                        <span className="disPrice">{post.discount}</span></p>
                       </div>
                       <div className="addrs">
                        <p style={{ marginLeft:"10px",fontSize:"12px"}}>{post.nearest_place} | <span style={{color:"gray"}}>{post.dis}</span>  </p>
                         <p className="orPrice">&#8377;{post.discounted_fees}</p>
                         </div>
                         <p className="feecl">{post.fees_cycle}</p>
                        

                       <div style={{display:"flex",marginTop:"-20px" }}>
                       <p style={{color:"#00ffff",fontSize:"12px",marginLeft:"15px"}}> 93% match :   
                        </p><p style={{color:"gray",fontSize:"12px"}}>{post.famous_nearest_places}</p>
                        </div>
<br/>
                       <div style={{display:"flex",marginBottom:"-15px"}}>
                           <p className="flat">{post.offertext}</p>
                           <p className="wifi">{post.amenties}</p>
                       </div>

<br/>
                   </div>
                  
               </div>
              </>
            )
          })}
        </div>
    
    );
  }
  
export default Card
