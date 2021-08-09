class HomePage {
    constructor(page){
        this.page = page
    }

    _searchInput = '#input-busca'
    _searchButton = 'button[type="submit"]'

    async findProduct(product) {
        await this.page.fill(this._searchInput, product)
        await this.page.click(this._searchButton)
        await this.page.waitForSelector('#listingCount')
    }
}


module.exports = HomePage