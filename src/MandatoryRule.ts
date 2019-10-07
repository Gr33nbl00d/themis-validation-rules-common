import {ValidationRule} from "themis-validation-core";


export class MandatoryRule extends ValidationRule {

    getErrorTextTemplate(): string {
        return "validation_input_required";
    }

    isValid(value): boolean {

        return value != undefined && value != null  && value != "";
    }
}