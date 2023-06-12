const template = ({ componentName, props, jsx }, { tpl }) => {
    return tpl`
// This is auto-generated file by scripts/convert-svg

import React, { SVGProps } from 'react';

const ${componentName} = (${props}) => (
  ${jsx}
);

export default ${componentName};
`;
};

module.exports = template;
