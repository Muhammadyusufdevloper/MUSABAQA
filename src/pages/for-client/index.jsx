import "./ForClient.scss";
import { useParams } from "react-router-dom";
import { typesOfWool } from "../../static";
import { useEffect } from "react";

const ForClient = () => {
    const { id } = useParams();
    const selectedWool = typesOfWool.find(wool => wool.id === parseInt(id));
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <section className="for-client">
            <div className="for-client__container for-client__wrapper">
                <h1 className="for-client__title">О шерсти мериноса</h1>
                {selectedWool && (
                    <div className="for-client__img-box">
                        <img src={selectedWool.images[0]} alt={`${selectedWool.title} img`} />
                    </div>
                )}
                <p className="for-client__text">
                    С древнейших времён и по сей день меринос является одним из самых известных и популярных видов шерсти. В отношении качества шерсти, мериноса не может превзойти ни одна другая порода овец, а именно овцой является этот обладатель роскошной тонкорунной шерсти.
                </p>
                <p className="for-client__text">
                    К концу 16 века Испания уже была признанным лидером в разведении мериносовых овец. Более того, она была монополистом в этой отрасли: вплоть до того момента, когда испанская морская армада не потерпела поражение от Англии. Однако только спустя две сотни лет после вывоза мериносов из поражённой державы, англичане смогли добиться успехов в овцеводстве, сравнимых с Испанией.
                </p>
                <p className="for-client__text">
                    В 18 веке мериносы были завезены в Австралию, где условия для их разведения оказались идеальными, и с этого момента именно она стала главным поставщиком шерсти в страны Европы.
                </p>
                <p className="for-client__text">
                    Секрет мериносовой шерсти — очень тонкое волокно, позволяющее животным противостоять суровому климату и колебаниям температуры от очень низких зимних до экстремально высоких летних. Для производства изделий из мериноса состригается шерсть исключительно с холки животных.
                </p>

                <div className="for-client__cards">
                    {selectedWool && selectedWool.images.map((image, index) => (
                        <div key={index} className="for-client__card">
                            <img src={image} alt={`${selectedWool.title} img`} />
                        </div>
                    ))}
                </div>

                <p className="for-client__text">
                    Тонкорунные мериносы подразделяются на несколько типов, имеющих существенные различия по виду и качеству шерсти. Тип «файн» – шерсть бесскладчатых овец с очень тонкой шерстью. Несколько толще шерсть типа «медиум». И, наконец, шерсть с наиболее толстым волосом - «стронг», получаемая с самых крупных животных. Однако толщина шерсти не сказывается на её благородных свойствах: высокое качество руна присуще всем типам овец-мериносов.
                </p>
                <p className="for-client__text">
                    Стрижка этих овец проводится каждую весну. В год овца приносит количество шерсти, достаточное для изготовления примерно пяти предметов одежды.
                </p>

                {selectedWool && (
                    <div className="for-client__img-box">
                        <img src={selectedWool.images[0]} alt={`${selectedWool.title} img`} />
                    </div>
                )}

                <h2 className="for-client__title">Уход за шерстью</h2>
                <p className="for-client__text">
                    Мериносовая шерсть длинная, мягкая и эластичная, способна долгое время держать объём и форму, а благодаря естественному завитку отличается особой упругостью. Эта шерсть обладает природной белизной с гармоничной палитрой цветовых нюансов.
                </p>
                <p className="for-client__text">
                    Шерсть мериноса отличает высокая гигроскопичность, она способна впитывать до 33% влаги от своего объёма, благодаря чему тело человека всегда остаётся в сухом тепле. В волокнах шерсти — миллионы воздушных подушечек, способствующих сохранению тепла и в холод, и в жару.
                </p>
                <p className="for-client__text">
                    Меринос является идеальным материалом для детской одежды, т.к. не раздражает кожу.
                </p>
                <p className="for-client__text">
                    Все эти качества делают шерсть мериноса не только незаменимой в любой одежде, от повседневной до спортивной, но и служат залогом крепкого, здорового сна.
                </p>
            </div>
        </section>
    );
}

export default ForClient;
