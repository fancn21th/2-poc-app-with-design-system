import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
