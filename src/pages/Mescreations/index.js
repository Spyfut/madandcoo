import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import "./index.css"

function Mescreations() {

  return (
    <>
      <div className='App-Logo'><img alt="Mad&Coo" src={require('../../images/madandcoo.png')}/></div>
      <Nav items={navItems.urls} />
      <div className='Insta-Logo'><a href="https://www.instagram.com/madandcoo/"><img alt="Insta" src={require('../../images/insta.png')}/></a></div>
      <div className="Creations-Core">
        <div className="Creations-Intro">
            <p className="Creations-Title">Mes créations</p>
            <p className="Creations-Text">
                La pâtisserie à toujours été une passion mais encore plus depuis que je suis papa : que ce soit le week-end, pour partager avec mes enfants un moment convivial en patissant avec eux,
                 ou pour leur préparer un gôuter savoureux pour leur retour de l'école en semaine,
                  ou encore pour accueillir des amis ou la famille à la maison; 
                chaque moment de vie est pour moi une occasion de mettre la main à la pâte et j'en profite toujours pour laisser libre cours à mon imagination ou parfois plus simplement retrouver les délicieux parfums de certains classiques de la patisserie. <br />En créant ma micro entreprise j’ai envie
de partager tout ca avec vous. <br />
            </p>
        </div>
        <div className="Creations-Photos">
          <div className="Creations-Photo CreationsImg">
              <img alt="Patissier" src={require('../../images/babka.jpg')} />
          </div>
          <div className="Creations-Photo CreationsImg">
              <img alt="Patissier" src={require('../../images/saint-honore.jpg')} />
          </div>
          <div className="Creations-Photo CreationsImg">
              <img alt="Patissier" src={require('../../images/religieuse.jpg')} />
          </div>
          <div className="Creations-Photo CreationsImg">
              <img alt="Patissier" src={require('../../images/macarons.jpg')} />
          </div>
          <div className="Creations-Photo CreationsImg">
              <img alt="Patissier" src={require('../../images/chouquettes.jpg')} />
          </div>
          <div className="Creations-Photo CreationsImg">
              <img alt="Patissier" src={require('../../images/sable.jpg')} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mescreations