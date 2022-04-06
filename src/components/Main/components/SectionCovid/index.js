import React from 'react'
import Container from '../../../Container'
import covid1 from '../../../../images/iconCovid1.png'
import covid2 from '../../../../images/iconCovid2.png'
import covid3 from '../../../../images/iconCovid3.png'
import covid4 from '../../../../images/iconCovid4.png'
import covid5 from '../../../../images/iconCovid5.png'
import covid6 from '../../../../images/iconCovid6.png'
import { Link } from 'react-router-dom'


const SectionCovid = (props) => {
    const covid = [
        {
            name:"TRIỆU CHỨNG COVID-19",
            link:"Tìm hiểu thêm",
            imageCovid: covid1
        },
        {
            name:"bệnh nhận covid-19",
            link:"Tìm hiểu thêm",
            imageCovid:covid2
        },
        {
            name:"chăm sóc bệnh nhân covid-19",
            link:"Tìm hiểu thêm",
            imageCovid: covid3
        },
        {
            name:"thuốc điều tri covid-19",
            link:"Tìm hiểu thêm",
            imageCovid: covid4
        },
        {
            name:"thiết bị đo SPO2",
            link:"Tìm hiểu thêm",
            imageCovid: covid5
        },
        {
            name:"Đường dây nóng",
            link:"Tìm hiểu thêm",
            imageCovid: covid6
        },
    ]

  return (
    <div class="sectionCovid">
        <Container>
            <div class="row">
                <div class="col-md-12">
                    <div class="fullCovid">
                        <Container>
                            <div class="row">
                                <div class="col-md-12">
                                    <h1 class="nameCovid">Chuyên mục covid-19</h1>
                                </div>
                                <div class="listCovid">
                                    {
                                        covid.map(name => (
                                            <div class="itemCovid">
                                                <Link to="/">
                                                    <img src={name.imageCovid} title={name.imageCovid}></img>
                                                    <h1>{name.name}</h1>
                                                    <p>{name.link}</p>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default SectionCovid