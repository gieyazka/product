import React, { useEffect } from 'react'
import './style.css'
import shoe from './nike.png'

const Productcard = () => {
    const [styleCard, setStyleCard] = React.useState({
        card: {},
        title: {},
        sneaker: {},
        purchase: {},
        descriptor: {},
        isHover: null,
    })
    const onMousemove = e => {

        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        setStyleCard({
            ...styleCard,
            card: {
                ...styleCard.card, transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`, transition: 'all 0.5s ease'
            }
        });
    }
    const onMouseEnter = e => {

        setStyleCard({
            ...styleCard,
            isHover: e.target.id,
            sneaker: {
                transform: 'translateZ(200px) rotateZ(-45deg)'
            },
            title: {
                transform: 'translateZ(150px)'
            }
            , card: {
                ...styleCard.card, transition: 'none',
                // transformtransition: 'all 0.5 ease',

            }
        });

    }
    const onMouseleave = e => {
        setStyleCard({
            ...styleCard,
            // isHover: null,
            sneaker: {
                transform: 'translateZ(0px) rotateZ(0deg)'

            },
            title: {
                transform: 'translateZ(0px)'
            }, card:
            {
                ...styleCard.card, transform: `rotateY(0deg) rotateX(0deg)`, transition: 'all 0.5s ease'
            }
        });



    }

    // console.log(styleCard.isHover);

    return (
        <div className='test1'> 
            <div className="container" id='1' onMouseMove={(e) => { onMousemove(e) }} onMouseLeave={(e) => { onMouseleave(e) }} onMouseEnter={(e) => { onMouseEnter(e) }} >
                <div className="card" style={styleCard.isHover == '1' ? styleCard.card : null} >


                    <div className="product">
                        <div className="circle"></div>
                        <img src={shoe} style={styleCard.isHover == '1' ? styleCard.sneaker : null} />
                    </div>
                    <div className="info" >
                        <h1 className="title" style={styleCard.isHover == '1' ? styleCard.title : null} >
                            Nike
                        </h1>
                        <h3 style={styleCard.isHover == '1' ? styleCard.title : null}> asdasdasdasdjfdfdfdfd</h3>
                        <div className="size" style={styleCard.isHover == '1' ? styleCard.title : null}>
                            <button >42</button>
                            <button >44</button>
                            <button className='active' >46</button>
                            <button >48</button>

                        </div>
                        <div className='purchase' style={styleCard.isHover == '1' ? styleCard.title : null}>
                            <button >Purchase</button>
                        </div>
                    </div>
                </div>

             
                    {/* <div className="card test2" style={styleCard.isHover == '2' ? styleCard.card : null} id='2' onMouseMove={(e) => { onMousemove(e) }} onMouseLeave={(e) => { onMouseleave(e) }} onMouseEnter={(e) => { onMouseEnter(e) }}>


                        <div className="product">
                            <div className="circle">                </div>
                            <img src={shoe} style={styleCard.isHover == '2' ? styleCard.sneaker : null} />
                        </div>
                        <div className="info" >
                            <h1 className="title" style={styleCard.isHover == '2' ? styleCard.title : null} >
                                Nike
                        </h1>
                            <h3 style={styleCard.isHover == '2' ? styleCard.title : null}> asdasdasdasdjfdfdfdfd</h3>
                            <div className="size" style={styleCard.isHover == '2' ? styleCard.title : null}>
                                <button >42</button>
                                <button >44</button>
                                <button className='active' >46</button>
                                <button >48</button>

                            </div>
                            <div className='purchase' style={styleCard.isHover == '2' ? styleCard.title : null}>
                                <button >Purchase</button>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="card test2" style={styleCard.isHover == '3' ? styleCard.card : null} id='3' onMouseMove={(e) => { onMousemove(e) }} onMouseLeave={(e) => { onMouseleave(e) }} onMouseEnter={(e) => { onMouseEnter(e) }}>


                        <div className="product">
                            <div className="circle">                </div>
                            <img src={shoe} style={styleCard.isHover == '3' ? styleCard.sneaker : null} />
                        </div>
                        <div className="info" >
                            <h1 className="title" style={styleCard.isHover == '3' ? styleCard.title : null} >
                                Nike
                        </h1>
                            <h3 style={styleCard.isHover == '3' ? styleCard.title : null}> asdasdasdasdjfdfdfdfd</h3>
                            <div className="size" style={styleCard.isHover == '3' ? styleCard.title : null}>
                                <button >43</button>
                                <button >44</button>
                                <button className='active' >46</button>
                                <button >48</button>

                            </div>
                            <div className='purchase' style={styleCard.isHover == '3' ? styleCard.title : null}>
                                <button >Purchase</button>
                            </div>
                        </div>
                    </div> */}

                </div>
        </div>
    )
}
export default Productcard