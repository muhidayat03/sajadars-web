
import { Link } from "react-scroll";


const LinkComponent = ({ to, children, ...props }) => <Link
  {...props}
  activeClass="active"
  to={to}
  spy={true}
  smooth={true}
  duration={500}
  offset={-60}
  style={{ cursor: 'pointer' }}
>
  {children}
</Link>




export default LinkComponent;
