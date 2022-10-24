
export function addToBasket(path){
    cy.xpath(path).click()
}

export function searchProduct(name,searchPathButton,searchButton){
    cy.xpath(searchPathButton).click().type(name)
    cy.xpath(searchButton).click()
}