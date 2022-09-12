import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function FavList() {
    const [favList, setFavList] = useState();

    async function getFavList() {
        let url = `https://agent-store.herokuapp.com/favlist`
        let response = await fetch(url, {
            method: 'GET'
        });
        let recivedData = await response.json();
        setFavList(recivedData)
    }

    async function handleDelete(id) {
        let url = `https://agent-store.herokuapp.com/favlist/${id}`;
        let response = await fetch(url, {
            method: 'DELETE',
        })
        if (response.status === 204) {
            getFavList();
            alert("Recipe deleted successfully");
        }
    }


    useEffect(() => {
        getFavList();
    }, []);
    return (
        <>
            <h1>Favourite List Page</h1>
            {
                favList && favList.map((favlist) => {
                    return (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={favlist.image} />
                            <Card.Body>
                                <Card.Title>{favlist.title}</Card.Title>
                                <Card.Text>{favlist.description} </Card.Text>
                                <Card.Text>{favlist.rating} </Card.Text>
                                <Card.Text> {favlist.price} </Card.Text>
                                <Button variant="primary" onClick={() => handleDelete(favlist.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                }
                )
            }

        </>
    )
}


