import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 20px;
  gap: 40px;
  color: #596066;
`;

export const FilterGroup = styled.div`
  flex-grow: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #9EA5AD;
  border-radius: 2px;
`;
