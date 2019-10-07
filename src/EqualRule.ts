import {ValidationRule} from "themis-validation-core";

export class EqualRule extends ValidationRule {
    private equalTo: any;
    private i18nErrorText: string;

    constructor(equalTo, i18nErrorText: string) {
        super();
        this.i18nErrorText = i18nErrorText;
        this.equalTo = equalTo;
    }

    getErrorTextTemplate(): string {
        return this.i18nErrorText;
    }

    isValid(value): boolean {
        if (value === null || value === undefined || value === '') {
            return true;
        }
        return value === this.equalTo;
    }
}
