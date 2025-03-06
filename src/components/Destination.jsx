import React from "react";
import "../components/Destination.css";
import DestinationData from "./DestinationData";

// Image imports for Indian destinations
import Kashmir1Img from '../assets/kahmirimg.jpg';
import Kashmir2Img from '../assets/kashmirimg2.jpg';

import manaliImg1 from '../assets/manaliimg.jpeg';
import manaliImg2 from '../assets/manaliimg2.jpeg';

import assam from "../assets/assam.jpg";
import assam2 from "../assets/assam_2.jpg";

import tajmahel from "../assets/taimahel_1.jpg";
import tajmahel2 from "../assets/tajmahel.jpg";

import rajsthan from "../assets/rajsthan.jpg";
import rajsthan2 from "../assets/rajisthan.jpg";

import goldentemple from "../assets/golden_temple.jpg";
import goldentemple2 from "../assets/golden_temple_2.jpg";

function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Indian Destinations</h1>
        <p>Explore some of the most stunning and unique destinations across India.</p>

        <DestinationData 
          className="first-des-reverse"
          heading="Snow-Covered Mountains, Kashmir"
          para="Kashmir is a stunning region in northern India known for its breathtaking landscapes, including snow-capped mountains, serene lakes, and lush valleys. The region is often referred to as 'Paradise on Earth' due to its scenic beauty. The famous Dal Lake, with its traditional houseboats, and the Gulmarg ski resort are popular destinations for tourists."
          Img1={Kashmir1Img}
          Img2={Kashmir2Img}
        />

        <DestinationData 
          className="first-des"
          heading="Volcano Mountains & Waterfall, Manali"
          para="Manali, located in the Indian state of Himachal Pradesh, is known for its stunning volcanic mountains and cascading waterfalls. The Solang Valley offers adventurous activities like skiing, paragliding, and trekking. The nearby Rohtang Pass, often covered in snow, provides panoramic views of the Himalayas. Manali is a hub for nature lovers and adventure seekers alike."
          Img1={manaliImg1}
          Img2={manaliImg2}
        />

        <DestinationData 
          className="first-des-reverse"
          heading="Majestic Taj Mahal, Agra"
          para="The Taj Mahal in Agra is one of the most iconic landmarks in India and a UNESCO World Heritage site. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum is a symbol of eternal love. Visitors can enjoy the grandeur of its architecture, the serene reflection in the surrounding pools, and the beautifully landscaped gardens."
          Img1={tajmahel}
          Img2={tajmahel2}
        />

        <DestinationData 
          className="first-des"
          heading="Golden Temple, Amritsar"
          para="The Golden Temple in Amritsar is one of the most revered spiritual sites in India. Known for its stunning golden architecture and peaceful atmosphere, it attracts millions of pilgrims and tourists alike. The temple is a symbol of Sikhism and serves as a reminder of the values of equality, humility, and service to humanity."
          Img1={goldentemple}
          Img2={goldentemple2}
        />

        <DestinationData 
          className="first-des-reverse"
          heading="Assam - The Land of Tea Gardens"
          para="Assam, located in northeastern India, is known for its lush tea gardens, scenic landscapes, and rich biodiversity. The state is home to Kaziranga National Park, a UNESCO World Heritage site famous for its population of one-horned rhinoceroses. Visitors can enjoy exploring tea estates, wildlife safaris, and the unique culture of the region."
          Img1={assam}
          Img2={assam2}
        />

        <DestinationData 
          className="first-des"
          heading="Rajasthan - The Land of Kings"
          para="Rajasthan, with its vibrant culture, majestic forts, and palaces, is one of India's most popular tourist destinations. From the desert landscapes of Jaisalmer to the beautiful palaces of Jaipur, Rajasthan offers a glimpse into the royal history and traditions of India. The state is also known for its colorful festivals, rich cuisine, and handicrafts."
          Img1={rajsthan}
          Img2={rajsthan2}
        />
      </div>
    </>
  );
}

export default Destination;
