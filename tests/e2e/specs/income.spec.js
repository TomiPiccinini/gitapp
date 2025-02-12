describe('Ingresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un ingreso', () => {
        cy.visit('/income');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '3');
        cy.get('input[name=category]').should('have.value', 'Sueldo');
        cy.get('input[name=amount]').should('have.value', '50000');
    });

    it('Deberia poder crear un nuevo ingreso', () => {
        cy.visit('/income');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.get('input[name=descripcion]').type('descripcion');
        cy.contains('Guardar').click();
        cy.reload();
        cy.get('[data-testid=movement]').should('have.length', 5);
    });

    it('Deberia aparecer alerta de guardado', (done) => {
        cy.visit('/income');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.get('input[name=descripcion]').type('descripcion');
        cy.contains('Guardar').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Guardado exitoso');
            done();
          });     
    });
    
    it('Deberia poder crear un nuevo ingreso y que se muestre en la lista sin tener que hacer refresh', () => {
        cy.visit('/income');
        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.get('input[name=descripcion]').type('descripcion');
        cy.contains('Guardar').click();
        cy.get('[data-testid=movement]').should('have.length', 5);
    });
  
    it('Deberia cargar monto con decimales', () => {
        cy.visit('/income');
        cy.get('input[name=descripcion]').type('holamundo');
        cy.get('input[name=date]').type('2021-07-05');
        cy.get('input[name=category]').type('Expensas');
        cy.get('input[name=amount]').type("1234.56");
        cy.contains('Guardar').click();
        cy.reload();

        cy.get(':nth-child(5) > [data-testid=movement] > .level-right > :nth-child(1) > .has-text-success').should('include.text', '1.234,56')
    });

    it('Deberia poder crear un nuevo ingreso con fecha distinta a la de hoy', () => {
        cy.visit('/income');
        cy.get('input[name=date]').type('2021-02-02');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.get('input[name=descripcion]').type('descripcion');
        cy.contains('Guardar').click();
        cy.get('body > main > div > div > div:nth-child(2) > div > div.card-content > div > ul > li:nth-child(5) > div > div.level-left > div:nth-child(2) > div > p.has-text-weight-light.is-size-7').should(($date) => {
            
            //En los test locales tira error el test porque te resta un día el que seleccionaste, pero en Github funciona bien. Supongo que será por la hora local y la del servidor, pero igualmente resuelvo 
            //la actividad que es crear un movimiento con fecha distinta a la de hoy.
            expect($date.text().trim()).equal('2/2/2021');
          });
    });
});