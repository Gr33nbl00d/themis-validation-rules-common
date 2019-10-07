import {ValidationRule} from "themis-validation-core";

export class EmailRule extends ValidationRule {

    getErrorTextTemplate() :string{
        return "validation_email_not_valid"
    }

    isValid(value): boolean {
        var reg = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;
        return reg.test(value);
    }

}
