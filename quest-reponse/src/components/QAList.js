import React from 'react'
import { Row, Accordion } from 'react-bootstrap'
import { questAnswer } from '../data';

const QAList = ({ data, deleteOneItem }) => {

    // dataLocal: Get DataBase from localStorage to dataLocal (Variable)
    const dataLocal = JSON.parse(localStorage.getItem('items')); 

    // To Delete one item by id
    const onDeleteItem = (ID) => {
        if (localStorage.getItem('items') != null) {
            // To find index by id 
            const index = questAnswer.findIndex((item) => item.id === ID);
            // To delete the item
            questAnswer.splice(index, 1);
            // To refresh our array
            deleteOneItem(questAnswer);
        }
    }

    return (
        <>
            <Row>
                {
                    localStorage.getItem('items') != null ? (
                        dataLocal.map((item, index) => {
                            return (
                                <Accordion key={index} >
                                    <Accordion.Item eventKey={item.id} >
                                        <Accordion.Header> {item.quest} </Accordion.Header>
                                        <Accordion.Body className="text-start bodyAccor">
                                            <div>
                                                {item.answer}
                                            </div>
                                            <button
                                                onClick={() => onDeleteItem(item.id)}
                                                className='btn-color' >
                                                Delete
                                            </button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            )
                        })
                    ) : <h1 className="fs-4 text-center p-5" > There is no question now !! </h1>
                }
            </Row>
        </>
    )
}

export default QAList