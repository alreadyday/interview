import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get AddButton () { return $('#add-button'); }

    get RowListContainer() { return $('#row-list-container'); }

    get Row() {
        return $$('#row');
    }

    get Input() {
        return $$('input');
    }

    get ContainList() {
        return $$('#contain-list');
    }

    get DeleteButton() {
        return $$('#delete-button');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

export default new LoginPage();
