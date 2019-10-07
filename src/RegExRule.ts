import {ValidationRule} from "themis-validation-core";

export class RegExRule extends ValidationRule {
    private regEx: string;
    private errorText: string;

    constructor(regEx: string, errorText: string) {
        super();
        this.regEx = regEx;
        this.errorText=errorText;
    }

    getErrorTextTemplate(): string {
        return this.errorText;
    }

    isValid(value): boolean {
        const regExp = new RegExp(this.regEx);
        return regExp.test(value);

    }

}

