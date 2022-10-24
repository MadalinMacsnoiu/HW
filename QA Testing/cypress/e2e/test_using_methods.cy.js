import {addToBasket,searchProduct} from "./Shared/Products"

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/telefoane-mobile/c?ref=hp_menu_quick-nav_1_16&type=category')


    searchProduct("iphone 11","//*[@id=\"searchboxTrigger\"]","//*[@id=\"masthead\"]/div/div/div[2]/div/form/div[1]/div[2]/button[2]/i")
    addToBasket("//*[@id=\"card_grid\"]/div[1]/div/div/div[4]/div[2]/form/button")


    cy.splitUrl("https://www.eos-all55481-ro-dev.tgt.e5.c.emag.network/telefon-mobil-apple-iphone-11-64gb-red-mwlv2rm-a/pd/DBFZX6BBM/?X-Search-Id=2ee4c4824c214e8cddb1&X-Product-Id=5956169&X-Search-Page=1&X-Search-Position=0&X-Section=search&X-MB=0&X-Search-Action=view")

  })
})