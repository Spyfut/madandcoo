import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import "./index.css"

function MadandCoo() {

    return (
        <>
            <div className='App-Logo'><img alt="Mad&Coo" src={require('../../images/madandcoo.png')}/></div>
            <Nav items={navItems.urls} />
            <div className='Insta-Logo'><a href="https://www.instagram.com/madandcoo/"><img alt="Insta" src={require('../../images/insta.png')}/></a></div>
            <div className="Madandcoo-Core">
                <div className="Madandcoo Madandcoo-Intro">
                    <p className="Madandcoo-Title">Mad&Coo</p>
                    <p className="Madandcoo-Text">
                        Moi c'est Will, je fais des gateaux en y mettant tout mon coeur et toute ma créativité.<br />
                        J’ai tout d’abord fait plaisir à ma famille et mes amis, puis j’ai décidé de me lancer.<br />
                        J'adore la pâtisserie et la cuisine depuis tout petit, c’est pourquoi j’ai décidé de passer mon CAP cuisine en 2022.<br />
                        J'espère vous faire partager ma passion à travers mes nombreuses créations.<br /><br />
                        J'ai créé MadandCoo pour permettre à tout le monde de découvrir mes œuvres gustatives: que ce soit pour retomber en enfance en dégustant sa simple part de flan, 
                        ou pour découvrir de nouvelles associations de saveurs avec mes pâtisseries les plus raffinées, 
                        ou encore juste pour avoir le bonheur de partager notre gâteau préféré pour un évènement particulier avec les bonnes personnes. Etant curieux de nature j’aime faire découvrir des pâtisseries du monde entier.<br /><br />
                    </p>
                </div>
                <div className="Madandcoo MadandcooImg MadandcooImgRight">
                    <img alt="Patissier" src={require('../../images/madeleine.jpg')} />
                </div>
            </div>
            <div className="Madandcoo-Core">
                <div className="Madandcoo MadandcooImg MadandcooImgLeft">
                    <img alt="Patissier" src={require('../../images/cookies.jpg')} />
                </div>
                <div className="Madandcoo Madandcoo-Intro">
                    <p className="Madandcoo-Title">Pour n'importe qui, et n'importe quelle occasion</p>
                    <p className="Madandcoo-Text">
                        De la viennoiserie à la patisserie, vous retrouverez sur ce site toute l'étendue de la gamme que je propose.<br /><br />
                        Pour un évènement ou pour tout un chacun je peux réaliser sur commande chacune de vos envies.
                        Macarons, rainbowCake, pièce montée, tiramisu ou mignardises pour vos anniversaires, fêtes en tout genre ou mariage, je peux répondre à toutes vos demandes.
                        N'hésitez pas, et consultez ma galerie d'offre juste <a href="/#/mes-creations">ici</a>  
                    </p>
                </div>

            </div>
        </>
    );
}

export default MadandCoo