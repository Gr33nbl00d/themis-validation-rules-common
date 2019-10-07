import {ValidationRule} from "themis-validation-core";

export class MaxLengthRule extends ValidationRule {

    private maxLengthValue: number;

    constructor(maxLengthValue: number) {
        super();
        this.maxLengthValue = maxLengthValue;
    }

    protected addValidationRuleTextArguments(object: any) {
        object.maxLength = this.maxLengthValue;
    }

    getErrorTextTemplate(): string {
        return "validation_input_maxlength";
    }


    isValid(value): boolean {
        if (Array.isArray(value)) return value.length === 0 || value.length <= this.maxLengthValue;

        return value === undefined || value === null ? true : value === '' || String(value).length <= this.maxLengthValue;

    }
}
