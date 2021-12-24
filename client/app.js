const app = new Vue({
    el: '#books',
    data: () => ({
        authorSearch: '',
        results: [],
        showBooks: false
    }),
    methods: {
        search: function () {
            const term = encodeURIComponent(this.authorSearch)
            fetch(`https://itunes.apple.com/search?term=${term}&lang=en_us&media=ebook&entity=ebook&limit=500&attribute=authorTerm`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
        }
    },
    el: '#titles',
    data: () => ({
        titleSearch: '',
        results: [],
        showTitle: false
    }),
    methods: {
        searchTitle: function () {
            const term = encodeURIComponent(this.titleSearch)
            fetch(`https://itunes.apple.com/search?term=${term}&media=ebook&entity=ebook&limit=50`)
                .then(res => res.json())
                .then(res => (this.results = res.results))
                    }
    }
})