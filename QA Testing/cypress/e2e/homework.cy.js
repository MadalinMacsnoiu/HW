describe('empty spec', () => {


  it('passes', () => {
    cy.visit('https://www.emag.ro/')


    cy.get('[class="searchbox-main gtm_search_bar_click_search_week js-searchbox-input"]').type('Iphone 8');
    cy.get('[class="em em-search"]').click();
    cy.get('[src="https://s13emagst.akamaized.net/products/8892/8891501/images/res_4bd85c5b3fe313d31097680ce4864e9e.jpg?width=720&height=720&hash=87313DFF61BE6266D88EB1D7037160AB"]').click();
    cy.get('[class="btn btn-xl btn-primary btn-emag btn-block main-button gtm_680klw yeahIWantThisProduct"]').click();
    cy.get('[class="btn btn-primary btn-sm btn-block"]').click();
    cy.get('[class="money-int"]').contains('1.332');

    cy.wait(3000);

    cy.get('[class="gui-input select2 product-quantity-select select2-hidden-accessible"]').select(2);

  })
})