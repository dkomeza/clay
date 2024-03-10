import {
  Modal,
  ModalContent,
  ModalBody,
  Listbox,
  ListboxItem,
  Image,
  Divider,
  Spacer,
  Card,
  Button,
} from "@nextui-org/react";

import { useAppSelector } from "@/app/hooks";
import { useEffect, useState } from "react";
import { getSpaces } from "@shared/api";

function OpenSpace() {
  const spaceName = useAppSelector((state) => state.space.name);
  const [open, setOpen] = useState(true);
  const [spaces, setSpaces] = useState([] as string[]);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    // getSpaces(token || "").then((spaces) => setSpaces(spaces));
  }, []);

  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      backdrop="blur"
      classNames={{
        closeButton: !spaceName ? "hidden" : "",
      }}
      size="lg"
    >
      <ModalContent>
        <div className="flex flex-row divide-x-1 divide-[rgb(44,44,44)]">
          <div className="flex-grow-1 flex flex-col items-center p-4 py-8">
            <h2 className="text-nowrap">Recent spaces</h2>
            <Listbox>
              <ListboxItem key={"Space 1"}>Space 1</ListboxItem>
              <ListboxItem key={"Space 2"}>Space 2</ListboxItem>
              <ListboxItem key={"Space 3"}>Space 3</ListboxItem>
            </Listbox>
          </div>
          <div className="flex flex-col bg-[rgb(18,18,18)] flex-grow-1 items-center p-4 py-8 min-w-80">
            <Image width={64} src="logo_128.png" radius="none" />
            <h1 className="text-3xl mt-2">Clay</h1>
            <Spacer y={4} />
            <Divider />
            <Spacer y={4} />
            <div className="flex flex-col gap-4">
              <Card className="p-2 px-4 flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-col">
                  <h2>Create new space</h2>
                  <p className="text-gray-500 font-light text-xs">
                    Create a new Clay Space in a specified location
                  </p>
                </div>
                <Button color="secondary">Create</Button>
              </Card>
              <Card className="p-2 px-4 flex flex-row gap-4 items-center justify-between">
                <div className="flex flex-col">
                  <h2>Open space</h2>
                  <p className="text-gray-500 font-light text-xs">
                    Open an existing Clay Space
                  </p>
                </div>
                <Button color="default">Open</Button>
              </Card>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default OpenSpace;
