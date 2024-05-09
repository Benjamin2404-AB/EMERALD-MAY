import BackgroundImg from '../assets/tb.jpg'
import "../styles/Home.css"
import "../styles/Button.css"
import Button from './Buttons';
import Services from './Services';
import { ServicesList } from './ServicesList';

function Home() {
    const bgImage =  `linear-gradient(rgb(27, 49, 4),rgba(27, 49, 4,0.8)),url(${BackgroundImg})`;
  return (
    <div className="Homebackground"style={{backgroundImage: bgImage}}>
      
        <div id="section1">
            <h4>Quality & <span>Affordable</span></h4>
            <h1>TICKETS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Sunt quaerat quo aliquam fugiat 
                asperiores in perferendis deleniti ad, voluptate eligendi
                 repellendus cupiditate veritatis.

            </p>

            

        </div>
        <Button className="primB" 
        
        color= "white"
        border="1px solid white"
        borderColor="white"
        fontSize="20px"
        buttonText="Click Me"
        borderRadius="4px"
        />
         <Button className="primA" 
        color= "white"
        border="none"
        borderColor="none"
        fontSize="20px"
        buttonText="Click Me"
        borderRadius="4px"
        />
        <div> 
          {ServicesList.map((item,key)=>{
                return (
                
                <Services 
                  key={key}
                  service = {item.service}
                  image={item.image}
                  text={item.text} 
                  id = {item.id}
                 
                />
              );

            })
          }
        </div>

        <div className="section2">
        
        <div className="text">
 
             <h1>Why Choose Us?</h1>
         
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                 Hic ad inventore, natus quos earum molestias facere sed
                 quaerat error illo veniam? Sed, atque. Sit, dolorem consequuntur
                 minima autem neque suscipit!
               <br/>
               <br/>
               Sed, atque. Sit, dolorem consequuntur
               minima autem neque suscipit!
             
             
             </p>
        </div>
 
     </div>

    </div>
  )
}

export default Home