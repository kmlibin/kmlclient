import Navbar from "@/components/Navbar/Navbar";

export default function NotHomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className={`flex w-full flex-col bg-customWhite justify-center items-center !overflow-hidden`}>
        <Navbar />
        {children}
      </div>
    );
  }