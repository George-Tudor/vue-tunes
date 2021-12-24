const app = new Vue({
    el: '#books', '#titles',
    data: () => ({
        authorSearch: '',
        results: [],
        showBooks: false,
        titleSearch: '',
        showTitle: false
    }),
    methods: {
        search: function () {
            const term = encodeURIComponent(this.authorSearch)
            fetch(`https://itunes.apple.com/search?term=${term}&lang=en_us&media=ebook&entity=ebook&limit=500&attribute=authorTerm`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
            },
        searchTitle: function () {
            const term = encodeURIComponent(this.titleSearch)
            fetch(`https://itunes.apple.com/search?term=${term}&media=ebook&entity=ebook&limit=50`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
        }
    }
})