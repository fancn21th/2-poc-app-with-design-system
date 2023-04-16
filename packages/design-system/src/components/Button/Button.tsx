import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: red;
`;

export type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label = 'Button', onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// Button.defaultProps = {
//   label: 'Button',
//   onClick: () => {
//     return null;
//   },
// };

// /**
//  * be aware the propTypes has to be compatible with the type of props defined in ts
//  **/

// Button.propTypes = {
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
