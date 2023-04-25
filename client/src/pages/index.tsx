import { FC } from 'react';

// For example !!!
const users = [
    {
        id: 1,
        name: 'Stas',
    },
    {
        id: 2,
        name: 'Ilya',
    },
    {
        id: 3,
        name: 'Ilona',
    },
];

// For example !!!
const MainPage: FC = () => {
    return (
        <div>
            {users.map(({ id, name }) => (
                <div key={id}>
                    <p>{name}</p>
                </div>
            ))}
        </div>
    );
};

export default MainPage;
