var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    const data = {
        otherData: 'Welcome to my personal website!',
        title: 'Stephanie McCumsey',
        contactLinks: [{
                name: 'resume',
                url: 'https://github.com/smccumsey/resume/blob/master/RESUME.md'
            }, {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/stephaniemccumsey'
            }
        ],
        projectLinks: [{
                name: 'Eugene project',
                url: '/eugene'
            }
        ]
    };
    const vueOptions = {
        head: {
            title: 'Stephanie McCumsey',
            structuredData: {
                "@context": "http://schema.org",
                "@type": "WebPage",
                "url": "https://www.smccumsey.com",
                "author": [{
                    "@type": "Person",
                    "name": "Stephanie McCumsey"
                }]
            },
            meta: [{
                    property: 'og:title',
                    content: 'Stephanie McCumsey'
                },
                {
                    script: 'https://unpkg.com/vue@2.4.2/dist/vue.js'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                }
            ]
        }
    }
    res.renderVue('main', data, vueOptions);
})

module.exports = router;
