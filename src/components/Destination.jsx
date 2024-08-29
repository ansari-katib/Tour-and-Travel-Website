import React from "react";
import "../components/Destination.css";
import DestinationData from "./DestinationData";
import volcano1Img from '../assets/volcano1.jpg';
import volcano2Img from '../assets/volcano2.jpg';
import Kashmir1Img from '../assets/kahmirimg.jpg'
import Kashmir2Img from '../assets/kashmirimg2.jpg'
import hawaiImg1 from '../assets/hawaiimg.jpg'
import hawaiImg2 from '../assets/hawaiimg2.jpg'
import manaliImg1 from '../assets/manaliimg.jpeg'
import manaliImg2 from '../assets/manaliimg2.jpeg'



function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tour give you the opportunity to see a lot, whitin a time frame.</p>
        <DestinationData 
        className="first-des"
         heading="mount Fuji Volcano , Japan"
         para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                        nostrum doloribus. Aperiam similique tempora nisi! Repudiandae
                        voluptas repellendus doloremque impedit, magni dolor nemo
                        reprehenderit consectetur distinctio dignissimos aperiam hic tenetur
                        porro quidem labore accusantium nam, earum praesentium eligendi eos
                        iusto ratione harum? Inventore molestias veritatis voluptas adipisci
                        eius dicta officia libero commodi quisquam, possimus omnis quasi
                        cupiditate illo, delectus obcaecati perspiciatis. Excepturi iste,
                        tempore numquam nam, impedit in iusto doloremque repellendus
                        laboriosam enim voluptatum. Quisquam rem quae deserunt cumque
                        veritatis."
        Img1 = {volcano1Img}
        Img2 = {volcano2Img}
        />
         <DestinationData 
         className="first-des-reverse"
         heading=" snow cover Mountains , Kashmir"
         para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                        nostrum doloribus. Aperiam similique tempora nisi! Repudiandae
                        voluptas repellendus doloremque impedit, magni dolor nemo
                        reprehenderit consectetur distinctio dignissimos aperiam hic tenetur
                        porro quidem labore accusantium nam, earum praesentium eligendi eos
                        iusto ratione harum? Inventore molestias veritatis voluptas adipisci
                        eius dicta officia libero commodi quisquam, possimus omnis quasi
                        cupiditate illo, delectus obcaecati perspiciatis. Excepturi iste,
                        tempore numquam nam, impedit in iusto doloremque repellendus
                        laboriosam enim voluptatum. Quisquam rem quae deserunt cumque
                        veritatis."
        Img1 = {Kashmir1Img}
        Img2 = {Kashmir2Img}
        />
        <DestinationData 
        className="first-des"
         heading=" Volcano mountains & water fall , Manali"
         para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                        nostrum doloribus. Aperiam similique tempora nisi! Repudiandae
                        voluptas repellendus doloremque impedit, magni dolor nemo
                        reprehenderit consectetur distinctio dignissimos aperiam hic tenetur
                        porro quidem labore accusantium nam, earum praesentium eligendi eos
                        iusto ratione harum? Inventore molestias veritatis voluptas adipisci
                        eius dicta officia libero commodi quisquam, possimus omnis quasi
                        cupiditate illo, delectus obcaecati perspiciatis. Excepturi iste,
                        tempore numquam nam, impedit in iusto doloremque repellendus
                        laboriosam enim voluptatum. Quisquam rem quae deserunt cumque
                        veritatis."
        Img1 = {manaliImg1}
        Img2 = {manaliImg2}
        />
        <DestinationData 
         className="first-des-reverse"
         heading="Hawaii Volcanos Green Mountains , Hawaii"
         para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                        nostrum doloribus. Aperiam similique tempora nisi! Repudiandae
                        voluptas repellendus doloremque impedit, magni dolor nemo
                        reprehenderit consectetur distinctio dignissimos aperiam hic tenetur
                        porro quidem labore accusantium nam, earum praesentium eligendi eos
                        iusto ratione harum? Inventore molestias veritatis voluptas adipisci
                        eius dicta officia libero commodi quisquam, possimus omnis quasi
                        cupiditate illo, delectus obcaecati perspiciatis. Excepturi iste,
                        tempore numquam nam, impedit in iusto doloremque repellendus
                        laboriosam enim voluptatum. Quisquam rem quae deserunt cumque
                        veritatis."
        Img1 = {hawaiImg1}
        Img2 = {hawaiImg2}
        />
        <DestinationData 
        className="first-des"
         heading=" Volcano mountains & water fall , Manali"
         para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                        nostrum doloribus. Aperiam similique tempora nisi! Repudiandae
                        voluptas repellendus doloremque impedit, magni dolor nemo
                        reprehenderit consectetur distinctio dignissimos aperiam hic tenetur
                        porro quidem labore accusantium nam, earum praesentium eligendi eos
                        iusto ratione harum? Inventore molestias veritatis voluptas adipisci
                        eius dicta officia libero commodi quisquam, possimus omnis quasi
                        cupiditate illo, delectus obcaecati perspiciatis. Excepturi iste,
                        tempore numquam nam, impedit in iusto doloremque repellendus
                        laboriosam enim voluptatum. Quisquam rem quae deserunt cumque
                        veritatis."
        Img1 = {manaliImg1}
        Img2 = {manaliImg2}
        />
        <DestinationData 
         className="first-des-reverse"
         heading="Hawaii Volcanos Green Mountains , Hawaii"
         para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                        nostrum doloribus. Aperiam similique tempora nisi! Repudiandae
                        voluptas repellendus doloremque impedit, magni dolor nemo
                        reprehenderit consectetur distinctio dignissimos aperiam hic tenetur
                        porro quidem labore accusantium nam, earum praesentium eligendi eos
                        iusto ratione harum? Inventore molestias veritatis voluptas adipisci
                        eius dicta officia libero commodi quisquam, possimus omnis quasi
                        cupiditate illo, delectus obcaecati perspiciatis. Excepturi iste,
                        tempore numquam nam, impedit in iusto doloremque repellendus
                        laboriosam enim voluptatum. Quisquam rem quae deserunt cumque
                        veritatis."
        Img1 = {hawaiImg1}
        Img2 = {hawaiImg2}
        />
      </div>      
    </>
  );
}

export default Destination;
