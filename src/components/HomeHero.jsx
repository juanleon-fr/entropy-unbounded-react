import HomeImg from "../assets/img/home1.jpg"
import SpecialBtn from "./SpecialBtn"



const HomeHero = () => {

    return (
        <section id="home1">
            <div className="homeImgWrapper">
                <img src={HomeImg} className="rellax" />
            </div>
            <div className="container80 rightorbottom">
                <div className="home1__headline scale-on-hover">
                    <h1 className="mainHeadline">Live unbounded, extend your style</h1>
                    <p className="mainText">El desordenado no sos vos... Es el Universo xdxd. Vestí la nueva línea Unbounded, que es la más fachera de todas. 
                    </p>
                    <div>
                        <SpecialBtn input="Ver más" color="color-30"></SpecialBtn>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero