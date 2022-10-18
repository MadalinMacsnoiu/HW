

describe('empty spec', () => {
  //it('passes', () => {
    // cy.visit('/')
   // cy.visit('/genius?ref=hdr_genius');
  //});

  it('should ',  () => {
    cy.visit('/genius?ref=hdr_genius');


    cy.get('[class="gh-logo"]');

    cy.get('[class="gh-platforms"]');

    cy.get('[class="gh-text"]');

    cy.get('[class="btn btn-block btn-rounded gh-btn semibold gtm_wvegywxqbd"]').invoke('attr','href').should('contain', 'emag');

    cy.get('[src="https://s13emagst.akamaized.net/layout/all/images/logo/logo.svg"]');

    cy.get('[src="https://s13emagst.akamaized.net/layout/all/images/logo/tazz/logo.svg"]');

    cy.get('[src="https://s13emagst.akamaized.net/layout/all/images/logo/fd/logo_full.svg"]');

    cy.get('[src="https://s13emagst.akamaized.net/layout/all/images/logo/freshful/logo_full.svg"]');

    cy.xpath('(//div[@class="gcb-main"])[5]');

    cy.xpath('(//div[@class="gcb-main"])[6]').contains('Livrare gratuită');

    cy.xpath('(//div[@class="gcb-main"])[6]').contains('Oferte exclusive');

    cy.xpath('//div[@class="gh-content"]/a');//buton genius

    cy.xpath('//div[@class="navbar-branding"]');//.click().url()//buton emag

    cy.xpath('//div[@class="gcb-t-head"]').children(".gcb-main");//.eq(0)

    cy.xpath('//div[@class="gcb-main"]').eq(0).children('.list-unstyled');

    cy.xpath('//a[@class="ph-widget ph-collapse-one gcb-action text-center semibold"]').click({force:true, multiple: true});

    cy.contains("Activează abonamentul din contul tău eMAG.")

    cy.get('[class="btn btn-primary js-accept gtm_h76e8zjgoo btn-block"]').click()//buton accept cookies

    cy.xpath('//a[@class="font-size-ms strong login-btn btn btn-primary js-login-btn"]').should('have.attr', 'href', 'https://auth.emag.ro/user/login?ref=jy0z2o9t')//.click()//buton intra in contul meu (uneori nu apare)

    cy.xpath('//a[@class="navbar-brand"]')//.click()//.should('have.attr', 'href', 'https://www.emag.ro/')

    cy.url('should','https://www.emag.ro/')
  });

});

