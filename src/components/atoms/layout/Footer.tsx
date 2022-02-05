import { VFC } from "react";
import styled from "styled-components";
export const Footer: VFC = () => {
    return <SFooter className="font-link">copyright&copy;Kazutoshi Yamaguchi All rights reserved.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  font-size:6px;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
 
`;
