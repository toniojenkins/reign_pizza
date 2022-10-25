import Image from 'next/image';
import React from 'react';
const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer_item">
                <Image src="/img/bg.png" alt="" layout="fill" />
            </div>
            <div className="footer_item">
                <div className="footer_card">
                    <h2 className="footer_motto">
                        OH YES, WE DID THE REIN PIZZA, WELL BAKED SLICE OF PIZZA
                    </h2>
                </div>
                <div className="footer_card">
                    <h1 className="footer_title">FIND OUR RESTAURANTS</h1>
                    <p className="footer_text">
                        1920 S. Clover Rd. #777,
                        <br /> Las Vegas, 89084
                        <br /> 702-208-9123
                    </p>
                    <p className="footer_text">
                        1988 N. Don Dr. #777,
                        <br /> Las Vegas, 89084
                        <br /> 702-208-9120
                    </p>
                    <p className="footer_text">
                        2170 E Clover Highway #777,
                        <br /> Las Vegas, 89084
                        <br /> 702-208-9122
                    </p>
                    <p className="footer_text">
                        801 W. Terrance Street #777,
                        <br /> Las Vegas, 89084
                        <br /> 702-208-9121
                    </p>
                </div>
                <div className="footer_card">
                    <h1 className="footer_title">WORKING HOURS</h1>
                    <p className="footer_text">
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className="footer_text">
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
