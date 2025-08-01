describe('GET Mercado Libre', () => {
    it('GET departments', () => {
        cy.request('GET', 'https://www.mercadolibre.com.ar/menu/departments').then((response) => {
            expect(response.status).to.eq(200);
            const responseString = JSON.stringify(response.body)
            expect(responseString).to.include("departments");
        });
    })
})