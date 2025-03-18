import "./App.css";

function App() {
  return (
    <>
      {/* <div className="h-screen w-64 bg-gray-100 text-black fixed pl-3 pr-3 top-0 left-0 overflow-y-auto">
        <div class="flex flex-row ...">
          <div>
            <img
              src="/src/assets/image/logo.jpg"
              alt=""
              className="w-12 h-12  mt-3 ml-2 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="mt-6 ml-2  text-xl font-bold">IZAJ-LIGHTING</div>
          </div>
        </div>

        <nav>
          <input
            type="text"
            placeholder="Search"
            className=" w-full px-4 py-2 mt-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="block w-full font-bold ml-5  mt-6 hover:decoration-pink-500 transition duration-300"
              >
                Dashboard
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block w-full font-bold ml-5  mt-3 hover:decoration-pink-500 transition duration-300"
              >
                Branch
              </a>
            </li>

            <select className="w-full px-8  py-2 cursor-pointer bg-gray-100 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Lucena</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
            <li>
              <a
                href="#"
                className="block w-full font-bold ml-5  hover:decoration-pink-500 transition duration-300"
              >
                Branch Request
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full font-bold ml-5 mt-3 hover:decoration-pink-500 transition duration-300"
              >
                Stock
              </a>
            </li>
            
          </ul>
        </nav>
      </div> */}

      <div className="h-screen w-64 bg-gray-100 text-black fixed top-0 left-0 overflow-y-auto flex flex-col justify-between">
        {/* Header Section */}
        <div>
          <div className="flex flex-row items-center p-3">
            <div>
              <img
                src="/src/assets/image/logo.jpg"
                alt="Logo"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="ml-2">
              <div className="text-xl font-bold">IZAJ-LIGHTING</div>
            </div>
          </div>

          {/* Navigation Section */}
          <nav className="p-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <ul className="space-y-2 mt-4">
              <li>
                <a
                  href="#"
                  className="block w-full font-bold hover:text-orange-400 transition duration-300"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full font-bold hover:text-orange-400 transition duration-300"
                >
                  Branch
                </a>
              </li>
              <li>
                <select className="w-full px-4 py-2 hover:text-orange-400 cursor-pointer bg-gray-100 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Lucena</option>
                  <option value="option1">Lucena</option>
                </select>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full mt-5 font-bold hover:text-orange-400 transition duration-300"
                >
                  Branch Request
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full px-5 font-semibold hover:text-orange-400 transition duration-300"
                >
                  Pending Request
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block w-full px-5 font-semibold hover:text-orange-400 transition duration-300"
                >
                  Transferred
                </a>
              </li>

              <div className="mt-15">
                <li>
                  <a
                    href="#"
                    className="block w-full mt-5 font-bold hover:text-orange-400 transition duration-300"
                  >
                    Stock
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block w-full mt-3 font-bold hover:text-orange-400 transition duration-300"
                  >
                    Setting
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        {/* Footer Section */}
        <footer className="p-4 border-t border-gray-300">
          <div class="flex flex-row ...">
            <div>
              <img
                src="/src/assets/image/logo.jpg"
                alt=""
                className="w-10     rounded-full object-cover"
              />
            </div>
            <div>
              <div className="mt-3 ml-2  text-samall font-bold">
                Sarmiento Sherwin
              </div>
            </div>
          </div>
          {/* <div className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} IZAJ-LIGHTING. All rights
            reserved.
          </div> */}
        </footer>
      </div>
    </>
  );
}

export default App;
