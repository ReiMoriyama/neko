export default function Home() {
  return (
    <>
      <header>
        <div className="flex justify-between w-[960px] mx-auto ">
          <img
            className="w-[120px] h-10 mt-[10px]"
            src="/logo.svg"
            alt="logo"
          />
          <nav className="flex space-x-8 items-center">
            <p>About</p>
            <p>Bicycle</p>
          </nav>
        </div>
      </header>

      <main>
        <div className="mb-4">
          <img className="mt-[10px]" src="/mainVisual.jpg" alt="mainVisual" />
          <div className="justify-center flex">
            <h2 className="mt-20 text-[32px] border-b border-black">About</h2>
          </div>
          <div className="mt-[198px] flex justify-center space-x-[30px]">
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="/about.jpg"
              alt="about"
            />

            <div className="space-y-[15px]">
              <p className="text-[16px] font-bold">KAKERU MIYAICHI</p>
              <p className="w-[401px] text-[14.4px]">
                テキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキスト
                テキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <h2 className="mt-[100px] text-[32px] border-b border-black mb-[60px]">
            Bicycle
          </h2>
        </div>

        <div className="flex space-x-[17px] justify-center">
          <div className="text-center">
            <img
              className="w-[274.4px] h-[182px] mb-[10px] mx-auto"
              src="/bicycle1.jpg"
              alt="bicycle1"
            />
            <div className="space-y-[15px]">
              <p className="text-[16px] font-bold">タイトルタイトル</p>
              <p className="text-[14.4px]">テキストテキストテキスト</p>
            </div>
          </div>
          <div className="text-center">
            <img
              className="w-[274.4px] h-[182px] mb-[10px] mx-auto"
              src="/bicycle2.jpg"
              alt="bicycle2"
            />
            <div className="space-y-[15px]">
              <p className="text-[16px] font-bold">タイトルタイトル</p>
              <p className="text-[14.4px]">テキストテキストテキスト</p>
            </div>
          </div>
          <div className="text-center">
            <img
              className="w-[274.4px] h-[182px] mb-[10px] mx-auto"
              src="/bicycle3.jpg"
              alt="bicycle3"
            />
            <div className="space-y-[15px]">
              <p className="text-[16px] font-bold">タイトルタイトル</p>
              <p className="text-[14.4px]">テキストテキストテキスト</p>
            </div>
          </div>
        </div>

        <footer className="text-center mt-[115px] mb-3">
          <small>© 2020 Profile</small>
        </footer>
      </main>
    </>
  );
}
