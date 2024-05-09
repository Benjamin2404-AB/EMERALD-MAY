import "../styles/Services.css"
function Services({service,image,text,id}){
   return(
    <>
        <div className="servi">
            <div className="servimg">
               <img className="pic" src={image} id = {id}/>
            </div>
            <h3>{service}</h3>

            <p>{text}</p>
        


        </div>
       
    
    
    </>
       
   )
}

export default Services