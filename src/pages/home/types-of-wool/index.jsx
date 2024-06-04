import { IoIosArrowRoundForward } from "react-icons/io";
import { typesOfWool } from "../../../static";
import video from "../../../assets/video/SHEEP'S WOOL.mp4";
import playImg from "../../../assets/svg/types-of-wool/play-circle.svg";
import "./TypesOfwool.scss";
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

const TypesOfWool = () => {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    const navigate = useNavigate();

    const handlePlay = () => {
        setPlay(true);
        videoRef.current.play();
    };

    const handlePause = () => {
        setPlay(false);
    };

    const handleCardClick = (id) => {
        navigate(`/for-client/${id}`);
    };

    const TypesOfWoolData = typesOfWool?.map((el) => (
        <div key={el.id} className="types-of-wool__card" onClick={() => handleCardClick(el.id)}>
            <div className="types-of-wool__card__wrapper">
                <div className="types-of-wool__card__info-boxes">
                    <h3>{el.title}</h3>
                    <button>
                        <IoIosArrowRoundForward className="types-of-wool__card__info-boxes__arrow" />
                    </button>
                </div>
                <div className="types-of-wool__card__img-box">
                    <img src={el.basis} alt={el.title + " img"} />
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <section className="types-of-wool">
                <div className="home__container">
                    <h2 className="types-of-wool__title">Виды шерсти</h2>
                    <div className="types-of-wool__cards">
                        {TypesOfWoolData}
                    </div>
                    <div className="types-of-wool__video-box">
                        {!play ? (
                            <div className="types-of-wool__video-box__modal">
                                <button onClick={handlePlay}>
                                    <img src={playImg} alt="Video play img" />
                                </button>
                            </div>
                        ) : null}
                        <video
                            preload="metadata"
                            controls
                            ref={videoRef}
                            onPause={handlePause}
                            onEnded={handlePause}
                            src={video}
                        ></video>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TypesOfWool;
