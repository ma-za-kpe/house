import React from "react";
import {Link} from 'react-router-dom';

const Navbar = ({onClick}) => {
    return (
        <>
    	<div className="w-[100vw] h-[100px] px-32 flex items-center justify-between fixed top-0 left-0">
        	<div className="h-[50px] w-[100px] cursor-pointer text-black text-4xl font-bold">
            	BorgaHouse
            </div>

            <div className="flex w-[200px] justify-between text-xl">
                <Link to={'/'}>Home</Link>
                <Link to={'/transactions'}>Transactions</Link>
            </div>
            
            <div
                onClick={onClick}
                className="text-black border-2 border-black text-xl font-bold w-40 h-[50px] flex justify-center items-center rounded-[5px] cursor-pointer">
           		<span className="text-black">connect wallet</span>
            </div>
        </div>
     </>
    )
}

export default Navbar