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
                    <ul className="flex detail-list">
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

                <div className="game-info">
                    <p className="inner-text">
                        The most awarded game of a generation, now enhanced for the next! Experience The Witcher 3: Wild
                        Hunt and its expansions in this definitive collection, boasting improved visuals and
                        performance,
                        new additional content, Photo Mode, and more!
                    </p>

                    <div className="flex detail-list">
                        <div className="left-item">
                            <h3 className="small-title">Genres</h3>
                            <ul className="flex genres-list">
                                {game.genres.map((genre, index) => <li key={index}>{genre.name}</li>)}
                            </ul>
                        </div>
                        <div className="right-item">
                            <h3 className="small-title">Features</h3>
                            <ul className="flex genres-list">
                                {game.tags.map((tag, index) => index < 5 && <li key={index}>{tag.name}</li>)}
                            </ul>
                        </div>
                    </div>

                    <div className="inner-text">
                        <h3 className="small-title">ABOUT THE GAME</h3>
                        <p>
                            You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn,
                            monster-infested continent you can explore at will. Your current contract? Tracking down
                            Ciri —
                            the Child of Prophecy, a living weapon that can alter the shape of the world.
                            The Complete Edition contains the base game, offering a huge, over 100-hour long, open-world
                            adventure, as well as both of its massive story expansions: Hearts of Stone & Blood and Wine
                            worth an extra 50 hours of gameplay!
                            It also comes with all additional content released for the game, alongside new features and
                            items, including a built-in Photo Mode, swords, armor, and alternate outfits inspired by The
                            Witcher Netflix series — and more!
                        </p>
                        <h3 className="small-title">UPDATED FOR A NEW GENERATION</h3>
                        <p>
                            Behold the dark fantasy world of the Continent like never before! This edition of The
                            Witcher 3:
                            Wild Hunt has been enhanced with numerous visual and technical improvements, including
                            vastly
                            improved level of detail, a range of community created and newly developed mods for the
                            game,
                            real-time ray tracing, and more — all implemented with the power of modern PCs in mind.
                        </p>
                        <h3 className="small-title">PLAY AS A HIGHLY TRAINED MONSTER SLAYER FOR HIRE</h3>
                        <p>
                            Trained from early childhood and mutated to gain superhuman skills, strength, and reflexes,
                            witchers are a counterbalance to the monster-infested world in which they live.
                            • Gruesomely destroy foes as a professional monster hunter armed with a range of upgradeable
                            weapons, mutating potions, and combat magic.
                            • Hunt down a wide variety of exotic monsters, from savage beasts prowling mountain passes
                            to
                            cunning supernatural predators lurking in the shadowy back alleys of densely populated
                            cities.
                            • Invest your rewards to upgrade your weaponry and buy custom armor, or spend them on horse
                            races, card games, fist fighting, and other pleasures life brings.
                        </p>
                        <h3 className="small-title">EXPLORE A MORALLY AMBIGUOUS FANTASY OPEN WORLD</h3>
                        <p>
                            Built for endless adventure, the massive open world of The Witcher sets new standards in
                            terms
                            of size, depth, and complexity.
                            • Traverse a fantastical open world: explore forgotten ruins, caves, and shipwrecks, trade
                            with
                            merchants and dwarven smiths in cities, and hunt across the open plains, mountains, and
                            seas.
                            • Deal with treasonous generals, devious witches, and corrupt royalty to provide dark and
                            dangerous services.
                            • Make choices that go beyond good & evil, and face their far-reaching consequences.
                        </p>
                        <h3 className="small-title">TRACK DOWN THE CHILD OF PROPHECY</h3>
                        <p>
                            Take on the most important contract of your life: to track down the child of prophecy, the
                            key
                            to saving or destroying this world.
                            • In times of war, chase down the child of prophecy, a living weapon foretold by ancient
                            elven
                            legends.
                            • Struggle against ferocious rulers, spirits of the wilds, and even a threat from beyond the
                            veil – all hell-bent on controlling this world.
                            • Define your destiny in a world that may not be worth saving.
                        </p>
                    </div>

                    <ul className="tag-list">
                        {game.tags.map((tag, index) => <li className="tag-item" key={index}><p>This game is</p>
                            <p>{tag.name}</p></li>)}
                    </ul>

                    <div className="system-requirement">
                        <h3 className="small-title">{game.name} System Requirements</h3>
                        <div className="requirement-box">
                            <div className="left-box">
                                <h3 className="small-title">Minimum</h3>
                                <ul className="requirement-list">
                                    {game.platforms.map((item, index) => {
                                        return (
                                            item.requirements_en &&
                                            <li key={index}>{item.requirements_en.minimum}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="right-box">
                                <h3 className="small-title">Recommended</h3>
                                <ul className="requirement-list">
                                    {game.platforms.map((item, index) => {
                                        return (
                                            item.requirements_en &&
                                            <li key={index}>{item.requirements_en.recommended}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDetail;