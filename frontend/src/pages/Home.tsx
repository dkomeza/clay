import {
  Editor,
  Navbar,
  SidebarLeft,
  SidebarRight,
  OpenSpace,
} from "@/components/home";

function Home() {
  return (
    <div className="flex h-[100vh] w-full">
      <Navbar />
      <SidebarLeft />
      <Editor />
      <SidebarRight />

    </div>
  );
}

export default Home;
