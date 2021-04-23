import styled from "styled-components";

const Sidebar = styled.section`
  flex: 2;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.sidebar};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.font.primary};
  border-left: 1px solid rgba(0, 0, 0, 0.8);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1em;
  }
  
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid black;
  }
`;

const Title = styled.div`
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.background.section};
  color: ${({ theme }) => theme.colors.font.primary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  padding: 15px;
  outline: none;
  width: 100%;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 15px;
  color: rgba(255, 255, 255, 0.9);
  background-color: #333333;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  outline: none;
  display: block;
`;

const StyledSelect = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 15px;
  color: rgba(255, 255, 255, 0.9);
  background-color: #333333;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.8);
  outline: none;
  display: block;
`;

interface ComponentProps {
  customInput: number,
  customSelect: string,
  validatedSetCustomInput: (value: number) => void,
  validatedSetCustomSelect: (value: string) => void
}

const Settings: React.FC<ComponentProps> = (props: ComponentProps) => {
  return <Sidebar>
    <Title>Custom Input</Title>
    <Content>
      <StyledInput
        name="customInput"
        placeholder="customInput"
        type="number"
        value={props.customInput}
        onChange={(e) => props.validatedSetCustomInput(+e.currentTarget.value)}
      />
    </Content>
    <Title>Custom Select</Title>
    <Content>
      <StyledSelect
        name="customSelect"
        value={props.customSelect}
        onChange={(e) => props.validatedSetCustomSelect(e.currentTarget.value)}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </StyledSelect>
    </Content>
  </Sidebar>;
}

export default Settings;