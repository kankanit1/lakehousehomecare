
import React from 'react';


const Room = () => {
    return (
        <>
        <section className="room-wrapper" id="room">
            <div className="container">
                <div className="room">
                    <h2 className="title" data-aos="fade-up">ROOM</h2>
                    <p className="subtitle" data-aos="fade-up">มีทั้งหมด 2 ชั้น | 6 ห้องพัก 14 เตียง</p>
                    <div className="content">
                        <div className="card-room" data-aos="fade-up">
                            <div className="card-header">
                                <div className="card-title">ชั้นบน</div>
                                <div className="card-subtitle"><i>4 ห้องพัก 3 ห้องน้ำ</i></div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องพักรวมแบบคู่  ( 2 เตียง : A201-A202 ) + ห้องน้ำ</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องพักรวมแบบคู่ ( 2 เตียง : A201-A202 )</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องพักเดี่ยว ( A207 ) + ห้องน้ำ</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องธุรการ / กล้องวงจรปิด / ห้องเก็บเอกสาร </p>
                                    </li>
                                </ul>

                                <a href="#contact" className="btn">สนใจ/สอบถาม</a>
                            </div>
                        </div>
                        <div className="card-room" data-aos="fade-up">
                            <div className="card-header">
                                <div className="card-title">ชั้นล่าง</div>
                                <div className="card-subtitle"><i>2 ห้องพัก 3 ห้องน้ำ</i></div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องพักรวมใหญ่ 1 ห้อง ( 5 เตียง : A101-A105 )</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องพักรวมแบบคู่ 1 ห้อง ( 2 เตียง : A106-A107 )</p>
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        <p>ห้องน้ำ 3 ห้อง , ห้องครัว บริเวณซักล้าง </p>
                                    </li>
                                </ul>
                                <a href="#contact" className="btn">สนใจ/สอบถาม</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Room;