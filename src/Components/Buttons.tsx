
import "../styles/Button.css"
export default function PrimaryButton({
 
  color,
  border,
  borderColor,
  fontSize,
  buttonText,
  borderRadius,
  className,    

}:{
  color: string,
  border : string,
  borderColor: string,
  fontSize: string,
  buttonText:string,
  borderRadius: string,
  className: string , 


}

) {
	return (
    	<button className={className} style={{ color, border, borderColor, fontSize,borderRadius}}>
           {buttonText}
        </button>
    );


}