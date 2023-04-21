import React from 'react';

const UserList: React.FC = ({people}: PeopleProps)=> {
    return (
        <>
            {people.map((person) => (
                <div key = {person.id} className = "person">
                    <img src = {person.image} alt = {person.name} />
                    <div>
                        <h4>{person.name}</h4>
                        <p>{person.age} years</p>
                    </div>
                </div>
            ))}
        </>
    )

}

export default UserList;