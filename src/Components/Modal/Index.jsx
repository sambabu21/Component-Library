import { useEffect } from "react";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import Subtext from "../../Common Components/DisplaySection/Subtext";
import PreviewCode from "../../PreviewCode/Index";
import ModalContainer from "./ModalContainer";
import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import ModalText from "./ModalText";
import ModalToggler from "./ModalToggler";
import Button from "../Button/Button";
import Modal from "./Modal";
import ModalActions from "./ModalActions";
import PrimaryAction from "./PrimaryAction";
import SecondaryAction from "./SecondaryAction";
import Proptable from "../../Common Components/DisplaySection/Proptable";

export default function ModalSection() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const propstable = [{
        name:"closeOnClick",
        value : [`Boolean`],
        default : "false"
      }]

    return (
      <DisplaySection
        sectionTitle="Modals"
        sectionDescription="A modal is a website or app element that pops on top of the on-screen content. As it disables the content on the screen, it requires the user to engage with it by completing an action."
      >
        <Subheading>Basic modal</Subheading>
        <Subtext>
          Standard modal with title, supporting text and a close button on the top right corner.
        </Subtext>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-10 w-full">
                <ModalContainer>
                    <ModalToggler>
                        <Button variant="text">Open modal</Button>
                    </ModalToggler>
                    <Modal>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt</ModalText>
                        </ModalContent>
                    </Modal>
                    
                </ModalContainer>
              </div>
            }
            code={`<div>
    <ModalContainer>
        <ModalToggler>
            <Button variant="text">Open modal</Button>
        </ModalToggler>
        <Modal>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                </ModalText>
            </ModalContent>
        </Modal>      
    </ModalContainer>
</div>`}
          />
        </SubSection>

        <Subheading>Modal with CTA buttons</Subheading>
        <Subtext>
          Use the <span className="prop">ModalActions</span> tag to use CTA buttons on the modal. <span className="prop">PrimaryAction</span> and <span className="prop">SecondaryAction</span> both render buttons. Use the <span className="prop">onClick</span> prop on these buttons to pass in the function to be run on button click.
        </Subtext>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-10 w-full">
                <ModalContainer>
                    <ModalToggler>
                        <Button variant="text">Open modal</Button>
                    </ModalToggler>
                    <Modal>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt</ModalText>
                            <ModalActions>
                                <PrimaryAction>Delete</PrimaryAction>
                                <SecondaryAction>Cancel</SecondaryAction>
                            </ModalActions>
                        </ModalContent>
                        
                    </Modal>
                    
                </ModalContainer>
              </div>
            }
            code={`<div>
    <ModalContainer>
        <ModalToggler>
            <Button variant="text">Open modal</Button>
        </ModalToggler>
        <Modal>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                </ModalText>
                <ModalActions>
                    <PrimaryAction>Delete</PrimaryAction>
                    <SecondaryAction>Cancel</SecondaryAction>
                </ModalActions>
            </ModalContent>
        </Modal>      
    </ModalContainer>
</div>`}
          />
        </SubSection>

        <Subheading>Close modal on overlay click</Subheading>
        <Subtext>
          Use the <span className="prop">closeOnClick</span> prop to close the modal, when a user clicks on the overlay.
        </Subtext>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-10 w-full">
                <ModalContainer>
                    <ModalToggler>
                        <Button variant="text">Open modal</Button>
                    </ModalToggler>
                    <Modal>
                        <ModalOverlay closeOnClick/>
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt</ModalText>
                            <ModalActions>
                                <PrimaryAction>Delete</PrimaryAction>
                                <SecondaryAction>Cancel</SecondaryAction>
                            </ModalActions>
                        </ModalContent>
                        
                    </Modal>
                    
                </ModalContainer>
              </div>
            }
            code={`<div>
    <ModalContainer>
        <ModalToggler>
            <Button variant="text">Open modal</Button>
        </ModalToggler>
        <Modal>
            <ModalOverlay closeOnClick/>
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                </ModalText>
                <ModalActions>
                    <PrimaryAction>Delete</PrimaryAction>
                    <SecondaryAction>Cancel</SecondaryAction>
                </ModalActions>
            </ModalContent>
        </Modal>      
    </ModalContainer>
</div>`}
          />
        </SubSection>
        <Proptable propstable={propstable}/>
        </DisplaySection>
)
}    
  