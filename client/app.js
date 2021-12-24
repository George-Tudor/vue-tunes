const app = new Vue({
    el: '#books',
    data: () => ({
        authorSearch: '',
        titleSearch: '',
        results: [],
        showBooks: false,
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
            const titleTerm = encodeURIComponent(this.titleSearch)
            fetch(`https://itunes.apple.com/search?term=${titleTerm}&media=ebook&entity=ebook&limit=50`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
        }
    },

})