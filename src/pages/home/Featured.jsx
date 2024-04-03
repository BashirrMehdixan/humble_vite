import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper/modules';
import {ProductCard} from "/src/components/ProductCards.jsx";

const Featured = () => {
    return (
        <>
            <div className="container">
                <h3 className="small-head">Features</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to={"/"}>
                            <ProductCard/>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Featured;