import Card from "../card/card.component";
import "./cards.style.css"
const Cards = () => {
  return ( 
    <section className="latestPosts">
				<h2 className="latestPosts_title">Posts</h2>
        <div className="latestPosts_cards">
      <Card />
      <Card />
      <Card />
      <Card />

        </div>
    </section>
   );
}
 
export default Cards;