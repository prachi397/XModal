import React, { useState } from "react";
import FormModal from "./FormModal";

const Home = () =>{
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleModalOpen(){
        setIsModalOpen(true);
    }
    return(
        <div>
            <h1>User Details Modal</h1>
            <button onClick={handleModalOpen}>Open Form</button>
            {isModalOpen &&
            <FormModal setIsModalOpen={setIsModalOpen}/>}
        </div>
    )
}
export default Home;