import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();                     // prevent page reload
        window.history.pushState({}, '', href);     // this simply changes the URL not the content

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a 
            onClick={ onClick }
            className={className} 
            href={href}
        >
            {children}
        </a>
    );
};

export default Link;