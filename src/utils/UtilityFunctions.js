import _ from 'lodash';

export const isString = (value) => _.isString(value);

export const isSerializable = (obj) => {
  if (
    _.isUndefined(obj) ||
    _.isNull(obj) ||
    _.isBoolean(obj) ||
    _.isNumber(obj) ||
    _.isString(obj)
  ) {
    return true;
  }

  if (!_.isPlainObject(obj) && !_.isArray(obj)) {
    return false;
  }

  const objectValuesAreSerializable = Object.values(obj).every(
    (value) => !exports.isSerializable(value)
  );

  return objectValuesAreSerializable;
};

export const isValuePreviouslyStored = (value) => value !== null;
