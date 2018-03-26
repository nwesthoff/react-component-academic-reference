import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './references.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

export const REFERENCE_STYLES = { harvard: 'harvard' };

const getHarvardReferenceString = reference => {
  if (!reference.entryTags) {
    return null;
  }
  let referenceString = '';
  if (reference.entryTags.author) {
    referenceString += `${reference.entryTags.author}. `;
  }
  if (reference.entryTags.title) {
    referenceString += `"${reference.entryTags.title}". `;
  }
  if (reference.entryTags.journal) {
    referenceString += 'In: ';
    referenceString += `In: ${reference.entryTags.journal}`;
    if (reference.entryTags.year) {
      referenceString += ` (${reference.entryTags.year})`;
    }
    referenceString += '. ';
  }
  if (reference.entryTags.isbn) {
    referenceString += `ISBN: ${reference.entryTags.isbn}. `;
  }
  if (reference.entryTags.doi) {
    referenceString += `DOI: ${reference.entryTags.doi}. `;
  }
  if (reference.entryTags.url) {
    referenceString += `URL: ${reference.entryTags.url}. `;
  }

  return referenceString;
};

const getReferenceString = (referenceStyle, reference) => {
  if (referenceStyle === REFERENCE_STYLES.harvard) {
    return getHarvardReferenceString(reference);
  }
  return null;
};

const References = props => {
  const {
    references,
    referenceStyle,
    className,
    referenceClassName,
    ...rest
  } = props;

  const classNameFinal = [getClassName('references__outer')];
  if (className) classNameFinal.push(className);

  const referenceClassNameFinal = [getClassName('references__reference')];
  if (referenceClassName) classNameFinal.push(referenceClassName);

  return (
    <div className={classNameFinal.join(' ')} {...rest}>
      {references.map((r, i) => (
        <span id={r.citationKey} className={referenceClassNameFinal.join(' ')}>
          {`[${i + 1}] ${getReferenceString(referenceStyle, r)}`}
          <br />
          <br />
        </span>
      ))}
    </div>
  );
};

References.propTypes = {
  references: PropTypes.object.isRequired,
  referenceStyle: PropTypes.oneOf(REFERENCE_STYLES),
  className: PropTypes.string,
  referenceClassName: PropTypes.string,
};

References.defaultProps = {
  referenceClassName: null,
  referenceStyle: REFERENCE_STYLES.harvard,
  className: null,
};

export default References;
