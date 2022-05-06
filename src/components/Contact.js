import React from 'react';
import Swal from 'sweetalert2';
import json5 from 'json5'

export default class Contact extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            email: '',
            tel: '',
            message: '',
        }
    }
    hdlFullname(e){
        this.setState({
            fullname: e.target.value
        })
    }
    hdlEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    hdlTel(e){
        this.setState({
            tel: e.target.value
        })
    }
    hdlMessage(e){
        this.setState({
            message: e.target.value
        })
    }
    hdlClickedSubmit(){
        const fullname = this.state.fullname;
        const email = this.state.email;
        const tel = this.state.tel;
        const message = this.state.message;

        if(!fullname || !email || !tel || !message){
            Swal.fire({
                title:"แจ้งเตือน !!",
                icon: "warning",
                text: "กรุณากรอกข้อมูลให้ครบถ้วนด้วยนะคะ"
            });
            return false;
        }

        fetch(`/api/sendmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fullname, email, tel, message})
        });


        Swal.fire({
            title: "ขอบคุณสำหรับการส่งข้อความ",
            icon: "success",
            text: "ระบบได้ทำการส่งข้อความแล้ว เราจะทำการตอบกลับโดยเร็วที่สุด",
            footer: "โทรติดต่อ เลคเฮ้าส์โฮมแคร์ : 080-063-9886",
        }).then(() => {
            this.setState({
                fullname:'',
                email: '',
                tel: '',
                message: '',
            })
        });
    }

    render(){

        let { fullname, email, tel, message } = this.state;

        return(
            <> 
                <section className="contact-wrapper" id="contact">
                    <div className="container">
                        <div className="contact">
                            <h2 className="title" data-aos="fade-up">Contact</h2>
                            <p className="subtitle" data-aos="fade-up">สนใจติดต่อสอบถามได้ที่</p>
                            <div className="content">
                                <div className="left">
                                    <div className="form">
                                        <label data-aos="fade-right">ส่งข้อความถึงเรา</label>
                                        <input type="text" className="form-control" placeholder="ชื่อ - สกุล" data-aos="fade-right" onChange={(e) => this.hdlFullname(e)} value={fullname}/>
                                        <input type="email" className="form-control"  placeholder="อีเมล์" data-aos="fade-right" onChange={(e) => this.hdlEmail(e)} value={email}/>
                                        <input type="text" className="form-control" placeholder="เบอร์โทร" data-aos="fade-right" onChange={(e) => this.hdlTel(e)} value={tel} />
                                        <textarea placeholder="ข้อความ..."  data-aos="fade-right" onChange={(e) => this.hdlMessage(e)} value={message}></textarea>
                                        <button className="submit" type="button" data-aos="fade-right" onClick={() => this.hdlClickedSubmit()}>ส่ง</button>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="col-2">
                                        <div className="col-left" data-aos="fade-up">
                                            <p className="address">111 / 11 หมู่ 12 หมู่บ้านเลคไซต์วิว ถ.เรียบริมบึงหนองโครต ต. บ้านเป็ด อ. เมืองขอนแก่น จ. ขอนแก่น 40000</p>
                                            <p className="phone">โทรติดต่อ เลคเฮ้าส์โฮมแคร์ : 080-063-9886</p>
                                        </div>
                                        <div className="col-right" data-aos="fade-up">
                                            <p className="address"> 111 / 11 Moo 12 (Lake Side View Village), Nong Khot Ban Ped Subdistrict, Muang Khonkaen, 40000</p>
                                            <p className="phone">Call: 080-063-9886</p>
                                        </div>
                                    </div>
                                    <div className="social" >
                                        <a href="#" target="_blank" data-aos="fade-up"> <i className="fab fa-line"></i></a>
                                        <a href="#" target="_blank" data-aos="fade-up"> <i className="fab fa-facebook"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}