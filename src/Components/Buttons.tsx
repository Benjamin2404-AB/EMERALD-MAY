
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
  border : number,
  borderColor: string,
  fontSize: number,
  buttonText:string,
  borderRadius: number,
  className: string , 


}

) {
	return (
    	<button className={className} style={{ color, border, borderColor, fontSize,borderRadius}}>
           {buttonText}
        </button>
    );


}