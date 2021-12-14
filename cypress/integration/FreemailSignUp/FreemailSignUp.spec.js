Given('I navigate to the website', () => {
    cy.visit('https://accounts.freemail.hu/oauth/login#authdone/checktid/notid');
  });
  
When('I click on Register Login Button', ()=>{
  
  cy.get('body > div.wrapper > div.container-fluid > div.login-column > div > div:nth-child(2) > form > div.row.btn-cont > div.col-xs-6.btn-padd-left.iframe-hide > a').click()
  })
  
And('validate the page title',()=>{
  
    cy.title('eq','Fiók létrehozása')
  
  })

Then('Fill email adress',()=>{
  
    cy.get('.email')
      .type('csakvalamirandom@freemail.hu').should('have.value', 'csakvalamirandom@freemail.hu')

  })
Then('Fill Surename',()=>{

    cy.get('.lastName')
    .type('Kicsi').should('have.value', 'Kicsi')

})

Then('Fill Name',()=>{

    cy.get('.firstName')
    .type('Kocsi').should('have.value', 'Kocsi')

})


