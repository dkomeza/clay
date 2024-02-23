import { Link, Tab, Tabs } from "@nextui-org/react";
import {
  SettingsRounded,
  HelpOutlineRounded,
  FolderOpenRounded,
  SearchRounded,
} from "@mui/icons-material";

function Navbar() {
  return (
    <div className="flex h-full bg-[rgb(6,6,6)] border-r border-r-[rgb(24,24,24)] flex-col items-center = useContext(second) justify-between px-2 py-3">
      <div className="flex flex-col gap-2">
        <Tabs
          classNames={{
            tabList: "flex-col bg-transparent p-0 rounded-small",
            cursor: "!bg-[rgb(16,16,16)]",
            tab: "px-1",
          }}
        >
          <Tab key="explorer" title={<FolderOpenRounded />} />
          <Tab key="search" title={<SearchRounded />} />
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <Link href="/help" className="opacity-50 text-white">
            <HelpOutlineRounded />
          </Link>
        </div>
        <div>
          <Link href="/settings" className="opacity-50 text-white">
            <SettingsRounded />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
