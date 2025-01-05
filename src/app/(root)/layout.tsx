import { Navigation, Footer } from "@/components";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex h-screen w-full font-inyter">
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <div>
              <Navigation />
            </div>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
