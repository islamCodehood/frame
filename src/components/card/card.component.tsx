import "./card.style.css";

const Card = () => {
  return ( 
    <div>
    <a href="/blog/posts/never-stop-learning/" className="latestPosts_card">
      <div className="latestPosts_cardImage">
        <img src="https://image.tmdb.org/t/p/w300/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" width="100%" alt="project system" />
      </div>

      <div className="latestPosts_cardBody">
        <h3 className="latestPosts_cardTitle">Never Stop Learning</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipisicing</p>
      </div>
    </a>
</div>
   );
}
 
export default Card;