const app = new Vue({
    el: '#books',
    data: () => ({
        authorSearch: '',
        titleSearch: '',
        searchAuthors: '',
        results: [],
        showBooks: false,
        showTitle: false,
        showAuthors: false
    }),
    methods: {
        search: function () {
            const term = encodeURIComponent(this.authorSearch)
            fetch(`https://itunes.apple.com/search?term=${term}&lang=en_us&media=ebook&entity=ebook&limit=500&attribute=authorTerm`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
        },
        searchTitle: function () {
            const titleTerm = encodeURIComponent(this.titleSearch)
            fetch(`https://itunes.apple.com/search?term=${titleTerm}&media=ebook&entity=ebook&limit=50`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
        },
        searchAuthorId: function () {
            const authorName = encodeURIComponent(this.searchAuthors)
            fetch(`https://itunes.apple.com/search?term=${authorName}&media=ebook&entity=ebookAuthor&attribute=authorTerm&limit=20`)
                .then(res => res.json())
                .then(res => this.results = res.results)
            }
        }


})