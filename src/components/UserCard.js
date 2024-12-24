import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({user}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid" />
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
        </div>
    )
}

export default UserCard