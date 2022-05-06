import React from 'react';

const Service = () => {
    return(
        <>
            <section className="service-wrapper" id="service">
                <div className="container">
                    <div className="service">
                        <h2 className="title aos-init aos-animate" data-aos="fade-up">
                            WHY Lakehouse Homecare ?
                        </h2>
                        <p className="subtitle aos-init aos-animate" data-aos="fade-up">
                            เราดูแลคนที่คุณรักด้วยมืออาชีพ
                        </p>
                        <div className="content">
                            <figure className="left">
                                <img data-aos="fade-up" src="/images/servicrs/img-service.png" className="aos-init aos-animate" />
                            </figure>
                            <div className="right">
                                <ul>
                                    <li data-aos="face-up" className="aos-init aos-animate">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">ดูแลอย่างใกล้ชิด ตลอด 24 ชั่วโมง</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init aos-animate">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">ให้อารมณ์เหมือนอยู่บ้านที่ใกล้ธรรมชาติ ได้อากาศบริสุทธิ์และผ่อนคลายไปกับวิวบึงหนองโคตร</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init aos-animate">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">มีกิจกรรมนันทนาการ ฟื้นฟูกายและสมอง</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">มีระบบกล้องวงจรปิด รักษาความปลอดภัย 24 ชั่วโมงและสามารถติดตามความเคลื่อนไหวของคนที่คุณรักได้</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">เมื่อเกิดเหตุฉุกเฉิน เราสามารถนำส่งโรงพยาบาลได้ สะดวกรวดเร็ว</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">มีแพทย์, พยาบาล และผู้ดูแล Caregiver ที่เชี่ยวชาญคอยดูแล</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">ห้องพัก สะอาด สงบ อบอุ่น ปลอดภัย ปลอดโปร่ง</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">ดูแลโภชนาการอาหารที่ได้มาตรฐาน ห้องครัวสะอาด ถูกหลักอนามัย</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">มีสวนหย่อม ช่วยสร้างความผ่อนคลาย ลดความเครียด</p>
                                    </li>
                                    <li data-aos="face-up" className="aos-init">
                                        <i className="fas fa-check-circle"></i>
                                        <p className="msg">ศูนย์ดูแลผู้สูงอายุอยู่ใกล้โรงพยาบาลมากกว่า 1 แห่ง และใกล้ร้านอาหาร ห้างสรรพสินค้า ตลาด </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Service;