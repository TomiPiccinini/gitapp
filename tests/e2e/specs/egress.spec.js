describe('Egresos Test', () => {
    // Limpio la db antes de cada test
    beforeEach(() => {
        cy.task('seed');
    });

    it('Deberia cargar el formulario al editar un egreso', () => {
        cy.visit('/egress');

        cy.get('[data-testid=movement]')
            .find('button')
            .contains('editar')
            .click();

        cy.get('input[name=id]').should('have.value', '1');
        cy.get('input[name=category]').should('have.value', 'Supermercado');
        cy.get('input[name=amount]').should('have.value', '1000');
    });

    it('Deberia poder crear un nuevo egreso', () => {
        cy.visit('/egress');

        cy.get('input[name=date]').type('2021-04-26');
        cy.get('input[name=category]').type('Bono');
        cy.get('input[name=amount]').type('100000');
        cy.contains('Guardar').click();
        cy.reload();

        cy.get('[data-testid=movement]').should('have.length', 5);
    });
});
