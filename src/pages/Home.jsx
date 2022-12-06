import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import hero from '../assets/imgaes/hero.png'
import {Link} from 'react-router-dom'
import "../styles/home.css"
import Category from '../components/Ul/category/Category'
import featureImg1 from '../assets/imgaes/service-01.png'
import featureImg2 from '../assets/imgaes/service-02.png'
import featureImg3 from '../assets/imgaes/service-03.png'

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg1,
    desc: 'Qui nostrud reprehenderit sunt officia cupidatat ipsum enim cupidatat proident veniam pariatur mollit' 
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg2,
    desc: 'Quis consectetur reprehenderit in eiusmod sint id veniam pariatur est.',
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg3,
    desc: 'Sint eu esse sunt proident quis eiusmod ipsum sint do id.',
  },
]

const Home = () => {
  return (
    <Helmet title='Home'>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='mb-4 hero__title'><span>HUNGRY?</span> Just wait, Food<span> is right at your door!</span></h1>
                <p>some jagoons i need to find a lorem generator for my work</p>
                <div className='hero__btn'>
                  <button className='order__btn'>Order Now! <i class='ri-arrow-right-s-line'></i></button>
                  <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                </div>
                <div className='hero__service d-flex align-items-center gap-5 mt-3'>
                <p className='d-flex align-items-center gap-2'><span className='delivery__icon'><i class='ri-car-line'></i></span>Free Delivery</p>
                <p className='d-flex align-items-center gap-2'><span className='delivery__icon'><i class='ri-shield-check-line'></i></span>100% secure payments</p>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__image'>
                <img src={hero} alt='pizza delivery' className='w-100'/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Category/>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h5 className='feature__subtitle mb-4'>what we serve</h5>
              <h2 className='feature__title'>Just sit back at home</h2>
              <h2 className='feature__title'>We will <span>take care</span></h2>   
              <p className='mb-1 mt-4 feature__text'>some jagoons i need to find a lorem generator for my work</p>
              <p className='feature__text'>some jagoons i need to find a lorem generator for my work</p>             
            </Col>
           {featureData.map((item, i)=>(
            <Col lg='4' md='4' key={i} className='mt-5'>
              <div className='feature__item text-center px-5 py-3'>
                <img src={item.imgUrl} alt={item.title} className='w-25 mb-3'/>
                <h5 className='fw-bold mb-3'>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
           ))}
           
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
