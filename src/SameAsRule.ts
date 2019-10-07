import {ValidationRule, ValueRetriever} from "themis-validation-core";

export class SameAsRule extends ValidationRule {
    private valueRetriever: ValueRetriever;
    private errorText: string;
    private metadata: any;

    constructor(errorText: string, valueRetriever: ValueRetriever, metadata: any) {
        super();
        this.valueRetriever = valueRetriever;
        this.errorText = errorText;
        this.metadata = metadata;
    }

    getErrorTextTemplate(): string {
        return this.errorText;
    }

    isValid(value): boolean {
        return value === this.valueRetriever.getValue(this.metadata);
    }

}
