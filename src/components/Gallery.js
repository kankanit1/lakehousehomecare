import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

export default class Gallery extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            galleryState: 'total',
            galleryList:
            {
                total: [
                    [
                        { id: 1, image: "/images/galleries/1.jpeg", group: "room" },
                        { id: 7, image: "/images/galleries/7.jpeg", group: "room" },
                        { id: 8, image: "/images/galleries/8.jpeg", group: "room" },
                        { id: 9, image: "/images/galleries/9.jpeg", group: "room" },
                        { id: 10, image: "/images/galleries/10.jpeg", group: "room" },
                        { id: 11, image: "/images/galleries/11.jpeg", group: "room" },
                    ],[
                        { id: 12, image: "/images/galleries/12.jpeg", group: "room" },
                        { id: 3, image: "/images/galleries/3.jpeg", group: "outdoor"},
                        { id: 14, image: "/images/galleries/14.jpeg", group: "outdoor"},
                        { id: 15, image: "/images/galleries/15.jpeg", group: "outdoor"},
                        { id: 16, image: "/images/galleries/16.jpeg", group: "outdoor"},
                        { id: 17, image: "/images/galleries/17.jpeg", group: "outdoor"},
                    ],
                    [
                        { id: 2, image: "/images/galleries/2.jpeg", group: "care"},
                        { id: 4, image: "/images/galleries/4.jpeg", group: "care"},
                        { id: 5, image: "/images/galleries/5.jpeg", group: "care"},
                        { id: 6, image: "/images/galleries/6.jpeg", group: "care"},
                        { id: 13, image: "/images/galleries/13.jpeg", group: "care"},
                        { id: 18, image: "/images/galleries/18.jpeg", group: "care"},
                    ],
                    [
                        { id: 19, image: "/images/galleries/19.jpeg", group: "care"},
                        { id: 20, image: "/images/galleries/20.jpeg", group: "care"},
                        { id: 21, image: "/images/galleries/21.jpeg", group: "care"},
                        { id: 22, image: "/images/galleries/22.jpeg", group: "care"},
                        { id: 23, image: "/images/galleries/23.jpeg", group: "care"},
                        { id: 24, image: "/images/galleries/24.jpeg", group: "care"},
                    ],
                    [
                        { id: 25, image: "/images/galleries/25.jpeg", group: "care"},
                        { id: 26, image: "/images/galleries/26.jpeg", group: "care"},
                        { id: 27, image: "/images/galleries/27.jpeg", group: "care"},
                        { id: 28, image: "/images/galleries/28.jpeg", group: "care"},
                        { id: 29, image: "/images/galleries/29.jpeg", group: "care"},
                        { id: 30, image: "/images/galleries/30.jpeg", group: "care"},
                    ],
                    [
                        { id: 31, image: "/images/galleries/31.jpeg", group: "care"},
                        { id: 32, image: "/images/galleries/32.jpeg", group: "care"},
                        { id: 33, image: "/images/galleries/33.jpeg", group: "care"},
                        { id: 33, image: "/images/galleries/34.jpeg", group: "care"},
                        { id: 35, image: "/images/galleries/35.jpeg", group: "care"},
                        { id: 36, image: "/images/galleries/36.jpeg", group: "care"},
                    ],
                    [
                        { id: 37, image: "/images/galleries/37.jpeg", group: "care"},
                        { id: 38, image: "/images/galleries/38.jpeg", group: "care"},
                    ],
                    
                ],
                room: [
                    [
                        { id: 1, image: "/images/galleries/1.jpeg", group: "room" },
                        { id: 7, image: "/images/galleries/7.jpeg", group: "room" },
                        { id: 8, image: "/images/galleries/8.jpeg", group: "room" },
                        { id: 9, image: "/images/galleries/9.jpeg", group: "room" },
                        { id: 10, image: "/images/galleries/10.jpeg", group: "room" },
                        { id: 11, image: "/images/galleries/11.jpeg", group: "room" },
                    ],
                    [
                        { id: 12, image: "/images/galleries/12.jpeg", group: "room" },
                    ]
                ],
                outdoor: [
                    [
                        { id: 3, image: "/images/galleries/3.jpeg", group: "outdoor"},
                        { id: 14, image: "/images/galleries/14.jpeg", group: "outdoor"},
                        { id: 15, image: "/images/galleries/15.jpeg", group: "outdoor"},
                        { id: 16, image: "/images/galleries/16.jpeg", group: "outdoor"},
                        { id: 17, image: "/images/galleries/17.jpeg", group: "outdoor"},
                    ]
                ],
                care: [
                    [
                        { id: 2, image: "/images/galleries/2.jpeg", group: "care"},
                        { id: 4, image: "/images/galleries/4.jpeg", group: "care"},
                        { id: 5, image: "/images/galleries/5.jpeg", group: "care"},
                        { id: 6, image: "/images/galleries/6.jpeg", group: "care"},
                        { id: 13, image: "/images/galleries/13.jpeg", group: "care"},
                        { id: 18, image: "/images/galleries/18.jpeg", group: "care"},
                    ],
                    [
                        { id: 19, image: "/images/galleries/19.jpeg", group: "care"},
                        { id: 20, image: "/images/galleries/20.jpeg", group: "care"},
                        { id: 21, image: "/images/galleries/21.jpeg", group: "care"},
                        { id: 22, image: "/images/galleries/22.jpeg", group: "care"},
                        { id: 23, image: "/images/galleries/23.jpeg", group: "care"},
                        { id: 24, image: "/images/galleries/24.jpeg", group: "care"},
                    ],
                    [
                        { id: 25, image: "/images/galleries/25.jpeg", group: "care"},
                        { id: 26, image: "/images/galleries/26.jpeg", group: "care"},
                        { id: 27, image: "/images/galleries/27.jpeg", group: "care"},
                        { id: 28, image: "/images/galleries/28.jpeg", group: "care"},
                        { id: 29, image: "/images/galleries/29.jpeg", group: "care"},
                        { id: 30, image: "/images/galleries/30.jpeg", group: "care"},
                    ],
                    [
                        { id: 31, image: "/images/galleries/31.jpeg", group: "care"},
                        { id: 32, image: "/images/galleries/32.jpeg", group: "care"},
                        { id: 33, image: "/images/galleries/33.jpeg", group: "care"},
                        { id: 33, image: "/images/galleries/34.jpeg", group: "care"},
                        { id: 35, image: "/images/galleries/35.jpeg", group: "care"},
                        { id: 36, image: "/images/galleries/36.jpeg", group: "care"},
                    ],
                    [
                        { id: 37, image: "/images/galleries/37.jpeg", group: "care"},
                        { id: 38, image: "/images/galleries/38.jpeg", group: "care"},
                    ]
                ]
            }
        }
    }

    hdlClickedChangeGalleryState(s){
        this.setState({
            galleryState: s
        });
    }

    modalImageShow(e){
        const self = e.target;
        const src = self.getAttribute('src');

        document.getElementById("myModalImage").style.display = 'block';
        document.getElementById("modal-img-show").setAttribute('src', src);
    }

    modalImageHide(e){
        const self = e.target;

        if(self.classList.contains('modal-image') || self.classList.contains('modal-image-close')){
            document.getElementById("myModalImage").style.display = 'none';
            document.getElementById("modal-img-show").setAttribute('src','');
        }

    }

    render() {

        SwiperCore.use([Autoplay]);

        let { galleryList, galleryState = 'total' } = this.state;

        return(
            <>
            <section className="gallery-wrapper">
                <div className="container">
                    <div className="gallery">
                        <h2 className="title" data-aos="fade-up">MY CARE</h2>
                        <p className="subtitle" data-aos="fade-up">ภาพบรรยากาศภายใน Lakehouse Homecare</p>
                        <div className="group-btn">
                            <button className="btn" onClick={() => this.hdlClickedChangeGalleryState('total')} id="btn-slide-total" data-aos="fade-up">ทั้งหมด</button>
                            <button className="btn" onClick={() => this.hdlClickedChangeGalleryState('care')} id="btn-slide-care" data-aos="fade-up">การดูแล</button>
                            <button className="btn" onClick={() => this.hdlClickedChangeGalleryState('outdoor')} id="btn-slide-outdoor" data-aos="fade-up">บริเวณภายนอก</button>
                            <button className="btn" onClick={() => this.hdlClickedChangeGalleryState('room')} id="btn-slide-room" data-aos="fade-up">ห้องพัก</button>
                        </div>
                        <div className="swiper" id="swiper">
                            <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    autoplay={{
                                        delay: 3500,
                                        disableOnInteraction: false
                                    }}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                >
                                    {
                                        (galleryState)
                                            ?
                                            galleryList[galleryState].map((datas, i) => {
                                                return(
                                                    <SwiperSlide>
                                                        <div className="swiper-slide" kay={i}>
                                                            <div className="group-img">
                                                                {(datas) ? datas.map((d,j) => <img key={j} data-aos="fade-right" src={d.image} onClick={(event) => this.modalImageShow(event)} />) : 'a'}
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                            : ''
                                    }
                                </Swiper>
                            </div>
                            {/* <div className="swiper-pagination"></div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section id="myModalImage" className="modal-image" onClick={(event) => this.modalImageHide(event)}>
                <span className="modal-image-close" onClick={(event) => this.modalImageHide(event)}>&times;</span>
                <img className="modal-image-content" id="modal-img-show" src="/images/galleries/1.jpeg" />
            </section>
            </>
        )
    }
}




