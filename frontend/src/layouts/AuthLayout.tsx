import { ReactElement } from "react";
import { Image } from "@nextui-org/react";

function AuthLayout({
  welcome,
  form,
}: {
  welcome: ReactElement;
  form: ReactElement;
}) {
  return (
    <div className="overflow-hidden px-8 py-10 rounded-3xl bg-gradient-to-t from-[rgb(10,10,10)] to-[rgb(18,18,18)] border-t-2 border-t-[rgb(32,32,32)] flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <Image width={64} src="logo_64.png" radius="none" />
        {welcome}
      </div>
      {form}
    </div>
  );
}

export default AuthLayout;
