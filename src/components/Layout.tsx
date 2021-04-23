import styled from "styled-components";
import { useState } from "react";
import { Settings, Display } from "./";


const HorizontalLayout = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background.page};
  color: ${({ theme }) => theme.colors.font.secondary};

  > * {
    &:nth-child(1) {
      flex: 7;
    }

    &:nth-child(2) {
      flex: 2;
    }
  }
`;

export default function Layout() {
  const [customInput, setCustomInput] = useState<number>(1);
  const [customSelect, setCustomSelect] = useState<string>("option1");


  function validatedSetCustomInput(value: number) {
    if (true) setCustomInput(value);
  }

  function validatedSetCustomSelect(value: string) {
    if (true) setCustomSelect(value);
  }

  return <HorizontalLayout>
    <Display
      customInput={customInput}
      customSelect={customSelect}
    />
    <Settings
      customInput={customInput}
      customSelect={customSelect}
      validatedSetCustomInput={validatedSetCustomInput}
      validatedSetCustomSelect={validatedSetCustomSelect}
    />
  </HorizontalLayout>;
}