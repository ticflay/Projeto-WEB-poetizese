import React from "react";
import { Field } from "redux-form";
import { TextArea } from "semantic-ui-react";
import buildFormField from "./buildFormField";
import isLength from "validator/lib/isLength";
import memoize from "fast-memoize";

const FormField = buildFormField(TextArea, (input, meta, rest) => {
  return {
    ...input,
    autoComplete: "off",
    ...rest,
    invalid: `${meta.touched && (meta.invalid || rest.invalid)}`,
  };
});

const buildValidator = memoize((required, minSize, other) => {
  return [
    (value) => {
      if (required && !value) {
        return "required";
      }
      if (minSize && !isLength(value, minSize)) {
        return "minSize";
      }
      return undefined;
    },
  ].concat(other || []);
});

export default function TextAreaField(props) {
  const { required, type, validate, minSize } = props;
  return (
    <Field
      {...props}
      component={FormField}
      validate={buildValidator(required, Number(minSize), validate)}
    />
  );
}
