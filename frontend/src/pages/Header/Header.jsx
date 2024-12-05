import logo from "../../assets/logo.png"
import { GiMushroomCloud } from "react-icons/gi";
const Header = () => {
    return (
        <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
            <GiMushroomCloud className="text-5xl text-primary"/>
            <img 
              src={logo}
              alt='logo'
                width={100}
            />
        </header>
    )
}
export default Header