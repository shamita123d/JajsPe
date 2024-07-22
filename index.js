document.addEventListener('DOMContentLoaded', () => {
    
    const urls = {
        'business-accounts-link': './components/business-accounts.html',
        'blog-link': './components/blog.html', 
        'about-link': './components/about.html', 
        'contact-us-link': './components/contact-us.html'
    };

    Object.keys(urls).forEach(id => {
        const link = document.getElementById(id);
        if (link) {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                window.location.href = urls[id]; 
            });
        }
    });
});

