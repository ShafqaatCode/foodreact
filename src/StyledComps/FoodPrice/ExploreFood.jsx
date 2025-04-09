import React from 'react';
import { ExploreFoodSection, Wrapper, FoodGrid, Card, CardContent, OrderButton, TextContent } from './ExploreFood.styled';
import dosa from '../../assets/dosa.jpg';

const ExploreFood = () => {
    return (
        <ExploreFoodSection id="explore-food">
            <Wrapper>
                <div className="explore-container">
                    <TextContent>
                        <h2>
                            Explore Our <span style={{ color: '#a82c38' }}>Foods</span>
                        </h2>
                        <p>
                            Food is often the reason why people travel! After all, there is no better way to appreciate <br></br>
                            a culture than by sampling local flavors.
                        </p>
                    </TextContent>

                    <FoodGrid>
                        {[...Array(8)].map((_, index) => (
                            <Card key={index}>
                                <img src={dosa} alt="Vegetable Sandwich" />
                                <CardContent>
                                    <h4>Vegetable Sandwich</h4>
                                    <p>
                                        Time: 15 - 20 Minutes <br />
                                        
                                    </p>
                                    <p><span className="rating">4.3 ★</span></p>
                                    <span className="price">
                                        ₹150 <del>₹180</del>
                                    </span>
                                    <OrderButton>Order Now</OrderButton>
                                </CardContent>
                            </Card>
                        ))}
                    </FoodGrid>
                </div>
            </Wrapper>
        </ExploreFoodSection>
    );
};

export default ExploreFood;
