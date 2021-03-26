import { FieldError } from '../generated/graphql';

/**
 *
 * @param errors GraphQL errors.
 * @returns Formatted map of errors.
 */
export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};
  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};
