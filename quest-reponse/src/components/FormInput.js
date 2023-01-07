import React, {useState} from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { questAnswer } from '../data';

const FormInput = ({onAdd}) => {

    const [quest, setQuest] = useState('')
    const [answer, setAnswer] = useState('')

    // To push data to array
    const addNewItem = ()=>{
        questAnswer.push( { id: Math.random(), quest: quest, answer:  answer } );
        // clear input
        setQuest('');
        setAnswer('');
        // to render browser
        onAdd();
    }

    return (
        <>
            <Row className='my-3'>
                <Col sm='5'>
                    <Form.Control type="text" placeholder="Enter your question"
                        value={quest} onChange={ (e) => setQuest( e.target.value ) }
                    />
                </Col>
                <Col sm='5'>
                    <Form.Control type="text" placeholder="Enter your answer"
                        value={answer} onChange={ (e) => setAnswer( e.target.value ) }
                    />
                </Col>
                <Col sm='2'>
                    <button type="submit" className='btn-color w-100'
                       onClick={addNewItem} >
                        Submit
                    </button>
                </Col>
            </Row>
        </>
    )
}

export default FormInput