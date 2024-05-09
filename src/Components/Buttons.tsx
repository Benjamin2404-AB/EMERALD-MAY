import PropTypes from 'prop-types';
import "../styles/Button.css"
export default function PrimaryButton({
 
  color,
  border,
  borderColor,
  fontSize,
  buttonText,
  borderRadius,
  className,    

}) {
	return (
    	<button className={className} style={{ color, border, borderColor, fontSize,borderRadius}}>
           {buttonText}
        </button>
    );


}