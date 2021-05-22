import MainPage from  '../pageObject/main.page';

describe('My page testing', () => {
    it('should render basic element and simple demo', async () => {
        await MainPage.open();
        await expect(MainPage.AddButton).toBeExisting();
        await expect(MainPage.RowListContainer).toBeExisting();
        // add rows
        await (await MainPage.AddButton).click();
        await (await MainPage.AddButton).click();
        await (await MainPage.AddButton).click();
        const row = await MainPage.Row;

        // three element
        await expect(row.length).toBe(3);

        // input value
        await (await MainPage.Input)[0].addValue('ZZZABC');
        await (await MainPage.Input)[1].addValue('ZZZ');
        await (await MainPage.Input)[2].addValue('Z');

        // check field
        await expect(await (await MainPage.ContainList)[0].getText()).toBe(JSON.stringify([1,2]));
        await expect(await (await MainPage.ContainList)[1].getText()).toBe(JSON.stringify([2]));
        await expect(await (await MainPage.ContainList)[2].getText()).toBe(JSON.stringify([]));

        // delete second
        await (await MainPage.DeleteButton)[2].click();

        // check field
        await expect(await (await MainPage.ContainList)[0].getText()).toBe(JSON.stringify([1]));
        await expect(await (await MainPage.ContainList)[1].getText()).toBe(JSON.stringify([]));
    });
});


