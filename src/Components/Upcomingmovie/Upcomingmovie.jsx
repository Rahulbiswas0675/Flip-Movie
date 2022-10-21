import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';



function Upcomingmovie(props) {
    const img_api = "https://image.tmdb.org/t/p/w500";
    return (
        <div className="Upcoming-movie">
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 5000, disableOnInteraction: false, }}
                pagination={{ clickable: true, }} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
                {props.Upcominglist.map((upcoming) => (
                    <SwiperSlide key={upcoming.id}>
                        <div className="movie-det">
                            <img src={img_api + upcoming.backdrop_path} alt={upcoming.original_title} />
                            <div className="up-info">
                                <h1>{upcoming.original_title}</h1>
                                <p>{upcoming.overview}</p>
                                <div className="rel-vote">
                                    <h3 className="rel">Release On- {upcoming.release_date}</h3>
                                    <h3 className="vote">Vote- {upcoming.vote_average}</h3>
                                    <p className="trailerbtn"><PlayCircleFilledWhiteOutlinedIcon/>Play Trailer</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Upcomingmovie;