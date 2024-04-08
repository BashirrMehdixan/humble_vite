import {useContext, useState} from "react";
import {useParams} from "react-router-dom";
import {GameContext} from "/src/context/Games/GameContext";

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const GameDetail = () => {
    const {games} = useContext(GameContext);
    const {slug} = useParams();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const game = games ? games.find(item => item.slug === slug) : "";
    console.log(game)
    return (
        game &&
        <>
            <div className="container">
                <div className="game-detail">
                    <div className="head-box">
                        <h3 className="game-title">
                            {game.name}
                        </h3>
                    </div>
                    <ul className="detail-list">
                        {game.genres.map((genre, index) => <li key={index}>{genre.name}</li>)}
                    </ul>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="uni-slide detail-swiper"
                    >
                        {game.short_screenshots.map((screenshot, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={screenshot.image} alt={game.title}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="detail-nav"
                    >
                        {game.short_screenshots.map((screenshot, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={screenshot.image} alt={game.title}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                <div className="game-description">
                    The most awarded game of a generation, now enhanced for the next! Experience The Witcher 3: Wild
                    Hunt and its expansions in this definitive collection, boasting improved visuals and performance,
                    new additional content, Photo Mode, and more!
                    <ul className="detail-list">
                        {game.genres.map((genre, index) => <li key={index}>{genre.name}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GameDetail;