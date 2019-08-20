import React from 'react'

import { Card, Button, CardTitle} from 'reactstrap';
import { Row, Col } from 'reactstrap';

import uk from '../../icons/united-kingdom.svg'
import de from '../../icons/germany.svg'
import it from '../../icons/italy.svg'
import es from '../../icons/spain.svg'
import jp from '../../icons/japan.svg'
import ko from '../../icons/south-korea.svg'
import cn from '../../icons/china.svg'

export default function Pokemon() {
    return (
        <div>
            <Row>
                <Col>
                    <Card className="mb-1" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle>
                            <div class="cardTitle"> {/*This is flexed */}
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png"></img>
                                <div className="cardInfo">
                                    <p className="biggerText">
                                        Roserade
                                    </p>
                                    <h4>
                                        #407
                                    </h4>
                                </div>
                                <div className="languages"> {/*This is flexed */}
                                    <div className="language"> {/*This is flexed */}
                                        <img src={uk}/>
                                        Roserade
                                    </div>
                                    <div className="language">
                                        <img src={jp}/>
                                        ロズレイド
                                    </div>
                                    <div className="language">
                                        <img src={de}/>
                                        Roserade
                                    </div>
                                    <div className="language">
                                        <img src={it}/>
                                        Roserade
                                    </div>
                                    <div className="language">
                                        <img src={es}/>
                                        Roserade
                                    </div>
                                    <div className="language">
                                        <img src={ko}/>
                                        로즈레이드
                                    </div>
                                    <div className="language">
                                        <img src={cn}/>
                                        罗丝雷朵
                                    </div>
                                </div>
                            </div> 
                        </CardTitle>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}