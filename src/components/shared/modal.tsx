import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { ReactNode, useState } from "react";

const DarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

const Centered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  /* width: 250px;
  height: 170px; */
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;


const Content = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  text-align: center;
`;

const Actions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CloseButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  /* box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06); */
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  /* margin-top: px; */
  /* margin-right: 14px; */

  :hover {
    /* box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04); */
    /* transform: translate(-4px, 4px); */
  }
`;

const DeleteButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  background: #ff3e4e;
  transition: all 0.25s ease;

  :hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background: #ff3e4e;
  }
`;

const CancelButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #2c3e50;
  background: #fcfcfc;
  transition: all 0.25s ease;

  :hover {
    box-shadow: none;
    transform: none;
    background: whitesmoke;
  }
`;

interface ModalProps {
  open: boolean;
  closeModal: () => void;
  children: ReactNode
}

const Modal = (props: ModalProps) => {
 const {closeModal, children} = props;



  return (
    <>
      <DarkBG onClick={() => closeModal()}>
        <Centered>
          <ModalContainer>
            <CloseButton onClick={() => closeModal()}>
              <RiCloseLine />
            </CloseButton>
            <Content>{children}</Content>
            <Actions>
              <ActionsContainer>
                <DeleteButton onClick={() => closeModal()}>Open Project</DeleteButton>
                <CancelButton onClick={() => closeModal()}>Source Code</CancelButton>
              </ActionsContainer>
            </Actions>
          </ModalContainer>
        </Centered>
      </DarkBG>
    </>
  );
};

export default Modal;
