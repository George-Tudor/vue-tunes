const app = new Vue({
    el: '#authorSearch',
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
    }
})