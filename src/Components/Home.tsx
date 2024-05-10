import BackgroundImg from '../assets/tb.jpg'
import logoImg from '../assets/eme2.png'
import "../styles/Home.css"
import "../styles/Button.css"
import Button from './Buttons';
import Services from './Services';
import { ServicesList } from './ServicesList';
import "@fontsource/poppins/800.css";

function Home() {
    const bgImage =  `linear-gradient(rgb(27, 49, 4),rgba(27, 49, 4,0.8)),url(${BackgroundImg})`;
    const logImage = `url(${logoImg})`;
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

        <div className="section2" style={{backgroundImage:logImage}}>
          
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
     <div className="section3">
          <div className="text3">

                <h1>OUR VALUES</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni quo dicta exercitationem <br/> 
                    Illo, excepturi. Error in soluta earum alias tempora! 
                    Minima beatae alias laudantium molestias inventore.
                </p>


                </div>

                <div className="values">
                <div className="value1">
                    <h2>HONESTY</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magni quo dicta exercitationem</p>
                </div>
                <div className="value2">
                    <h2>INTEGRITY</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magni quo dicta exercitationem</p>
                </div>
                <div className="value3">
                    <h2>DIVERSITY</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Magni quo dicta exercitationem</p>
                </div>
            </div>
       
 
     </div>

    </div>
  )
}

export default Home