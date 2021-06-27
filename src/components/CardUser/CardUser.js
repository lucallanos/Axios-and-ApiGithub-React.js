import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import './CardUser.css';

const anchorStyle = {
    color: 'white',
    fontSize: 15,
};

function CardUser({ users }) {
    return (
        <div className='CardUser'>
            {users.map((user) => {
            return (
                <Card key={user.id}>
                    <Image src={user.avatar_url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{user.login}</Card.Header>
                        <Card.Meta>
                            <span className="date">{user.id}</span>
                        </Card.Meta>
                        <Card.Description>
                            <Button primary fluid>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={anchorStyle}>
                                    User Profile
                                </a>
                            </Button>
                        </Card.Description>
                    </Card.Content>
                </Card>
            );
            })}
        </div>
    );
}

export default CardUser;