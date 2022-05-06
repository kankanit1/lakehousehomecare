import React from 'react';

const About = () => {
    return (
        <>
            <section className="aboutus-wrapper" id="about">
                <div className="container">
                    <div className="aboutus">
                        <h2 className="title aos-init aos-animate" data-aos="fade-up">About us</h2>
                        <p className="subtitle aos-init aos-animate" data-aos="fade-up">ภาพบรรยากาศภายใน Lakehouse Homecare</p>
                        <div className="content">
                            <div className="left">
                                <p data-aos="fade-right" className="aos-init aos-animate">
                                    ศูนย์ดูแลผู้สูงอายุ &amp; ฟื้นฟูผู้สูงอายุแบบครบวงจรตลอด 24 ชม. เปรียบเสมือนบ้านหลังที่ 2 
                                    ที่อยู่ใกล้ชิดธรรมชาติ(บึงหนองโคตร) โดยมีบุคลากรทางสุขภาพที่มีความเชี่ยวชาญในด้านการดูแลรักษาฟื้นฟู 
                                    (แพทย์ พยาบาล นักกายภาพบำบัดและทีมผู้ให้บริการ เป็นต้น) 
                                    ซึ่งล้วนผ่านการอบรมและได้รับการขึ้นทะเบียนของการสนับสนุนบริการสุขภาพกระทรวงสาธารณสุขมาดูแลและทำหน้าที่เสมือนลูกๆ
                                </p>
                                <p data-aos="fade-right" className="aos-init aos-animate">
                                    ให้การบริการบนพื้นฐานมาตรฐานสากล ซึ่งตัวศูนย์ฯ ได้รับการออกแบบที่เรียบหรู 
                                    สง่า ทันสมัย อบอุ่น น่าอยู่ ร่มรื่น บรรยากาศธรรมชาติที่ใกล้บึง (ทะเลน้ำจืด) 
                                    รวมถึงให้บริการเป็นรายบุคคล (มีการประเมินการดูแล) ศูนย์ฯ 
                                    เรามีเตียงสำหรับผู้สูงอายุที่หลากหลาย มีทั้งห้องรวมและห้องแยก สะอาด อากาศถ่ายเทได้ดี 
                                    รวมถึงบริเวณทำกิจกรรมสันทนาการ พร้อมสมาร์ททีวี อินเตอร์เน็ตและ CAFE 
                                    รองรับญาติที่เข้าเยี่ยม และสามารถทำบุญตักบาตรพระในตอนเช้าได้อีกด้วย
                                </p>
                            </div>
                            <figure className="right">
                                <img src="/images/img-aboutus.jpeg" className="image aos-init aos-animate" data-aos="fade-up" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;