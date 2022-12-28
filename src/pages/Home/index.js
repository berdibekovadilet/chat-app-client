import React from "react";
import Message from "../../components/Message";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://cdn.vox-cdn.com/thumbor/HEeDWCewhBlypxLbbYbkBfmDc6w=/0x0:1080x718/1200x800/filters:focal(477x288:649x460)/cdn.vox-cdn.com/uploads/chorus_image/image/71263353/300017093_10114630004939621_5854109382330704814_n.0.jpg"
        text="Салам Брут, че, как, уничтожил флот галлов? Салам Брут, че, как, уничтожил флот галлов? Салам Брут, че, как, уничтожил флот галлов? Салам Брут, че, как, уничтожил флот галлов? Салам Брут, че, как, уничтожил флот галлов?"
        date={1234}
      />
      <Message
        avatar="https://www.pcgamesn.com/wp-content/uploads/2020/09/civ5greece.png"
        text="Салам Цезарь, все норм, да уничтожил флот"
        date={1111}
        isMe={true}
        isReaded={true}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1nature",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=2nature",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3nature",
          },
        ]}
      />
    </section>
  );
};

export default Home;
