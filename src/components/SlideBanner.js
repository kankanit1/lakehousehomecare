import React from 'react';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide  } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const SlideBanner = () => {
    SwiperCore.use([Autoplay]);
    return (
        <>
        <section className="slide-banner-wrapper" id="lakehouse">
            <div className="swiper" id="swiper-slide-banner">
                <div className="swiper-wrapper">
                    <Swiper
                            modules={[Pagination, Autoplay, A11y]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            loop={true}
                        >
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide">
                                    <div className="content">
                                        <h1 className="title">ศูนย์ดูแล และฟื้นฟูผู้สูงอายุแบบครบวงจรตลอด 24 ชม.</h1>
                                        <p className="subtitle">
                                            <i>
                                                เปรียบเสมือนบ้านหลังที่ 2 ที่อยู่ใกล้ชิดธรรมชาติ(บึงหนองโคตร) โดยมีบุคลากรทางสุขภาพที่มีความเชี่ยวชาญในด้านการดูแลรักษาฟื้นฟู(แพทย์ พยาบาล นักกายภาพบำบัดและทีมผู้ให้บริการ เป็นต้น) ซึ่งล้วนผ่านการอบรมและได้รับการขึ้นทะเบียนของการสนับสนุนบริการสุขภาพกระทรวงสาธารณสุขมาดูแล และทำหน้าที่เสมือนลูกๆ
                                            </i>
                                        </p>
                                        <a href="#contact" className="btn">ติดต่อ/สอบถาม</a>
                                    </div>
                                    <figure className="image">
                                        <img src="/images/galleries/2.jpeg" />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide">
                                    <div className="content">
                                        <h1 className="title">ศูนย์ดูแล และฟื้นฟูผู้สูงอายุแบบครบวงจรตลอด 24 ชม.</h1>
                                        <p className="subtitle">
                                            <i>
                                            Lakehousehomecare ให้การบริการบนพื้นฐานมาตรฐานสากล น่าอยู่ ร่มรื่น บรรยากาศใกล้ชิดกับธรรมชาติ ซึ่งตัวศูนย์ดูแลผู้สูงอายุ & ฟื้นฟูผู้สูงอายุ ยังมีบริการเป็นรายบุคคล ทั้งนี้ขึ้นอยู่กับการประเมินการดูแล พร้อมทั้งมีกิจกรรมสันทนาการสำหรับผู้สูงอายุ เพื่อฟื้นฟูร่างกายและสมอง ลดความเครียดอีกด้วย
                                            </i>
                                        </p>
                                        <a href="#contact" className="btn">ติดต่อ/สอบถาม</a>
                                    </div>
                                    <figure className="image">
                                        <img src="/images/galleries/16.jpeg" />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide">
                                    <div className="content">
                                        <h1 className="title">ศูนย์ดูแลผู้สูงอายุ และ ฟื้นฟูผู้สูงอายุแบบครบวงจรตลอด 24 ชม.</h1>
                                        <p className="subtitle">
                                            <i>
                                            ทาง Lakehousehomecare พร้อมดูแลคนที่คุณรักอย่างมืออาชีพ เรามีทั้ง แพทย์, พยาบาล และผู้ดูแล Caregiver ที่เชี่ยวชาญคอยดูแลอย่างใกล้ชิด อีกทั้งทางศูนย์ฯ ยังดูแลไปถึงโภชนาการทางอาหาร ให้เหมาะสมกับแต่ละบุคคลอีกด้วย เราใส่ใจในการดูแล ฟื้นฟูสภาพกายใจให้ผู้สูงวัยมีพลัง เพื่อให้ท่านคลายกังวล เพราะท่านได้เลือกสิ่งที่ดีสมบูรณ์แบบให้กับคนที่ท่านรัก
                                            </i>
                                        </p>
                                        <a href="#contact" className="btn">ติดต่อ/สอบถาม</a>
                                    </div>
                                    <figure className="image">
                                        <img src="/images/galleries/3.jpeg" />
                                    </figure>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default SlideBanner;