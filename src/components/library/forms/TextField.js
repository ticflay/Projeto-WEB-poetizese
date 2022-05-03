import React from "react";
import { Field } from "redux-form";
import TextInput from "react-bootstrap/FormControl";
import buildFormField from "./buildFormField";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import memoize from "fast-memoize";

const FormField = buildFormField(TextInput, (input, meta, rest) => {
  return {
    ...input,
    autoComplete: "off",
    ...rest,
    invalid: `${meta.touched && (meta.invalid || rest.invalid)}`,
  };
});

let id = 0;
function memoizedId(x) {
  if (!x.__memoizedId) x.__memoizedId = ++id;
  return { __memoizedId: x.__memoizedId };
}

const buildValidator = memoize(
  (required, type, minSize, other) => {
    return [
      (value) => {
        if (required && !value) {
          return "required";
        } else if (type === "email" && !isEmail(value)) {
          return "email";
        }
        if (minSize && !isLength(value, minSize)) {
          return "minSize";
        }
        return undefined;
      },
    ].concat(other || []);
  },
  {
    serializer: (args) => {
      const argumentsWithFuncIds = Array.from(args).map((x) => {
        if (typeof x === "function") return memoizedId(x);
        return x;
      });
      return JSON.stringify(argumentsWithFuncIds);
    },
  }
);

export default function TextField(props) {
  const { required, type, validate, minSize } = props;
  return (
    <Field
      {...props}
      component={FormField}
      validate={buildValidator(required, type, Number(minSize), validate)}
    />
  );
}
