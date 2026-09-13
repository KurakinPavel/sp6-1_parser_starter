// @todo: напишите здесь код парсера

function parsePage() {

    function getOpenGraph() {
        return [...document.querySelectorAll('meta[property^="og:"]')]
            .reduce((acc, tag) => {
            const prop = tag.getAttribute('property');
            const content = tag.getAttribute('content');
            if (prop && content) {
                acc[prop.replace(/^og:/, '')] = content;
            }
            return acc;
        }, {});
    }

    return {
        meta: {
            "language": document.querySelector("html").lang,
            "title": document.querySelector('head title').textContent.split('—')[0].trim(),
            "keywords": document.querySelector('meta[name="keywords"]').getAttribute('content')
                .split(','),
            "description": document.querySelector('meta[name="description"]').getAttribute('content'),
            "opengraph": getOpenGraph()

        },
        product: {},
        suggested: [],
        reviews: []
    };
}

window.parsePage = parsePage;