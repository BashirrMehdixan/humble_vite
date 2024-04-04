import {useContext} from "react";

// Context
import {GameContext} from "/src/context/Games/GameContext"

// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper/modules';
// Components
import {GameCard} from "/src/components/ProductCards";

const Featured = () => {
    const {games} = useContext(GameContext);
    return (
        games &&
        <>
            <section className="featured-game-section">
                <div className="container">
                    <h3 className="small-head">Features</h3>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Navigation]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        className="game-slide"
                    >{games.map((game, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <GameCard game={game}/>
                            </SwiperSlide>
                        )
                    })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Featured;