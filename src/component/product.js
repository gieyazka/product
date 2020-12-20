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
        isHover : false,
    })
    const onMousemove = e => {
        console.log('====================================');
        console.log(e.target.id);
        console.log('====================================');
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        setStyleCard({
            ...styleCard,
            card: {
                ...styleCard.card, transform: `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
            }
        });
    }
    const onMouseEnter = e => {
        setStyleCard({
            ...styleCard,
            hover: true,
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
            hover : false,
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

        console.log(styleCard.card);

    }



    return (
        <div className='test1'>
            <div className="container" >
                <div className="card" id='1'  onMouseMove={(e) => { onMousemove(e) }} onMouseLeave={(e) => { onMouseleave(e) }} onMouseEnter={(e) => { onMouseEnter(e) }}  style={styleCard ? styleCard.card : null}>


                    <div className="product">
                        <div className="circle">                </div>
                        <img src={shoe} style={styleCard.sneaker} />
                    </div>
                    <div className="info" >
                        <h1 className="title" style={styleCard.title} >
                            Nike
                        </h1>
                        <h3 style={styleCard.title}> asdasdasdasdjfdfdfdfd</h3>
                        <div className="size" style={styleCard.title}>
                            <button >42</button>
                            <button >44</button>
                            <button className='active' >46</button>
                            <button >48</button>

                        </div>
                        <div className='purchase' style={styleCard.title}>
                            <button >Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="card" id='2'  onMouseMove={(e) => { onMousemove(e) }} onMouseLeave={(e) => { onMouseleave(e) }} onMouseEnter={(e) => { onMouseEnter(e) }}  style={styleCard ? styleCard.card : null}>


                    <div className="product">
                        <div className="circle">                </div>
                        <img src={shoe} style={styleCard.sneaker} />
                    </div>
                    <div className="info" >
                        <h1 className="title" style={styleCard.title} >
                            Nike
                        </h1>
                        <h3 style={styleCard.title}> asdasdasdasdjfdfdfdfd</h3>
                        <div className="size" style={styleCard.title}>
                            <button >42</button>
                            <button >44</button>
                            <button className='active' >46</button>
                            <button >48</button>

                        </div>
                        <div className='purchase' style={styleCard.title}>
                            <button >Purchase</button>
                        </div>
                    </div>
                </div>
             


            </div>
      
        </div>
    )
}
export default Productcard