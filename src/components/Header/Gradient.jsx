import React from "react";
import "~/styles/gradient.css";
export default function Gradient() {
    return (
        <>
            {/* Gradient */}
            <section className="gradient">
                <div className="container">
                    <div className="gradient__inner dfbetween">
                        <div className="gradient__info dfbetween hiddenMobile">
                            <a href={`tel:${process.env.REACT_APP_BRAND_PHONE}`} className="gradient__phone dfcenter">
                                <img src={`${process.env.REACT_APP_BASE_URL}/assets/icon/phone.svg`} alt="Phone" className="gradient__icon" />
                                {process.env.REACT_APP_BRAND_PHONE}
                            </a>
                            <a href={`mailto:${process.env.REACT_APP_BRAND_EMAIL}`} className="gradient__email dfcenter">
                                <img src={`${process.env.REACT_APP_BASE_URL}/assets/icon/email.svg`} alt="Email" className="gradient__icon" />
                                {process.env.REACT_APP_BRAND_EMAIL}
                            </a>
                        </div>

                        <p className="gradient__message">
                            Ở đây chúng tôi luôn có những sản phẩm mà bạn mong muốn
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
