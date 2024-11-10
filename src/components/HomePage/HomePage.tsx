import HomeChild from '../HomeChild/HomeChild';
import HomeHead from '../HomeHead/HomeHead';
import "../../styles/home.css";
function HomePage() {
  return (
    <div>
      <HomeHead head='Enjoy The Best Fresh Fruits'/>
      <HomeChild/>
    </div>
  )
}

export default HomePage