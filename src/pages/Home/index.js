import React from "react";
import Message from "../../components/Message";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://cdn.vox-cdn.com/thumbor/HEeDWCewhBlypxLbbYbkBfmDc6w=/0x0:1080x718/1200x800/filters:focal(477x288:649x460)/cdn.vox-cdn.com/uploads/chorus_image/image/71263353/300017093_10114630004939621_5854109382330704814_n.0.jpg"
        text="Салам Брут, че, как, уничтожил флот галлов?"
        date="Вчера в 21:30"
      />
    </section>
  );
};

export default Home;
