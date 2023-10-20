import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import Title from './components/Title';
import FormInput from './components/FormInput';
import QAList from './components/QAList';
import { questAnswer } from '../src/data';

function App() {

  // pour stocker les donnees
  const [data, setData] = useState(questAnswer);

  // To Add a new item
  const addItem = () => {
    // Pour inserer et ajouter dans localStorage 
    localStorage.setItem('items', JSON.stringify([...questAnswer])); // pour prendre le meme modification 
    setData([...questAnswer]);
  }

  //to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    questAnswer.splice(0, questAnswer.length);
    setData([]);
    // notify("تم حذف الكل بنجاح", "Success")
  }

   // To refresh our data base (delete)
   const deleteOneItem = (items) => {
    localStorage.setItem('items', JSON.stringify([...items])); // pour prendre les memes modifications
    setData([...items]);
    if( items.length <= 0 ){
      deleteAllItems();
    }
  }

  return (
    <>
      <div className='font color-body'>
        <Container className='p-5'>
          <Row className='justify-content-center my-3'>
            <Col sm='4' >
              <Title />
            </Col>
            <Col sm='8'>
              <FormInput onAdd={addItem} />
              <QAList data={data} deleteOneItem={deleteOneItem} />
              {
                // condition: si il ya des question on affiche le bouton Delete ALL sinon on ne l'affiche pas
                localStorage.getItem('items') != null ?
                  (<button onClick={deleteAllItems} className='btn-color w-100 my-3'>Delete All</button>)
                  : null
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
