import Navbar from "./Navbar";
import Footer from "./Footer";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700', '900'],
})



const Layout = ({children}) => {
    return ( <main className={roboto.className} >
            <Navbar />
            <div>{children}</div>
            <Footer/>
    </main> );
}
 
export default Layout;