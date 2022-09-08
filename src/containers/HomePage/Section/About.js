import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về Website
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/TaJqxfMZMWs"
                            title="Shay Nắnggg - AMEE x OBITO x HỨA KIM TUYỀN x SKIN AQUA TONE UP UV | Official Music Video"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Mỗi lúc sớm mai em hay thường pha tách trà
                            Và nghe mùi hương của gió bay qua
                            Cũng đã mấy năm em không còn "say nắng" ai rồi.
                            Bởi em bận yêu cuộc đời mình thế thôi.

                            Hằng ngày, xung quanh em có biết bao nhiêu là
                            Niềm vui chờ em dạo chơi trước sân nhà
                            Và còn, thêm trên vai bao thứ em phải để tâm
                            Tự dưng một hôm trời mang anh đến đây

                            Chỉ là một ánh mắt khiến em chìm vào cơn say
                            Với môi cười sáng trong cho lòng bừng nắng
                            Đêm về gác tay nằm thao và thức
                            Em nên hay không nên hay nên rung động?
                            Em sợ một ngày nắng tắt cuốn theo cả cơn say anh
                            Nếu anh chẳng giống như em từng thầm nhớ
                            Nên là chắc em chậm thêm một chút
                            Cơn say đi qua rồi yêu sẽ đến thôi~

                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
