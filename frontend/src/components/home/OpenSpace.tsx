import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

import { useAppSelector } from "@/app/hooks";
import { useEffect, useState } from "react";
import { getSpaces } from "@shared/api";

function OpenSpace() {
  const spaceName = useAppSelector((state) => state.space.name);
  const [open, setOpen] = useState(false);
  const [spaces, setSpaces] = useState([] as string[]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getSpaces(token || "").then((spaces) => setSpaces(spaces));
  }, []);

  return (
    <Modal
      isOpen={open || !spaceName}
      onClose={() => setOpen(false)}
      backdrop="blur"
      classNames={{
        closeButton: !spaceName ? "hidden" : "",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex justify-center">Open Space</ModalHeader>
        <ModalBody>
          <div>
            <Listbox>
              <ListboxItem key={"sp"}></ListboxItem>
            </Listbox>
            <div></div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default OpenSpace;
