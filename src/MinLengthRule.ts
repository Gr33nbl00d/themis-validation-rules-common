import {ValidationRule} from "themis-validation-core";

export class MinLengthRule extends ValidationRule {
    private minLengthValue: number;

    constructor(minLengthValue: number) {
        super();
        this.minLengthValue = minLengthValue;
    }

    protected addValidationRuleTextArguments(object: any) {
        object.minLength=this.minLengthValue
    }

    getErrorTextTemplate(): string {
        return "validation_input_minlength";
    }

    isValid(value): boolean {
        if (Array.isArray(value)) return value.length === 0 || value.length >= this.minLengthValue;

        return value === undefined || value === null ? true : value === '' || String(value).length >= this.minLengthValue;

    }
}