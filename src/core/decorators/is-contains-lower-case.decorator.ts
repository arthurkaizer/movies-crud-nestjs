import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { lowercaseLetters } from 'src/shared/constants/validation-helpers.constant';

@ValidatorConstraint({ name: 'IsLowercase', async: false })
class IsContainsLowercaseValidator implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(value: string, _?: ValidationArguments | undefined): boolean {
    if (!value) return false;

    for (const lowercaseLetter of lowercaseLetters) {
      if (value.includes(lowercaseLetter)) return true;
    }

    return false;
  }
}

export const IsContainsLowercase = (validationOptions: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, propertyName: string) =>
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsContainsLowercaseValidator,
    });
};
