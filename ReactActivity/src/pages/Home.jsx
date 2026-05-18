import '../styles/Home.css'

// 12:40
/*
differences:
class -> className
inline styling
  - HTML: style="propertyName: value"
  - React: style={{propertyName: value}}
*/
 
const Home = () => {
  return (
    <>

      {/* Heading */}
      <h1 style={{color: "#000000"}}> Yuwen Zhang</h1>
      <div className="links-div">
        <a className="contact-link" href="https://github.com/yzhang-570" target="_blank">
          Github
        </a>
        <a className="contact-link" href="https://www.linkedin.com/in/yuwen-zhang28/" target="_blank">
          LinkedIn
        </a>
      </div>
      <p className="desc-text">Hi, my name is Yuwen Zhang, and I go to San Jose State University. I'm a 2nd year majoring in Computer Science.</p>

      {/* Image */}
      <div className="cat-img-card">
        <img id="cat-img" src="https://i.pinimg.com/736x/47/d5/3b/47d53b895b64497082800efd19950c5b.jpg" alt="Cute Cat" width="150px"/>
      </div>

    </>
  )
}

export default Home;