const head =  [
    [
        'link', 
        { 
            rel: 'icon', 
            href: '/images/favicon.ico', 
            alt: 'lavacat logo' 
        }
    ],
    [
        'meta', 
        { 
            name: 'og:title', 
            content: 'Official LavaCat docs' 
        }
    ],
    [
        'meta', 
        { 
            name: 'og:description', 
            content: 'Official LavaCat\' documentation' 
        }
    ],
    [
        'meta', 
        { 
            name: 'og:type', 
            content: 'website' 
        }
    ],
    [
        'meta', 
        { 
            name: 'og:url', 
            content: 'https://lavacat.xyz/' 
        }
    ],
    [
        'meta', 
        { 
            name: 'og:locale', 
            content: 'en_US' 
        }
    ],
    [
        'meta', 
        { 
            name: 'viewport', 
            content: 'width=device-width,initial-scale=1,user-scalable=no' 
        }
    ]
];

module.exports = head;
