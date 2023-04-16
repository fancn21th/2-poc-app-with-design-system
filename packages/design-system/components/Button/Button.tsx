import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button``;

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label = 'Button', onClick }: ButtonProps) => {
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

export default Button;
