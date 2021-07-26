import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'We use react by creating components.'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] =useState(options[0]);
    const [active, setActive] = useState(true);

    return (
        <div className="container">
            {/* <button onClick={() => setActive(!active)} >Toggle Dropdown</button>
            { active ?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected} 
                    options={options} />
                : null } */}

            <Translate />
        </div>
    );
};