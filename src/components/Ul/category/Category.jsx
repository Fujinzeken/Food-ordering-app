import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import categoryImg1 from '../../../assets/imgaes/category-01.png'
import categoryImg2 from '../../../assets/imgaes/category-02.png'
import categoryImg3 from '../../../assets/imgaes/category-03.png'
import categoryImg4 from '../../../assets/imgaes/category-04.png'
import './category.css'

const FoodImages = [
    {
        display:'Fast Food',
        imgUrl: categoryImg1
    },
    {
        display:'Pizza',
        imgUrl: categoryImg2
    },
    {
        display:'African Food',
        imgUrl: categoryImg3
    },
    {
        display:'Raw Meat',
        imgUrl: categoryImg4
    },
]

const Category = () => {
  return (
    <Container>
      <Row>
        {FoodImages.map((food, index)=>(
            <Col lg='3' md='4'>
                <div className='category__item d-flex align-items-center gap-3'>
                    <div className='category__img'>
                        <img src={food.imgUrl} alt={food.display}/>
                    </div>
                    <h6>{food.display}</h6>
                </div>
            </Col>
        ))}
        
      </Row>
    </Container>
  )
}

export default Category
