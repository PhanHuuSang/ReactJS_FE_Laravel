import React from 'react'
import Container from '../../../Container'
import Slider from 'react-slick'
import banner1 from '../../../../images/banner1.webp'
import banner2 from '../../../../images/banner2.webp'
import banner3 from '../../../../images/banner3.webp'
import banner4 from '../../../../images/banner4.webp'
import bannerChild1 from '../../../../images/bannerChild1.webp'
import bannerChild2 from '../../../../images/bannerChild2.webp'

const SectionBanner = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        };
  return (
    <div class="sectionBanner">
        <Container>
            <div class="row">
                <div class="col-md-8">
                    <Slider {...settings}>
                        <img src={banner1} title={banner1}/>
                        <img src={banner2} title={banner2}/>
                        <img src={banner3} title={banner3}/>
                        <img src={banner4} title={banner1}/>
                    </Slider>
                </div>
                <div class="col-md-4">
                    <div class="bannerChild">
                        <img src={bannerChild1} title={bannerChild1}/>
                        <img src={bannerChild2} title={bannerChild2}/>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default SectionBanner